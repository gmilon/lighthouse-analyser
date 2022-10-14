const { GoogleSpreadsheet } = require("google-spreadsheet");
import config from "../config";
import { AllLighthouseScore, LighthousePageScore } from "../lighthouse";
import { getCurrentDate } from "../utils";

interface GoogleDataFormat extends LighthousePageScore {
  PAGE: string;
}

function getFormattedScores(
  scores: AllLighthouseScore[]
): GoogleDataFormat | {} {
  let output = [];
  for (let key in scores) {
    let data = {
      PAGE: key.toUpperCase(),
      SEO: scores[key]?.seo,
      PERFORMANCE: scores[key]?.performance,
      BEST_PRACTICE: scores[key]?.bestpractice,
      ACCESSIBILITY: scores[key]?.accessibility,
      TOTAL: scores[key]?.total,
      DATE: getCurrentDate()
    };
    output.push(data);
  }
  return output;
}

export async function saveResultToGoogleSheet(data) {
  const document = new GoogleSpreadsheet(config.google.sheetId);
  await document.useServiceAccountAuth(config.google.token);
  await document.loadInfo();
  const sheet = document.sheetsByIndex[0];
  //add new row
  const rows = getFormattedScores(data);
  await sheet.addRows(rows);
  return rows;
}
