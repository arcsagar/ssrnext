// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;


const { ADMIN_MICRO} = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: `http://localhost:3001/admin`,
      },
      {
        "source": "/micro-admin/_next/:path+",
        "destination": "http://localhost:3001/micro-admin/_next/:path+"
      },
      {
        source: "/doctor",
        destination: `http://localhost:3002/doctor`,
      },
      {
        "source": "/micro-doctor/_next/:path+",
        "destination": "http://localhost:3002/micro-doctor/_next/:path+"
      }
    ];
  },
};

module.exports = nextConfig;
