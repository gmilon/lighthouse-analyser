import lighthouse from 'lighthouse'
import {launch, LaunchedChrome} from 'chrome-launcher'
import config from '../config'

export interface LighthousePageScore {
    total: number,
    seo: number,
    performance: number,
    accessibility: number,
    bestPractice: number,
}

function getPageTotalScore(results): LighthousePageScore {
    const seo: number = (results?.seo?.score || 0) * 100;
    const performance: number = (results?.performance?.score || 0) * 100;
    const accessibility: number = (results?.accessibility?.score || 0) * 100
    const bestPractice: number = (results?.['best-practices']?.score || 0) * 100
    return {
        seo,
        performance,
        bestPractice,
        accessibility,
        total: seo + performance + accessibility + bestPractice
    }
}


async function getChrome(): Promise<LaunchedChrome> {
    return await launch({chromeFlags: ['--headless']});
}

async function getLightHouseResult(chrome, path) {
    const {lhr} = await lighthouse(config.baseUrl + path, {
        ...config.lighthouse,
        port: chrome.port,
    });
    return lhr
}

async function generateLighthouseTotalScoreForPage(path) {
    const chrome: LaunchedChrome = await getChrome()
    const lighthouseReport = await getLightHouseResult(chrome, path)
    const totalScore = getPageTotalScore(lighthouseReport.categories)
    await chrome.kill();
    return totalScore
}

export type AllLighthouseScore = {
    [key: string]: LighthousePageScore
}

export async function getAllLighthouseScore(): Promise<AllLighthouseScore> {
    const pages = config.pages
    const allScore = {}
    for (let i = 0; i < pages.length; i++) {
        const path = pages[i]
        allScore[path] = await generateLighthouseTotalScoreForPage(path)
    }
    return allScore
}
