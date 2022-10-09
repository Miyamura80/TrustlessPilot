import type { NextPage } from "next";
import Marketplace from "../components/Marketplace";
import { Page } from "../components/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <Marketplace />
    </Page>
  );
};

export default Home;
