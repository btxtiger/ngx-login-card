/** @type {import('prettier').Options} */
const config = {
   printWidth: 130,
   tabWidth: 3,
   singleQuote: true,
   bracketSameLine: true,
   singleAttributePerLine: false,
   plugins: [
      'prettier-plugin-organize-imports',
      'prettier-plugin-packagejson',
      '@ianvs/prettier-plugin-sort-imports',
      // 'prettier-plugin-jsdoc',
      'prettier-plugin-tailwindcss',
   ],
   tailwindFunctions: ['@apply'],
   importOrder: ['^@angular/(.*)$', '^rxjs(.*)$', '^[^.].*', '^[./]'],
   importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
   importOrderTypeScriptVersion: '5.0.0',
};

module.exports = config;
