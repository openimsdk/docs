import { createMDX } from 'fumadocs-mdx/next';
import flutterLegacyRedirectAliases from './data/structure/flutter-legacy-redirect-aliases.json' with { type: 'json' };
import flutterSidebar from './data/structure/flutter-sidebar.json' with { type: 'json' };
import iosLegacyRedirectAliases from './data/structure/ios-legacy-redirect-aliases.json' with { type: 'json' };
import iosSidebar from './data/structure/ios-sidebar.json' with { type: 'json' };
import wasmLegacyRedirectEntries from './data/structure/wasm-legacy-redirects.json' with { type: 'json' };
import { buildClientSdkLegacyRedirects } from './scripts/lib/client-sdk-legacy-redirects.mjs';
import { buildWasmLegacyRedirects } from './scripts/lib/wasm-legacy-redirects.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep standalone for Docker/self-host; Vercel uses its own Next.js runtime.
  ...(process.env.VERCEL ? {} : { output: 'standalone' }),
  distDir: process.env.NODE_ENV === 'development' ? '.next-local' : '.next',
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  // `npm run check` performs strict TypeScript validation. Skipping the duplicate
  // Next.js build-time pass avoids reparsing the dynamic MDX manifest.
  typescript: { ignoreBuildErrors: true },
  outputFileTracingIncludes: {
    '/docs/[[...slug]]': ['./content/docs/**/*.mdx'],
    '/docs/guides/[...slug]': ['./content/zh/docs/guides/**/*.mdx', './content/en/docs/guides/**/*.mdx'],
    '/[locale]/docs/guides/[...slug]': ['./content/zh/docs/guides/**/*.mdx', './content/en/docs/guides/**/*.mdx'],
  },
  serverExternalPackages: ['shiki'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      ...buildWasmLegacyRedirects(wasmLegacyRedirectEntries),
      ...buildClientSdkLegacyRedirects({
        platformId: 'ios',
        sidebar: iosSidebar,
        wasmEntries: wasmLegacyRedirectEntries,
        aliases: iosLegacyRedirectAliases,
      }),
      ...buildClientSdkLegacyRedirects({
        platformId: 'flutter',
        sidebar: flutterSidebar,
        wasmEntries: wasmLegacyRedirectEntries,
        aliases: flutterLegacyRedirectAliases,
      }),
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

const withMDX = createMDX({ outDir: '.source-local' });
export default withMDX(nextConfig);
