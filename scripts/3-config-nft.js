import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xBd810d9bD12FefA39A72dD8F9013720f5125605b"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Teal tribe badge",
        description: "This NFT will give you access to TealDAO!",
        image: readFileSync("scripts/assets/tealDAO_pins2.PNG"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
