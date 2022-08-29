import { config } from "dotenv";
config();

export default {
  baseUrl: process.env.BASE_URL, // ex: https://google.com
  pages: process.env.PATHS.split(","), // should be comma separated values
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
