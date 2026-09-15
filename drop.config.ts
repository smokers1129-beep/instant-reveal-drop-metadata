import type { DropConfig } from "./src/config.ts";

export const config: DropConfig = {
  chain: "monad",

  contract: "0xc1e0bb3bed295b4406a7589ee4802d5629c3c2c6",

  tokenIdStart: 1,

  maxSupply: 100,

  reveal: {
    mode: "on-mint",

    shuffle: {
      enabled: false,
      commitment: null,
    },
  },

  mintState: {
    mode: "sequential",
    ttlSeconds: 10,
    confirmations: 0,
  },

  metadata: {
    source: "bundled",
    imageBaseUri: "",
  },

  placeholder: {
    name: "Unrevealed #{tokenId}",
    description: "This one has not been minted yet. Artwork appears here the moment it is.",
    image: "ipfs://REPLACE_WITH_YOUR_PLACEHOLDER_IMAGE_CID",
    attributes: [],
  },

  contractMetadata: null,
};

export default config;
