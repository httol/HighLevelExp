import { ExpoConfig, ConfigContext } from "expo/config";

const expoConfig = {
  development: { apiUrl: "https://localhost:3000", enableHiddenFeatures: true },
  staging: { apiUrl: "https://api.staging.com", enableHiddenFeatures: true },
  production: { apiUrl: "https://api.production.com", enableHiddenFeatures: false },
};

export default ({ config }: ConfigContext): ExpoConfig => {
  let Config = expoConfig.development;

  if (process.env.APP_ENV === "production") {
    Config = expoConfig.production;
  } else if (process.env.APP_ENV === "staging") {
    Config = expoConfig.staging;
  }
  return {
    ...config,
    extra: {
      ...config.extra,
      ...Config,
    },
  } as ExpoConfig;
};
