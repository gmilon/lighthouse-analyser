import lighthouse from 'lighthouse'
import chromeLauncher from 'chrome-launcher'
import config from '../config.js'

function getPageTotalScore(results) {
    return ((results?.seo?.score || 0)
        + (results?.performance?.score || 0)
        + (results?.accessibility?.score || 0)
        + (results?.['best-practices']?.score || 0)) * 100
}


async function getChrome() {
    return await chromeLauncher.launch({chromeFlags: ['--headless']});
}

async function getLightHouseResult(chrome, path) {
    const {lhr} = await lighthouse(config.baseUrl, {
        ...config.lighthouse,
        port: chrome.port,
    });
    return lhr
}

async function generateLighthouseTotalScoreForPage(path) {
    const chrome = await getChrome()
    const lighthouseReport = await getLightHouseResult(chrome, path)
    const totalScore = getPageTotalScore(lighthouseReport.categories)
    await chrome.kill();
    return totalScore
}


export async function getAllLighthouseScore() {
    const pages = config.pages
    const allScore = {}
    for (let i = 0; i < pages.length; i++) {
        const path = pages[i]
        allScore[path] = await generateLighthouseTotalScoreForPage(path)
    }
    console.log(allScore)
}
