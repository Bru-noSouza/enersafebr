/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // estático
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
export default nextConfig
