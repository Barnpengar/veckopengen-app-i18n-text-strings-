
// client
// import sv from './text_strings/client/sv.json'
import _default from './text_strings/client/default.json'

// school
import svSchool from './text_strings/school/sv.json'
import enSchool from './text_strings/school/en.json'
import noSchool from './text_strings/school/nb.json'
import daSchool from './text_strings/school/da.json'
import frSchool from './text_strings/school/fr.json'
import nlSchool from './text_strings/school/nl.json'
import fiSchool from './text_strings/school/fi.json'
import itSchool from './text_strings/school/it.json'
import esSchool from './text_strings/school/es.json'
import deSchool from './text_strings/school/de.json'

// bot
import svBot from './text_strings/bot/sv.json'
import enBot from './text_strings/bot/en.json'
import noBot from './text_strings/bot/nb.json'
import daBot from './text_strings/bot/da.json'
import frBot from './text_strings/bot/fr.json'
import nlBot from './text_strings/bot/nl.json'
import fiBot from './text_strings/bot/fi.json'
import itBot from './text_strings/bot/it.json'
import esBot from './text_strings/bot/es.json'
import deBot from './text_strings/bot/de.json'

// Bot survey
import svBotSurvey from './text_strings/bot-survey/sv.json'
import enBotSurvey from './text_strings/bot-survey/en.json'
import noBotSurvey from './text_strings/bot-survey/nb.json'
import daBotSurvey from './text_strings/bot-survey/da.json'
import frBotSurvey from './text_strings/bot-survey/fr.json'
import nlBotSurvey from './text_strings/bot-survey/nl.json'
import fiBotSurvey from './text_strings/bot-survey/fi.json'
import itBotSurvey from './text_strings/bot-survey/it.json'
import esBotSurvey from './text_strings/bot-survey/es.json'
import deBotSurvey from './text_strings/bot-survey/de.json'

// Education
import svEducate from './text_strings/education/sv.json'
import enEducate from './text_strings/education/en.json'
import noEducate from './text_strings/education/nb.json'
import daEducate from './text_strings/education/da.json'
import frEducate from './text_strings/education/fr.json'
import nlEducate from './text_strings/education/nl.json'
import fiEducate from './text_strings/education/fi.json'
import itEducate from './text_strings/education/it.json'
import esEducate from './text_strings/education/es.json'
import deEducate from './text_strings/education/de.json'

// calendar
import defaultCalendar from './text_strings/calendar/default.json'
import daCalendar from './text_strings/calendar/da.json'
import fiCalendar from './text_strings/calendar/fi.json'
import isCalendar from './text_strings/calendar/is.json'
import svCalendar from './text_strings/calendar/sv.json'
import frCalendar from './text_strings/calendar/fr.json'
import nlCalendar from './text_strings/calendar/nl.json'
import noCalendar from './text_strings/calendar/nb.json'
import enCalendar from './text_strings/calendar/en.json'
import beCalendar from './text_strings/calendar/be.json'
import itCalendar from './text_strings/calendar/it.json'
import esCalendar from './text_strings/calendar/es.json'
import deCalendar from './text_strings/calendar/de.json'
import etCalendar from './text_strings/calendar/et.json'

// FAQ
import defaultNativeErrorMessages from './text_strings/faq/default.json'
import svFAQ from './text_strings/faq/sv.json'
import enFAQ from './text_strings/faq/en.json'
import noFAQ from './text_strings/faq/nb.json'
import daFAQ from './text_strings/faq/da.json'
import frFAQ from './text_strings/faq/fr.json'
import nlFAQ from './text_strings/faq/nl.json'
import fiFAQ from './text_strings/faq/fi.json'
import itFAQ from './text_strings/faq/it.json'
import esFAQ from './text_strings/faq/es.json'
import deFAQ from './text_strings/faq/de.json'

// native error messages
import svNativeErrorMessages from './native/error-messages/sv.json'
import enNativeErrorMessages from './native/error-messages/en.json'
import noNativeErrorMessages from './native/error-messages/nb.json'
import daNativeErrorMessages from './native/error-messages/da.json'
import frNativeErrorMessages from './native/error-messages/fr.json'
import nlNativeErrorMessages from './native/error-messages/nl.json'
import fiNativeErrorMessages from './native/error-messages/fi.json'
import itNativeErrorMessages from './native/error-messages/it.json'
import esNativeErrorMessages from './native/error-messages/es.json'
import deNativeErrorMessages from './native/error-messages/de.json'

