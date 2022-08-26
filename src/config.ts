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
    sheetId: '1hti6DXXiM5j31NRAXThPPfsRhx9xJSwajutz1s0W_gQ',
    token: {
      type: "service_account",
      project_id: "lighthouse-357107",
      private_key_id: "8bb247919209ae7fcdc6082961be9336f28cacc6",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCoODzpFudGt5mG\nZeuw778KNndSFsxe6cQmFwRONH8HW5CmF5lBexCc/nLeLrKyWYHSEZ/yHEWDFtZ2\nSYlkj4kXEqI2Mcpjn5FZp6hAWbfc5S/BFMNjZa9rT8ctKSKU/4iFjJMZxcq9D2r0\nyMltv4acs2hGS7ZQBQslfghQpy4Ktp9/rDb6cc4PyCzUjx5d9XvIaHeiC7xpNiAb\n0exX9jW0DBYM7TvNbXOV8mVP8qzt2mRRAF6NRMI7I9AETfkVzLHyE8cYRCeByhXp\nWmtOEUfakSz0ZlncUcDomfNuBC/zNsqxQscVYrA1tZGV+WQYup5iHrdZ+XMQR4QA\nRk8gFo+vAgMBAAECggEABWKXgJa9HKRwA79rhiSGpxsLQtN8A2XUY6vE9YP0tRWX\nUdnbjB8WbxAuOTKhgdgfscvipOuGxiWLBApinZeCufxcuQNrCTloe8hEOJsmqamk\nl7fEcYAl13ecVrPEaaSsiCnx45dTYC4ILIHpANxqwMV1hxqRYYpnyvF37q0LakhV\nAEAAu+8vgkIXr5+K8QkEFAzHw0Yr1pEE1jEGRdFgLNtRVSGlYoDYkcMXd3oXlUy3\nFyVTMvsXYbxvxBYtxWm+M9QGiLuiJhwram7EIrgXKN985wDH2odd+AeZjb82eo/m\n4qKKWiervmu43+PU7CqTb0zNAQS+ENj1gEkym4SdIQKBgQDoAwYsiNBq1luKp6tc\nYOQvESt0tr8QsDJvR2zbPOXW/60uL5V1cN3LaSnADTSRxOsx9QXY2Y9p0a1PJmzr\ntEtodHZfl48wQCBakfs8MEjHPSuhridUztnos1VUcklmv1O2NKHT1Vsf9iBkct6N\nhGMCDbI7i5PokV13Zy7pzxhMxwKBgQC5nL1ZRu7RHG6Xt1sGfmo9NgkNpnza+hGs\niIPCa+J9q2cuGAmeUgoI/ELCuGy19OrBoP3lkroulG+7IP9UsODBH6GCQTxNMMkG\n67okcPlTWXlWvtdxAN+AbTTPI6izBbd2xS3i0H/jdJrgETQeknN66UK3IWbfeO6k\nunCbKY2t2QKBgQDkOU1Sc4apAZFs1EBhj8IGdppLphROwzPpeNYg10ez9S+S1iXs\nL4lNtXXnQFYs6gr9ymvlAyXqzuHvkPnl5iWja6ShpcGpkfsBfMYpT8nXi1mnIlv4\nNb3vBLF0bzO7CYu8GQvzB9Yqm38DsGcxyD9oXrarkkJ9rLjHYs2oGxppMwKBgQCr\nC+AKJ63oklTwBw4hG9n3cpZBOA2TFiO3ZU5Wmmjr+kppVcl3Vo7c3OsA2keEHqE/\nsoaHSwG77xpPzga+Gwnjrqx9hnR1heGbORwefOWmg6un3tJW1sEgboLd6DSMVVZO\nY0L348AW8dvPZMss6TT2LYNHk8ZjZeQ1dYJT2qUvcQKBgQDMsRFMld/I2RQbkvzJ\nysUp/wqDew4O180JjEo6tsUC28TajYxnaKdUlAZA0uaz6qZ7yjLZISzs+2tHecVT\nYaBHV6/ar5oREJxyO/aRi8BgNaK+Kq4IIZvLsJTJUmVULkuCiWbM5hsQ0iKBiPnZ\n8rYl7HMx4tjudGHpVtJSEo+jNg==\n-----END PRIVATE KEY-----\n",
      client_email: "sheet-753@lighthouse-357107.iam.gserviceaccount.com",
      client_id: "117569293084547119144",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/sheet-753%40lighthouse-357107.iam.gserviceaccount.com",
    },
  },
};
