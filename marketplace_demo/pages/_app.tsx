import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";


const { chains, provider } = configureChains([chain.mainnet, chain.polygon], [publicProvider()]);
// console.log("Amalia provider")
// console.log(process.env.REACT_APP_WEB3_CLIENT_ID);
const constructorParams = {
  chains,
  options: {
    enableLogging: true,
    clientId: `BDe_C91ziyTzTzrs-JuKmrbziaJVTPIwqrAU1A6VdFfYygv9ZMn-EBYyDATChXVOTYtAGPq6aEBpDQQpTRqOe5I`, // Get your own client id from https://dashboard.web3auth.io
    network: "testnet", // web3auth network, "mainnet", "cyan", or "aqua"
    chainId: "0x1", // chainId that you want to connect with
  },
}
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new Web3AuthConnector(constructorParams),
    new InjectedConnector({ chains }),
  ],
  provider,
});



function MyApp({ Component, pageProps, router }: AppProps) {
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
          <Component {...pageProps} />
        </ThemeProvider>
      </motion.div>
    </WagmiConfig>
  );
}

export default MyApp;
