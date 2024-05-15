/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
module.exports = {
  semi: false,
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
}
