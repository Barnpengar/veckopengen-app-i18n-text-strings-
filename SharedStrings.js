// @flow
import {removeTranslationHelpers, formatMoney} from './index'
import ExchangeRates from './ExchangeRates'
import Accounting from 'accounting'
import sv from './text_strings/shared/sv.json'
import en from './text_strings/shared/en.json'
import no from './text_strings/shared/nb.json'
import da from './text_strings/shared/da.json'
import fr from './text_strings/shared/fr.json'
import nl from './text_strings/shared/nl.json'
import fi from './text_strings/shared/fi.json'
import it from './text_strings/shared/it.json'
import es from './text_strings/shared/es.json'
import de from './text_strings/shared/de.json'
import flatten from 'flat'
export const getFinLitQuestion = (testType: number, step: number, lang?: string = 'en', currencyConfig: Object) => {
  const textStrings = getSharedStrings(lang)
  return addCurrencyToGimiTestStrings(getText(`FinancialLiteracyTest${testType}.question_${step}`, [], textStrings), currencyConfig)
}

export const getFinLitAnswer = (testType: number, step: number, lang?: string = 'en', currencyConfig: Object) => {
  const textStrings = getSharedStrings(lang)
  const answers = []
  for (let i = 0; i < 4; i++) answers.push({title: addCurrencyToGimiTestStrings(getText(`FinancialLiteracyTest${testType}.question_${step}_answer_${i + 1}`, [], textStrings), currencyConfig), valid: getValidFinLitAnswer(testType, step, i)})
  return answers
}

export const getCardQuestion = (step: number, lang: string = 'en', currencyConfig: Object): string => {
  const textStrings = getSharedStrings(lang)
  return getText(`CardTest.card_test_question_${step}`, [...getStringQuestionValues(step, currencyConfig)], textStrings)
}

export const getCardAnswer = (step: number, lang: string = 'en', currencyConfig: Object): Array<Object> => {
  const textStrings = getSharedStrings(lang)
  const answers = []
  for (let i = 0; i < 3; i++) answers.push({title: getText(`CardTest.card_test_question_${step}_answer_${i + 1}`, [getStringAnswerValues(step, i, currencyConfig)], textStrings), valid: getValidCardAnswer(step, i)})
  answers.push({title: getText('CardTest.card_test_answer_dont_know', [], textStrings), valid: false})
  return answers
}

export const getInfluencerPortalAnswer = (step: number, lang: string = 'en'): * => {
  if (step !== 1) return undefined
  return [{title: 'Instagram', valid: true}, {title: 'Youtube', valid: true}, {title: 'Snapchat', valid: true}, {title: 'Musically', valid: true}]
}

const getStringQuestionValues = (step: number, config: Object) => {
  switch (step) {
    case 2: return [Accounting.formatMoney(249, config.suffix, config.numberOfDecimals, '', ',', '%v %s'), Accounting.formatMoney(239, config.suffix, config.numberOfDecimals, '', ',', '%v %s')]
    case 7: return [Accounting.formatMoney(99, config.suffix, config.numberOfDecimals, '', ',', '%v %s')]
    default: return []
  }
}

const getStringAnswerValues = (step: number, answer: number, config: Object) => {
  answer = answer + 1
  switch (true) {
    case step === 2 && (answer === 2 || answer === 3): return [Accounting.formatMoney(10, config.suffix, config.numberOfDecimals, '', ',', '%v %s')]
    case step === 7: return [Accounting.formatMoney(99, config.suffix, config.numberOfDecimals, '', ',', '%v %s')] // do for all answers
    default: return []
  }
}

function getValidFinLitAnswer (testNumber: number, step: number, answer: number): boolean {
  answer = answer + 1
  switch (testNumber) {
    case 1:
      switch (true) {
        case step === 1 && answer === 3: return true
        case step === 2 && answer === 1: return true
        case step === 3 && answer === 1: return true
        case step === 4 && answer === 2: return true
        case step === 5 && answer === 1: return true
        case step === 6 && answer === 4: return true
        case step === 7 && answer === 3: return true
        default: return false
      }
    case 2:
      switch (true) {
        case step === 1 && answer === 1: return true
        case step === 2 && answer === 4: return true
        case step === 3 && answer === 4: return true
        case step === 4 && answer === 3: return true
        case step === 5 && answer === 4: return true
        case step === 6 && answer === 1: return true
        case step === 7 && answer === 3: return true
        case step === 8 && answer === 2: return true
        case step === 9 && answer === 2: return true
        case step === 10 && answer === 2: return true
        default: return false
      }
    case 3:
      switch (true) {
        case step === 1 && answer === 4: return true
        case step === 2 && answer === 2: return true
        case step === 3 && answer === 3: return true
        case step === 4 && answer === 1: return true
        case step === 5 && answer === 1: return true
        case step === 6 && answer === 1: return true
        case step === 7 && answer === 3: return true
        case step === 8 && answer === 3: return true
        default: return false
      }
    default: return false
  }
}

const getValidCardAnswer = (step: number, answer: number): boolean => {
  answer = answer + 1
  switch (true) {
    case step === 1 && answer === 1: return true
    case step === 2 && answer === 3: return true
    case step === 3 && answer === 3: return true
    case step === 4 && answer === 1: return true
    case step === 5 && answer === 1: return true
    case step === 6 && answer === 2: return true
    case step === 7 && answer === 2: return true
    case step === 8 && answer === 3: return true
    case step === 9 && answer === 1: return true
    case step === 10 && answer === 3: return true
    default: return false
  }
}

const getText = (langKey: *, values?: Array<*>, textStrings: *): string => {
  if (textStrings === undefined) return ''
  if (!textStrings || !langKey) return ''
  let text = textStrings[langKey]
  if (!text) return ''
  text = removeTranslationHelpers(text)
  text = text.trim()
  if (values) values.forEach((item, index) => {
    // $FlowFixMe //Needed 05.12.2017
    text = text.split(`%${index + 1}$d`).join(item)
  })
  text = text.charAt(0).toUpperCase() + text.slice(1)
  return text
}

function getSharedStrings (lang: string): Object {
  switch (lang.substring(0, 2)) {
    case 'sv': return flatten(sv)
    case 'da': return flatten(da)
    case 'nb':
    case 'no': return flatten(no)
    case 'fr': return flatten(fr)
    case 'nl': return flatten(nl)
    case 'fi': return flatten(fi)
    case 'it': return flatten(it)
    case 'es': return flatten(es)
    case 'de': return flatten(de)
    default: return flatten(en)
  }
}

export function addCurrencyToGimiTestStrings (text: string, currencyCode: string): string {
  if (!text) return ''
  let varsToConvert = text.match(/\$c{[^\d]*(\d+)[^\d]*\}/g)
  if (!!varsToConvert && Array.isArray(varsToConvert)) varsToConvert.forEach((item, index) => {
    let value = item.match(/[0-9]+/)
    if (value) value = value[0]
    let exchangeRate = ExchangeRates[currencyCode] || 1
    value = formatMoney(Math.floor((value * exchangeRate) / 5) * 5, currencyCode)
    text = text.split(item).join(value)
  })
  return text
}
