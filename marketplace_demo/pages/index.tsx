import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import { Page } from "../components/Page";
import MarketplacePage from "./MarketplacePage";
import ReviewContainer from '../components/review/ReviewContainer'

const Home: NextPage = () => {
  return (
    <Page>
      <MarketplacePage />
      <ReviewContainer />
    </Page>
  );
};

export default Home;
