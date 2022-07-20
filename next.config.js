/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = { pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'] }


// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });
//
//     return config;
//   }
// };