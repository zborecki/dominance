import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts}'],
    plugins: {
      '@stylistic': stylisticPlugin
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: ['if', 'switch', 'for', 'while', 'function', 'return', 'block-like'] },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
      ],
      'arrow-body-style': ['error', 'as-needed'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': ['error', 'always'],
      'import/order': ['error',
        {
          alphabetize: {
            order: 'asc'
          },
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          pathGroups: [
            { group: 'internal', pattern: './**', position: 'after' },
            { group: 'internal', pattern: '../**', position: 'after' },
            { group: 'internal', pattern: '@/**', position: 'after' }
          ],
          pathGroupsExcludedImportTypes: ['builtin']
        }
      ],
      'linebreak-style': 'off',
      'max-lines': ['error', 120],
      'no-console': ['warn', { allow: ['error'] }],
      'object-curly-spacing': ['error', 'always'],
      'object-shorthand': ['error', 'always'],
      semi: ['error', 'always']
    }
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ])
]);

export default eslintConfig;
