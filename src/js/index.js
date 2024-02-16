const analyzeButton = document.querySelector('#analyzeButton') //кнопка начала анализа текста
const analyzeText = document.querySelector('#analyze-title') //текст ария
let userText = document.querySelector('#userText') // получаем параграв под техтарией
const clearButton = document.querySelector('#clearButton') // кнопка отчистки таблици

//получения данных из техтарии и очистка и в техтария
analyzeButton.addEventListener('click', function (e) {
  let texts = analyzeText.value
  let text = String(texts)
  userText.innerHTML = texts
  analyzeText.value = ''

  Render(text)
})

clearButton.addEventListener('click', function () {
  userText.innerHTML = ''
  tbody.innerHTML = `
  <tr>
  <td>First character</td>
  <td id="answer5"></td>
</tr>
<tr>
  <td>Words count</td>
  <td id="answer1"></td>
</tr>
<tr>
  <td>Number of characters</td>
  <td id="answer2"></td>
</tr>
<tr>
  <td>Max length word</td>
  <td id="answer3"></td>
</tr>
<tr>
  <td>Reverse word</td>
  <td id="answer4"></td>
</tr>
<tr>
  <td>Sentences count</td>
  <td id="answer6"></td>
</tr>
<tr>
  <td>Unique word count</td>
  <td id="answer7"></td>
</tr>
<tr>
  <td>Words in alphabetical order</td>
  <td id="answer8"></td>
</tr>`
})

const tbody = document.querySelector('.table tbody')

function Render(text) {
  tbody.innerHTML = ` <tr>
  <td>First character</td>
  <td id="answer5">${firstCharacte(text)}</td>
</tr>
<tr>
  <td>Words count</td>
  <td id="answer1">${wordsCaunt(text)}</td>
</tr>
<tr>
  <td>Number of characters</td>
  <td id="answer2">${NumberCharacters(text)}</td>
</tr>
<tr>
  <td>Max length word</td>
  <td id="answer3">${maxLength(text)}</td>
</tr>
<tr>
  <td>Reverse word</td>
  <td id="answer4">${reverseWord(text)}</td>
</tr>
<tr>
  <td>Sentences count</td>
  <td id="answer6">${sentencesCount(text)}</td>
</tr>
<tr>
  <td>Unique word count</td>
  <td id="answer7">${uniqueCount(text)}</td>
</tr>
<tr>
  <td>Words in alphabetical order</td>
  <td id="answer8">${wordsAlphavit(text)}</td>
</tr>`
}

/**
 *
 * @param {string} text
 */
//Поиск первого символа
export function firstCharacte(text) {
  return text?.at(0) ?? 'техт отсутствует'
}

/**
 *
 * @param {string} text
 */
//количество слов
export function wordsCaunt(text) {
  if (text == 0) {
    return 'техт отсутствует'
  }
  return text?.split(' ').length || 'техт отсутствует'
}

/**
 *
 * @param {string} text
 */
// количество символов без учета пробелов
export function NumberCharacters(text) {
  return text.split(' ').join('').length || 'техт отсутствует'
}

/**
 *
 * @param {string} text
 * @returns
 */
// самое длинное слово
export function maxLength(text) {
  const world = text.split(' ')
  let character = ''

  for (let i = 0; i < world.length; i++) {
    if (String(world[i]).length > String(world[i + 1]).length) {
      character += world[i]
    } else {
      continue
    }
  }
  return character.length || text.length || 'техт отсутствует'
}

/**
 *
 * @param {string} text
 * @returns
 */
// переворот строки
export function reverseWord(text) {
  const textAray = text.split(' ').reverse()
  const reversText = textAray.join(' ')
  return reversText || 'техт отсутствует'
}

/**
 *
 * @param {string} text
 * @returns
 */
//количество слов
export function sentencesCount(text) {
  const splitText = text.split(',')
  if (splitText == 0) {
    return 'техт отсутствует'
  }
  return splitText.length || 'техт отсутствует'
}

/**
 *
 * @param {string} text
 * @returns
 */
// количество уникальных слов
export function uniqueCount(text) {
  const textSplit = text.split(' ')
  let uniqueNums = [...new Set(textSplit)]
  if (textSplit == 0) {
    return 'техт отсутствует'
  }
  return uniqueNums.length || 'техт отсутствует'
}

/**
 *
 * @param {string} text
 * @returns
 */
// слова в алфовитном порядке
export function wordsAlphavit(text) {
  const splitText = text.split(' ')
  let sortText = splitText.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1
    }
    return 0
  })
  return sortText.join(', ') || 'техт отсутствует'
}
