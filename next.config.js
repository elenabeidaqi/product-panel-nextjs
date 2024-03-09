/** @type {import('next').NextConfig} */
// const hostName = process.env.NEXT_PUBLIC_HOSTNAME

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth",
        permanent: true,
      },
    ];
  },
  images: {
    // domains: [hostName],
  },
};

module.exports = nextConfig;
