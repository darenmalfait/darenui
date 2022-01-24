import { colors } from './colors'
import { toCSSVar } from './to-css-var'

const fs = require('fs')

function createGlobalCssVars() {
  const theme = toCSSVar({
    colors,
  })

  const vars = Object.keys(theme.cssVars)
    .map(key => `${key}: ${theme.cssVars[key]};`)
    .join('\n')

  const content = `:root {\n${vars}\n}`

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }

  fs.writeFile('./dist/darenui.css', content, (err: any) => {
    if (err) {
      console.error(err)
      return
    }
    // file written successfully
  })
}

createGlobalCssVars()
