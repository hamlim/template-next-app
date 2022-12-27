import { style } from '@vanilla-extract/css'
import { vars } from '@ds-pack/components'

export let greeting = style({
  color: vars.colors.teal600,
  fontSize: vars.fontSizes[3],
})
