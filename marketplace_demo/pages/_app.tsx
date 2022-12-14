import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'KeyboardLand',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function MyApp({ Component, pageProps, router }: AppProps) {
  const [productContext, setProductContext] = useState({price:0,tokenId:0,seller:"",owner:"",image:"",name:"",description:""});


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={
         lightTheme({
          accentColor: 'rgb(34, 197, 94)',
          accentColorForeground: '#ffffff',
          fontStack: 'system',
        })}
        appInfo={{
           appName: 'Signet',
           learnMoreUrl: 'https://signet3.xyz',
         }}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