// dictionary
import defaultDictionary from './text_strings/dictionary/default.json'
import svDictionary from './text_strings/dictionary/sv.json'
import enDictionary from './text_strings/dictionary/en.json'
import noDictionary from './text_strings/dictionary/nb.json'
import daDictionary from './text_strings/dictionary/da.json'
import frDictionary from './text_strings/dictionary/fr.json'
import nlDictionary from './text_strings/dictionary/nl.json'
import fiDictionary from './text_strings/dictionary/fi.json'
import itDictionary from './text_strings/dictionary/it.json'
import esDictionary from './text_strings/dictionary/es.json'
import deDictionary from './text_strings/dictionary/de.json'

const Accounting = require('accounting')
const CountryCodes = require('./CountryCodes.json')
import Regions from './Regions.json'
import {getCardQuestion, getCardAnswer, getInfluencerPortalAnswer, getFinLitQuestion, getFinLitAnswer} from './SharedStrings'
const Cities = require('./Cities.json')
import Timezones from './TimeZones.json'
const LanguageCodes = require('./LanguageCodes.json')
const countryCodes2PhoneNumberPrefixes = require('./countryCodes2PhoneNumberPrefixes.json')
import ExchangeRates from './ExchangeRates'
import DefaultCurrencies from './DefaultCurrencies'
import ExperimentalCourses from './Education'
import * as School from './school/School'
import AllowanceSuggestions from './AllowanceSuggestions'

export let supportedLanguageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'be', 'it', 'es', 'de', 'et']
export let gimiWebLanguageCodes = ['en', 'sv', 'no']
export let supportedTimeZonesAndroid =
  ['Europe/Stockholm', 'Europe/Oslo', 'Europe/Helsinki', 'Europe/Copenhagen', 'Europe/Prague', 'Europe/London', 'America/New_York', 'America/Los_Angeles',
    'America/Vancouver', 'America/Panama', 'Pacific/Guam', 'Pacific/Palau', 'America/Puerto_Rico', 'Africa/Windhoek', 'Australia/Sydney', 'America/Toronto',
    'Pacific/Auckland', 'Asia/Calcutta', 'Africa/Cairo']

export let languageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'it', 'es', 'de']

export const languageCodesForTranslation = ['nb', 'de', 'fi', 'fr', 'da', 'nl', 'it', 'es', 'sv', 'en']

export const getSupportedCurrencyInfos = (): Array<{code: string, name: string, langKey: string}> => [
  {code: 'SEK', name: 'Swedish Krona', langKey: 'currency_sek'},
  {code: 'NOK', name: 'Norwegian Krone', langKey: 'currency_nok'},
  {code: 'DKK', name: 'Danish Krone', langKey: 'currency_dkk'},
  {code: 'GBP', name: 'Pound Sterling', langKey: 'currency_gbp'},
  {code: 'USD', name: 'US Dollar', langKey: 'currency_usd'},
  {code: 'EUR', name: 'Euro', langKey: 'currency_eur'},
  {code: 'INR', name: 'Indian Rupee', langKey: 'currency_inr'},
  {code: 'AUD', name: 'Australian Dollar', langKey: 'currency_aud'},
  {code: 'CAD', name: 'Canadian Dollar', langKey: 'currency_cad'},
  {code: 'NZD', name: 'New Zealand Dollar', langKey: 'currency_nzd'},
  {code: 'ISK', name: 'Iceland Krona', langKey: 'currency_isk'},
  {code: 'CHF', name: 'Swiss Franc', langKey: 'currency_chf'}
]

export const getEducationStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return svEducate
    case 'nb':
    case 'nn': return noEducate
    case 'da': return daEducate
    case 'fr': return frEducate
    case 'nl': return nlEducate
    case 'fi': return fiEducate
    case 'it': return itEducate
    case 'es': return esEducate
    case 'de': return deEducate
    default: return enEducate
  }
}

/* eslint-disable no-case-declarations */
export const getTextStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv':
      const sv = require(`./text_strings/client/sv.json`)
      return {..._default, ...sv, ...svBot, ...svBotSurvey, ...svEducate, ...svFAQ, ...svSchool}
    case 'nb':
    case 'nn':
      const no = require(`./text_strings/client/nb.json`)
      return {..._default, ...no, ...noBot, ...noBotSurvey, ...noEducate, ...noFAQ, ...noSchool}
    case 'da':
      const da = require(`./text_strings/client/da.json`)
      return {..._default, ...da, ...daBot, ...daBotSurvey, ...daEducate, ...daFAQ, ...daSchool}
    case 'fr':
      const fr = require(`./text_strings/client/fr.json`)
      return {..._default, ...fr, ...frBot, ...frBotSurvey, ...frEducate, ...frFAQ, ...frSchool}
    case 'it':
      const it = require(`./text_strings/client/it.json`)
      return {..._default, ...it, ...itBot, ...itBotSurvey, ...itEducate, ...itFAQ, ...itSchool}
    case 'nl':
      const nl = require(`./text_strings/client/nl.json`)
      return {..._default, ...nl, ...nlBot, ...nlBotSurvey, ...nlEducate, ...nlFAQ, ...nlSchool}
    case 'fi':
      const fi = require(`./text_strings/client/fi.json`)
      return {..._default, ...fi, ...fiBot, ...fiBotSurvey, ...fiEducate, ...fiFAQ, ...fiSchool}
    case 'es':
      const es = require(`./text_strings/client/es.json`)
      return {..._default, ...es, ...esBot, ...esBotSurvey, ...esEducate, ...esFAQ, ...esSchool}
    case 'de':
      const de = require(`./text_strings/client/de.json`)
      return {..._default, ...de, ...deBot, ...deBotSurvey, ...deEducate, ...deFAQ, ...deSchool}
    default:
      const en = require(`./text_strings/client/en.json`)
      return {..._default, ...en, ...enBot, ...enBotSurvey, ...enEducate, ...enFAQ, ...enSchool}
  }
}
/* eslint-enable no-case-declarations */

