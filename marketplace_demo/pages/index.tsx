import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import { Page } from "../components/Page";
import MarketplacePage from "./MarketplacePage";
import ReviewContainer from '../components/review/ReviewContainer'
import MyCollectionPage from "./MyCollectionPage";

const Home: NextPage = () => {
  return (
    <>
      <MarketplacePage />
      <ReviewContainer />
    </>
  );
};

export default Home;
