import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import createTM from 'next-transpile-modules'
let withVanillaExtract = createVanillaExtractPlugin()
let withTM = createTM(['@ds-pack/components'])

/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  experimental: {
    // appDir: true
    runtime: 'nodejs',
    serverComponents: true,
  },
}
export default withTM(withVanillaExtract(config))
