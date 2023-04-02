import { Box } from '@ds-pack/daisyui'

export default function Greeting({ children }) {
  return (
    <Box is="marquee" className="text-lg text-green-400">
      {children}
    </Box>
  )
}
