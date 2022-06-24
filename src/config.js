import dotenv from 'dotenv'
dotenv.config()
export default {
    baseUrl: process.env.BASE_URL,
    pages: process.env.PATHS,
    lighthouse: {
        onlyCategories: [
            'performance',
            'seo',
            'best-practices',
            'accessibility',
        ],
        output: 'json',
        logLevel: 'error',
    }
}
