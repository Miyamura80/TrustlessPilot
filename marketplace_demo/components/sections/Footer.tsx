import { GiWaxSeal } from 'react-icons/gi';
import { FaTwitter, FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsKeyboard } from 'react-icons/bs'
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-transparent sm:p-6 mx-8 lg:mx-20 pb-4 mt-20">
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-500 lg:my-6"/>
        <div className="flex items-center justify-between">
          <Link href={'/'} passHref>
            <BsKeyboard size={45} className="animate-spin text-gray-600 hover:text-gray-700 dark:text-white dark:hover:text-green-500 hover:scale-105 duration-3000 hover:cursor-pointer"/>
          </Link>
            <h3 className="text-2xl font-semibold">
              KeyboardLand
            </h3>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://twitter.com/lol" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-green-500 hover:scale-105 duration-200">
                <FaTwitter size={28}/>
              </a>
            </div>
        </div>
    </footer>
  )
}
