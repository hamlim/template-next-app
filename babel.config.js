module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-transform-imports',
      {
        '@ds-pack/components': {
          transform(importMember) {
            if (importMember === 'themeClass') {
              return `@ds-pack/components/src/vars.css`
            }
            return `@ds-pack/components/src/${importMember}`
          },
          skipDefaultConversion: true,
        },
      },
    ],
    '@vanilla-extract/babel-plugin',
    '@babel/plugin-proposal-export-default-from',
  ],
}
