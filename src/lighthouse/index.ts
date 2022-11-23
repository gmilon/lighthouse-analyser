import lighthouse from "lighthouse";
import { launch, LaunchedChrome } from "chrome-launcher";
import config from "../config";

export interface LighthousePageScore {
  total: number;
  seo: number;
  performance: number;
  accessibility: number;
  bestPractice: number;
}

enum AUDITS {
  LCP = "largest-contentful-paint",
  FID = "max-potential-fid",
  CLS = "cumulative-layout-shift",
  FCP = "first-contentful-paint",
}

function getPageTotalScore(results): LighthousePageScore {
  const { categories, audits } = results;
  const seo: number = (categories?.seo?.score || 0) * 100;
  const performance: number = (categories?.performance?.score || 0) * 100;
  const accessibility: number = (categories?.accessibility?.score || 0) * 100;
  const bestPractice: number =
    (categories?.["best-practices"]?.score || 0) * 100;
  const webVitals = {
    lcp: audits?.[AUDITS.LCP]?.displayValue,
    fid: audits?.[AUDITS.FID]?.displayValue,
    cls: audits?.[AUDITS.CLS]?.displayValue,
    fcp: audits?.[AUDITS.FCP]?.displayValue,
  };
  return {
    ...webVitals,
    seo,
    performance,
    bestPractice,
    accessibility,
    total: seo + performance + accessibility + bestPractice,
  };
}

async function getChrome(): Promise<LaunchedChrome> {
  return await launch({ chromeFlags: ["--headless"] });
}

async function getLightHouseResult(chrome, path) {
  const { lhr } = await lighthouse(config.baseUrl + path, {
    ...config.lighthouse,
    port: chrome.port,
  });
  return lhr;
}

async function generateLighthouseTotalScoreForPage(path) {
  const chrome: LaunchedChrome = await getChrome();
  const lighthouseReport = await getLightHouseResult(chrome, path);
  const totalScore = getPageTotalScore(lighthouseReport);
  await chrome.kill();
  return totalScore;
}

export type AllLighthouseScore = {
  [key: string]: LighthousePageScore;
};

export async function getAllLighthouseScore(): Promise<AllLighthouseScore> {
  const pages = config.pages;
  const allScore = {};
  for (let i = 0; i < pages.length; i++) {
    const path = pages[i];
    allScore[path] = await generateLighthouseTotalScoreForPage(path);
  }
  return allScore;
}
