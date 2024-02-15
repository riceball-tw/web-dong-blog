module.exports = {
  // ...
  globals: {
    localStorage: true,
    window: true,
  },
  extends: [
    // ...
    'airbnb-base',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'prettier',
  ],
  // ...
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.astro', '.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro', '*.ts', '*.tsx', '*.js', '*.jsx', '*.json', '*.vue'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // ESLint doesn't understand Astro's special import syntax out of the box, To fix this, gnore unresolved imports from 'astro:*'
        'import/no-unresolved': [2, { ignore: ['astro:*'] }],
        // Ignore the import/extensions rule for `.astro` files.
        'import/prefer-default-export': 'off',
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

    // ...
  ],
};
