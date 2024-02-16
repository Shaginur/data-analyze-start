import {
  firstCharacte,
  wordsCaunt,
  NumberCharacters,
  maxLength,
  reverseWord,
  sentencesCount,
  uniqueCount,
  wordsAlphavit,
} from '../../js/index'

describe('Анализ текста', () => {
  test('Поиск первого символа', () => {
    const text = 'tera  form'
    const firstCharacte = firstCharacte(text)
    expect(firstCharacte).toBe('t')
  })

  test('Поиск первого символа в пустой строке', () => {
    const text = ''
    const firstCharacte = firstCharacte(text)
    expect(firstCharacte).toBe('')
  })

  test('Поиск первого символа без аргумента', () => {
    const firstCharacte = firstCharacte()
    expect(firstCharacte).toBe('текст отсутствует')
  })

  test('количество слов', () => {
    const wordСount = 'heloo duo'
    const wordsCaunt = wordsCaunt(wordСount)
    expect(wordsCaunt).toBe('2')
  })

  test('Количество слов c пустой строкой', () => {
    const wordСount = ''
    const wordsСount = wordsCaunt(wordСount)
    expect(wordsСount).toBe('техт отсутствует')
  })

  test('Количество слов без аргумента', () => {
    const wordsСount = wordsCaunt()
    expect(wordsСount).toBe('техт отсутствует')
  })

  test('Количество символов без учета пробелов', () => {
    const NumberCharacter = 'csfd df'
    const NumberCharacters = NumberCharacters(NumberCharacter)
    expect(NumberCharacters).toBe('6')
  })

  test('Количество символов без учета пробелов при пустой строке', () => {
    const NumberCharacter = ''
    const NumberCharacters = NumberCharacters(NumberCharacter)
    expect(NumberCharacters).toBe('техт отсутствует')
  })

  test('Количество символов без учета пробелов при отсутствии аргумента', () => {
    const NumberCharacters = NumberCharacters()
    expect(NumberCharacters).toBe('техт отсутствует')
  })

  test('поиск самого длинного слова', () => {
    const maxLengths = 'texas hi'
    const maxLength = maxLength(maxLengths)
    expect(maxLength).toBe('5')
  })

  test('поиск самого длинного слова с пустой строкой', () => {
    const maxLengths = ''
    const maxLength = maxLength(maxLengths)
    expect(maxLength).toBe('техт отсутствует')
  })

  test('поиск самого длинного слова без аргумента', () => {
    const maxLength = maxLength()
    expect(maxLength).toBe('техт отсутствует')
  })

  test('переворот строки', () => {
    const reverseWords = 'revers'
    const reverseWord = reverseWord(reverseWords)
    expect(reverseWord).toBe('srever')
  })

  test('переворот строки с пустой строкой', () => {
    const reverseWords = ''
    const reverseWord = reverseWord(reverseWords)
    expect(reverseWord).toBe('техт отсутствует')
  })

  test('переворот строки без аргумента', () => {
    const reverseWord = reverseWord()
    expect(reverseWord).toBe('техт отсутствует')
  })

  test('количество предложений в строке', () => {
    const sentencesCounts = 'hi, duo'
    const sentencesCount = sentencesCount(sentencesCounts)
    expect(sentencesCount).toBe('2')
  })

  test('количество предложений в строке при пустой строке', () => {
    const sentencesCounts = ''
    const sentencesCount = sentencesCount(sentencesCounts)
    expect(sentencesCount).toBe('техт отсутствует')
  })

  test('количество предложений в строке без аргумента', () => {
    const sentencesCount = sentencesCount()
    expect(sentencesCount).toBe('техт отсутствует')
  })

  test('количество уникальных слов', () => {
    const uniqueCounts = 'dsadas dsad as'
    const uniqueCount = uniqueCount(uniqueCounts)
    expect(uniqueCount).toBe('3')
  })

  test('количество уникальных слов с пустой строкой', () => {
    const uniqueCounts = ''
    const uniqueCount = uniqueCount(uniqueCounts)
    expect(uniqueCount).toBe('техт отсутствует')
  })

  test('количество уникальных слов без аргумента', () => {
    const uniqueCount = uniqueCount()
    expect(uniqueCount).toBe('техт отсутствует')
  })

  test('слова в алфовитном порядке', () => {
    const wordsAlphavits = 'c b a'
    const wordsAlphavit = wordsAlphavit(wordsAlphavits)
    expect(wordsAlphavit).toBe('a b c')
  })

  test('слова в алфовитном порядке с пустой строкой', () => {
    const wordsAlphavits = ''
    const wordsAlphavit = wordsAlphavit(wordsAlphavits)
    expect(wordsAlphavit).toBe('техт отсутствует')
  })

  test('слова в алфовитном порядке с без аргумента', () => {
    const wordsAlphavit = wordsAlphavit()
    expect(wordsAlphavit).toBe('техт отсутствует')
  })
})
