/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  const devEnv = {
    BASE_URL: "http://localhost:3000",
    API_URL: "http://localhost:5000/api/v1",
  };
  const prodEnv = {
    BASE_URL: "http://localhost:3000",
    API_URL: "http://localhost:5000/api/v1",
  };
  const env = isDev ? devEnv : prodEnv;
  console.log(
    `------ Build mod | isDev:${isDev}  isProd:${isProd} | Build mod ------`
  );
  return {
    reactStrictMode: false,
    env,
    images: {
      domains: [
        "loremflickr.com",
        "picsum.photos",
        "avatars.githubusercontent.com",
        "cloudflare-ipfs.com",
      ],
    },
  };
};
