/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "",
        hostname: "github.com",
        pathname: "",
        port: "",
      },
    ],
  },
};
