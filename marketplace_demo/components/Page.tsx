import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "./sections/Navbar";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div>
      <Head>
        <title>ECommerce | NFTMarketplace</title>
        <meta name="description" content="ECommerce Demo - NFTMarketplace" />
        <link rel="icon" href="/keyboard.png" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
