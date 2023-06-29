// theme.ts

// 1. import `extendTheme` function
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config= {
  initialColorMode: 'system',
  useSystemColorMode: false,

}

// 3. extend the theme
const theme = extendTheme({ config }, {
  fonts: {
    heading: `'Open Sans', sans-serif`,
  }},
  { colors: { ...baseTheme.colors, brand: baseTheme.colors.white[200] },
  },
  proTheme,
)

export default theme; 