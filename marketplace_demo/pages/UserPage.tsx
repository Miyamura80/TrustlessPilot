import { Page } from "../components/Page";
import ReviewText from "../components/review/ReviewText";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { Tooltip, Tabs } from "flowbite-react";

export default function UserPage() {
  const walletAddress = "0xDfDeD3Eh4DFD409A489F5bH590f6fc9f314587E0";
  const verifiedHuman = true;
  const followers = 124;
  const following = 138;
  const globalScore = 2000;
  return (
    <Page>
      <div className="flex flex-row mt-6">
        <div className="basis-1/4 ml-10 mt-8 flex flex-col">
          <div>
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
              height="200"
              width="200"
              className="border-4"
            />
          </div>
          <div className="flex items-center">
            <div className="text-lg">degen.lens</div>

            <Tooltip content="Verified human" placement="right">
              {verifiedHuman && (
                <div className="ml-1">
                  <MdVerified color="MediumSlateBlue" />
                </div>
              )}
            </Tooltip>
          </div>
          <div className="text-sm text-violet-500">
            {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
          </div>
          <div>
            <p>Reputation</p>
            <p>{globalScore}</p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <p>Followers</p>
              <p>{followers}</p>
            </div>
            <div className="flex-1">
              <p>Following</p>
              <p>{following}</p>
            </div>
          </div>
        </div>
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active={true} title="Reviews Written">
            <div className="basis-3/5 flex-none border-2 rounded-xl p-6 m-8">
              <h1 className="text-3xl mb-5">NFT image</h1>
              <ReviewText />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Reviews Rated">Dashboard content</Tabs.Item>
        </Tabs.Group>
      </div>
    </Page>
  );
}
