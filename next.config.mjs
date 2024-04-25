/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://89.111.174.44/api",
        BASE_URL: "https://89.111.174.44",
        // API_URL: "http://localhost:8000/api",
        // BASE_URL: "http://localhost:8000",
    },
    reactStrictMode: false
};

export default nextConfig;
