export default {
    baseUrl: process.env.BASE_URL,
    pages: [],
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
