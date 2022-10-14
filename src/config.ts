import { config } from "dotenv";
import { siteUrls } from "./urls";
config();

/**
 * *Get the pages based on start and end values from script `yarn start START_INDEX:END_INDEX`
 * * process.argv - return use the array of script arguments
 */
const getPages = () => {
  const pages = process.argv.at(-1).split(":");
  const start = parseInt(pages[0]);
  const end = parseInt(pages[1]);
  return siteUrls.paths.slice(start, end);
};

export default {
  baseUrl: siteUrls.baseUrl, // ex: https://google.com
  pages: getPages(), // should be comma separated values
  lighthouse: {
    onlyCategories: ["performance", "seo", "best-practices", "accessibility"],
    output: "json",
    logLevel: "error",
  },
  google: {
    sheetId: process.env.GOOGLE_SHEET_ID, // ex: aef213fsdfg
    token: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), // ex: -----BEGIN PRIVATE KEY-----
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, // ex: sheet....@..serviceaccount.com
    },
  },
};
