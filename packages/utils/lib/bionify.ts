const ESCAPED_CHARACTERS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
}

const WORD_SEPARATORS = /(?=[\s/-])/

function bionify(textToBionify: string) {
  let bionicText = ''

  Object.keys(ESCAPED_CHARACTERS).forEach(character => {
    bionicText = textToBionify.replaceAll(
      new RegExp(character, 'g'),
      ESCAPED_CHARACTERS[character],
    )
  })

  const words = bionicText.split(WORD_SEPARATORS)
  let convertedText = ''

  words.forEach(word => {
    const wordLength = word.length + 1 // Compensate for character
    const boldLength = Math.ceil(wordLength / 2)
    const [boldText, notBoldText] = [
      word.slice(0, boldLength),
      word.slice(boldLength),
    ]
    convertedText += `<b class="bionic">${boldText}</b>${notBoldText}`
  })

  return convertedText.trim()
}

export { bionify }
