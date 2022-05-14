module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@vanilla-extract/babel-plugin',
    [
      '@babel/plugin-transform-typescript',
      {
        isTSX: true,
        allowNamespaces: true,
        onlyRemoveTypeImports: true,
        allowDeclareFields: true,
      },
    ],
    '@babel/plugin-proposal-export-default-from',
  ],
}