export const getCalendarStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'da': return {...defaultCalendar, ...daCalendar} // danish
    case 'sv': return {...defaultCalendar, ...svCalendar} // sweden
    case 'nb':
    case 'nn': return {...defaultCalendar, ...noCalendar} // norway
    case 'fr': return {...defaultCalendar, ...frCalendar} // france
    case 'nl': return {...defaultCalendar, ...nlCalendar} // netherlands
    case 'be': return {...defaultCalendar, ...beCalendar} // belgian
    case 'fi': return {...defaultCalendar, ...fiCalendar} // finish
    case 'it': return {...defaultCalendar, ...itCalendar} // italian
    case 'es': return {...defaultCalendar, ...esCalendar} // spanish
    case 'de': return {...defaultCalendar, ...deCalendar} // german
    case 'is': return {...defaultCalendar, ...isCalendar} // island
    case 'et': return {...defaultCalendar, ...etCalendar} // Estonia
    default : return {...defaultCalendar, ...enCalendar}
  }
}

export const getFAQStrings = (lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv': return svFAQ // sweden
    case 'nb':
    case 'nn': return noFAQ // norway
    case 'da': return daFAQ // danish
    case 'fr': return frFAQ // france
    case 'nl': return nlFAQ // Netherlands
    case 'fi': return fiFAQ // finish
    case 'it': return itFAQ // italian
    case 'es': return esFAQ // spanish
    case 'de': return deFAQ // german
    default: return enFAQ
  }
}

export const getDictionaryStrings = (lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv': return svDictionary // sweden
    case 'nb':
    case 'nn': return noDictionary // norway
    case 'da': return daDictionary // danish
    case 'fr': return frDictionary // france
    case 'nl': return nlDictionary // Netherlands
    case 'fi': return fiDictionary // finish
    case 'it': return itDictionary // italian
    case 'es': return esDictionary // spanish
    case 'de': return deDictionary // german
    default: return enDictionary
  }
}

export const getNativeErrorMessageStrings = (lang: string): {[key: string]: string} => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {...defaultNativeErrorMessages, ...svNativeErrorMessages} // sweden
    case 'nb': return {...defaultNativeErrorMessages, ...noNativeErrorMessages} // norway
    case 'da': return {...defaultNativeErrorMessages, ...daNativeErrorMessages} // danish
    case 'fr': return {...defaultNativeErrorMessages, ...frNativeErrorMessages} // france
    case 'nl': return {...defaultNativeErrorMessages, ...nlNativeErrorMessages} // Netherlands
    case 'fi': return {...defaultNativeErrorMessages, ...fiNativeErrorMessages} // finish
    case 'it': return {...defaultNativeErrorMessages, ...itNativeErrorMessages} // italian
    case 'es': return {...defaultNativeErrorMessages, ...esNativeErrorMessages} // spanish
    case 'de': return {...defaultNativeErrorMessages, ...deNativeErrorMessages} // german
    default: return {...defaultNativeErrorMessages, ...enNativeErrorMessages}
  }
}

export const getEnBotSurveyStrings = () => enBotSurvey

export const removeTranslationHelpers = (text: string): string => {
  text = text.replace(/\[.*?\]/g, '').trim()
  text = text.replace(new RegExp(translationHelpTemplate, 'g'), '')
  text = text.replace(new RegExp(translationHelperEMMA, 'g'), '')
  text = text.replace(new RegExp(PLZ_CHECK, 'g'), '')
  text = text.replace(new RegExp(liliTemplate, 'g'), '')
  text = text.trim()
  return text
}

export const translationHelpTemplate = 'PLZ_TRANSLATE'
export const PLZ_CHECK = 'PLZ_CHECK'
export const liliTemplate = 'PLZ_COPY'
export const translationHelperEMMA = 'EMMA'

