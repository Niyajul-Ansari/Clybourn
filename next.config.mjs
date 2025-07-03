/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig = {
    output: 'export',
    images: {
    unoptimized: true,
  },
    basePath: isGithubPages ? '/Atif-work' : '',
    assetPrefix: isGithubPages ? '/Atif-work/' : '',
};

export default nextConfig;
