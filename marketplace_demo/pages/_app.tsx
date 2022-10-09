import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import { useContext, useState, useEffect } from 'react'
import React from 'react';
import { Web3Auth } from "@web3auth/web3auth";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";


const { chains, provider } = configureChains([chain.mainnet, chain.polygon], [publicProvider()]);
// console.log("Amalia provider")
// console.log(process.env.REACT_APP_WEB3_CLIENT_ID);
const REACT_APP_WEB3_CLIENT_ID = `BDe_C91ziyTzTzrs-JuKmrbziaJVTPIwqrAU1A6VdFfYygv9ZMn-EBYyDATChXVOTYtAGPq6aEBpDQQpTRqOe5I`

const constructorParams = {
  chains,
  options: {
    enableLogging: true,
    clientId: REACT_APP_WEB3_CLIENT_ID, // Get your own client id from https://dashboard.web3auth.io
    network: "testnet", // web3auth network, "mainnet", "cyan", or "aqua"
    chainId: "0x1", // chainId that you want to connect with
  },
}
const metamaskAdapter = new MetamaskAdapter({
  clientId: REACT_APP_WEB3_CLIENT_ID,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new Web3AuthConnector(constructorParams),
    new InjectedConnector({ chains }),
  ],
  provider,
});

const ProductContext = React.createContext([]);
const AuthContext = React.createContext([]);

function MyApp({ Component, pageProps, router }: AppProps) {
  const [productContext, setProductContext] = useState({price:0,tokenId:0,seller:"",owner:"",image:"",name:"",description:""});  
	const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: REACT_APP_WEB3_CLIENT_ID,
          chainConfig: {
            chainNamespace: "eip155",
            chainId: "0x1",
          },
        });
        web3auth.configureAdapter(metamaskAdapter);

        setWeb3auth(web3auth);

        await web3auth.initModal();
      } catch (error) {
        console.error(error);
      }};

      init();
  }, []);

  async function getUserInfo(){
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <ThemeProvider attribute="class">
          <ProductContext.Provider value={[productContext, setProductContext]}>
            <AuthContext.Provider value={[web3auth, setWeb3auth]}>
              <Component {...pageProps} />
            </AuthContext.Provider>
          </ProductContext.Provider>        
        </ThemeProvider>
      </motion.div>
    </WagmiConfig>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default MyApp;
