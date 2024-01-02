/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fiverr-res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "virittamocmstest.blob.core.windows.net",
        port: "",
      },
    ],
  },
};

export default config;
