var express = require("express");
var router = express.Router();
/**
 * @TODO TEEST WITH THEGRAPH
 */
const { queryProfile } = require("../components/lens/queries");
const { User } = require("../classes/User");
const { verifyWorldcoin } = require("../components/worldcoin/verifyWorldcoin");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get(
    "/:walletAddress",
    async function (req, res, next) {
      const { walletAddress } = req.params;
      console.log(walletAddress)
      const userProfile = await queryProfile(walletAddress);
      const worldCoinVerified = await verifyWorldcoin(userProfile['profiles'][0]['profileId']);
      userProfile['profiles'][0]['worldCoinVerified'] = worldCoinVerified;

      const currentUser = new User(userProfile)
      // calculate reputation, personal opinion, friendship
      await await currentUser.getReputation()
      await await currentUser.getUserReviews()
      res.status(200).json(currentUser);
    }
  );

module.exports = router;
