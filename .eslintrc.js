module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',

  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],

  env: {
    browser: true,
    node: true,
    mocha: true,
  },

  globals: {

  },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['src', 'node_modules'],
            extensions: ['.js', '.json', '.jsx', '.css'],
          },
        },
      },
    },
  },


  rules: {
    // import
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'tools/**',
        'webpackConfig/**',
        '**/*.test.js',
        './*.js',
      ],
      optionalDependencies: false,
      peerDependencies: false,
    }],

    // jsx-a11y

    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],

    // react
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    // core
    'func-names': [2, 'as-needed'],
    'class-methods-use-this': 0,
  },
};
