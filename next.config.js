let { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
let withVanillaExtract = createVanillaExtractPlugin()
let withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
module.exports = withVanillaExtract(
  withMDX({
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    reactStrictMode: true,
    experimental: {
      modern: true,
      reactMode: 'concurrent',
      concurrentFeatures: true,
      serverComponents: true,
    },
  }),
)
