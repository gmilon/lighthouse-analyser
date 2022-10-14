import { config } from "dotenv";
import { siteUrls } from "./urls";
config();

export default {
  baseUrl: siteUrls.baseUrl, // ex: https://google.com
  pages: siteUrls.paths, // should be comma separated values
  lighthouse: {
    onlyCategories: ["performance", "seo", "best-practices", "accessibility"],
    output: "json",
    logLevel: "error",
  },
  google: {
    sheetId: process.env.GOOGLE_SHEET_ID, // ex: aef213fsdfg
    token: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // ex: -----BEGIN PRIVATE KEY-----
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL // ex: sheet....@..serviceaccount.com
    },
  },
};
