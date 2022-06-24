import {config} from 'dotenv'
config()

export default {
    baseUrl: process.env.BASE_URL, // ex: https://google.com
    pages: process.env.PATHS.split(','), // should be comma separated values
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
