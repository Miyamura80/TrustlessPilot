import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import { DarkModeButton } from "../utils/DarkModeButton";
import { motion } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>

      <div className="py-10 flex flex-col w-full justify-around desktop:hidden">
        <div className="inline-flex tablet:flex justify-around">
          <div className="flex p-2 items-center">
            <Link href="/" passHref>
              <p className="flex font-bold text-3xl hover:cursor-pointer">KeyboardLand</p>
            </Link>
          </div>

          <div className="inline-flex items-center space-x-4">
            <DarkModeButton />
            <ConnectButton
              chainStatus="none"
              showBalance={false}/>

          </div>
        </div>
      </div>
    </div>
  );
}
