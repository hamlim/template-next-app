export default {
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
  },
}
