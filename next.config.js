/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pdjofjygvmxklpeamnld.supabase.co"
            }
        ]
    }
};

module.exports = nextConfig;
