module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
    amd: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 0,
    'no-empty': 0,
    'no-irregular-whitespace': 0,
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  // 'eslint.validate':[
  //     {
  //         'language':'html',
  //         'autoFix':true
  //     },
  //     {
  //         'language':'javascript',
  //         'autoFix':true
  //     },
  //     {
  //         'language':'typescript',
  //         'autoFix':true
  //     }
  // ]
}