export const getRegions = () => Regions
export const getCities = () => Cities
export const getCountries = () => CountryCodes
export const getCountry = (countryCode: string) => CountryCodes.find((country: {code: string, name: string, dial_code: string}) => country.code === countryCode)
export const getPhoneNumberPrefix = (country: string) => {
  let prefixes: {[key: string]: string} = countryCodes2PhoneNumberPrefixes
  return parseInt(prefixes[country.toUpperCase()])
}
export const getCountryCodeFromLocale = (locale: string) => locale.slice(-2)
export const getTimezones = () => Timezones
export const getLangugageCodes = () => LanguageCodes.filter((languageCode: { name: string, nativeName: string, code: string}) => supportedLanguageCodes.indexOf(languageCode.code) !== -1)
export const getDefaultCurrencyCode = (userCountryCode: string): string => {
  let currencies: { [key: string]: string} = DefaultCurrencies
  return currencies[userCountryCode] || 'EUR'
}

export const getSupportedTimeZones = () => {
  let shortList: Array<object> = []
  Timezones.map((zone, index) => {
    if (supportedTimeZonesAndroid.indexOf(zone.value) !== -1) shortList.push(zone)
  })
  return shortList || Timezones
}

export const exchangeRates = ExchangeRates

export const getCardTestQuestion = (step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getCardQuestion(step, lang, currencyCode)

export const getCardTestAnswer = (step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getCardAnswer(step, lang, currencyCode)

export const getFinLitTestQuestion = (testType: number, step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getFinLitQuestion(testType, step, lang, currencyCode)

export const getFinLitTestAnswer = (testType: number, step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getFinLitAnswer(testType, step, lang, currencyCode)

export const getInfluencerAnswer = (step: number, lang: string | undefined = 'en') => getInfluencerPortalAnswer(step, lang)

export const getExperimentalCourses = () => ExperimentalCourses

export function getText (langKey: string, values: Array<string|number>, textTransform: string = 'capitalize', textStrings: {[key: string]: string}): string {
  if (typeof textStrings === 'undefined') return ''
  if (!textStrings || !langKey) return ''
  let text = textStrings[langKey]
  if (!text) return ''
  text = removeTranslationHelpers(text)
  text = text.trim()
  text = applyValues(text, values)
  text = applyTransform(text, textTransform)
  return text
}

export const applyValues = (text: string, values: Array<string|number>): string => {
  if (!!values && Array.isArray(values)) values.forEach((item, index) => {
    text = text.split(`%${index + 1}$d`).join(item !== undefined ? item.toString() : '')
  })
  return text
}

export const applyTransform = (text: string, textTransform: string|undefined = 'capitalize'): string => {
  if (!textTransform) return text
  switch (textTransform) {
    case 'uppercase': return text.toUpperCase()
    case 'capitalize': return text.charAt(0).toUpperCase() + text.slice(1)
    case 'lowercase': return text.toLowerCase()
    default: return text
  }
}

export function formatMoney (value: number, currencyCode: string | undefined): string {
  let currencySymbol = getCurrencySymbol(currencyCode || '')
  switch (currencyCode) {
    // no decimals
    case 'SEK':
    case 'DKK':
    case 'NOK': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ' ', ',', '%v%s')
    case 'ISK': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%v%s')
    case 'THB': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'GBP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'EUR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'USD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'AUD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'CAD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'NZD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'INR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'IDR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'CHF': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'COP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'ZAR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    default: return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
  }
}

export function getCurrencySymbol (currencyCode: string): string {
  switch (currencyCode) {
    case 'SEK':
    case 'DKK':
    case 'NOK': return 'kr'
    case 'USD':
    case 'NAD':
    case 'AUD':
    case 'CAD':
    case 'NZD':
    case 'LRD':
    case 'COP': return '$'
    case 'GBP': return '£'
    case 'BWP': return 'P'
    case 'ZWD': return 'Z$'
    case 'SZL': return 'L'
    case 'LSL': return 'L'
    case 'ZMF': return 'ZK'
    case 'TZS': return 'Sh'
    case 'KES': return 'Sh'
    case 'UGX': return 'Sh'
    case 'NGN': return '₦'
    case 'GHS': return '₵'
    case 'GMD': return 'D'
    case 'SCR': return 'Re'
    case 'SHP': return '£'
    case 'INR': return '₹'
    case 'ISK': return 'kr'
    case 'THB': return '฿'
    case 'XAF': return 'CFA'
    case 'SLL': return 'Le'
    case 'MUR': return 'Rs'
    case 'CHF': return 'SFr'
    case 'IDR': return 'Rp'
    case 'ZAR': return 'R'
    default: return '€'
  }
}

export function formatDecimals (value: number): number {
  let decimalValue = value - Math.floor(value)
  if (decimalValue === 0) return 0
  return 2
}

export const SchoolHelper = School

export const AllowanceSuggestionsByCurrency = AllowanceSuggestions
