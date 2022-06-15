import { extendTheme, IconButton } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#edeae5', '#151f27')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#3aa1f2',
        textDecorationThickness: 5,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#151f27', '#edeae5')(props),
      textUnderlineOffset: 3
    })
  }
}

/*const fonts = {
  heading: "'Dosis'"
}*/

const colors = {
  grassTeal: '#88CEF6',

}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, /*fonts,*/ colors })
export default theme
