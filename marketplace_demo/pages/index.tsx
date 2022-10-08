import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import { Page } from "../components/Page";
import MarketplacePage from "./MarketplacePage";

const Home: NextPage = () => {
  return (
    <Page>
      <MarketplacePage />
    </Page>
  );
};

export default Home;
