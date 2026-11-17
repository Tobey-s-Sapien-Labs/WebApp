function getRequiredEnv(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key]

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value
}

export const env = {
  apiBaseUrl: getRequiredEnv('VITE_API_BASE_URL'),
  appTitle: import.meta.env.VITE_APP_TITLE,
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  isStaging: import.meta.env.MODE === 'staging',
  isProd: import.meta.env.MODE === 'production'
} as const