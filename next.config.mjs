import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // --- LEGG TIL DENNE SEKSJONEN ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**', // Tillater alle bilder fra Sanity
      },
    ],
  },
  // --- SLUTT ---
};

export default withNextIntl(nextConfig);