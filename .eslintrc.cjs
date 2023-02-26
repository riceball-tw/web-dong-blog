module.exports = {
  plugins: ['import'],
  rules: {
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: 'path/to/folder',

        // Multiple tsconfigs (Useful for monorepos)

        // use a glob pattern
        project: 'packages/*/tsconfig.json',

        // use an array
        project: ['packages/module-a/tsconfig.json', 'packages/module-b/tsconfig.json'],

        // use an array of glob patterns
        project: ['packages/*/tsconfig.json', 'other-packages/*/tsconfig.json'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.astro', '.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
    {
      extends: ['airbnb-base', 'plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
    },
  ],
};
