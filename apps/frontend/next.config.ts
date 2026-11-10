import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import pkg from './package.json' with {type: 'json'};

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_VERSION: pkg.version
  },
  experimental: {
    typedEnv: true
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  }
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);
