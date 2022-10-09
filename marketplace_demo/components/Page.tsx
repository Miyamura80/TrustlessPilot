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
        <title>KeyboardLand</title>
        <meta name="description" content="Lets get those keyboards" />
        <link rel="icon" href="/keyboard.png" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
