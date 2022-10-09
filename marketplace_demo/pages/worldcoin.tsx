import type { NextPage } from "next";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Worldcoin: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router)
    if (router) {
      if (router.query) {
        console.log(router.query)
      }
    }
  }, [router])

  return (
    <>
      <div>
        Welcome
      </div>
    </>
  );
};

export default Worldcoin;
