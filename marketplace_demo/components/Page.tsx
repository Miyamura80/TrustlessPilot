import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "./sections/Navbar";
import { Footer } from "./sections/Footer";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className="bg-neutral-200 dark:bg-zinc-800">
      <Head>
        <title>ECommerce | NFTMarketplace</title>
        <meta name="description" content="ECommerce Demo - NFTMarketplace" />
        <link rel="icon" href="/keyboard.png" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
