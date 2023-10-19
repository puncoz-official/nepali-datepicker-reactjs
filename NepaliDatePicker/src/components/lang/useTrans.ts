import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number"

import { useData } from "@/components"
import { getObject } from "@/utils"
import { Language } from "#/Data.ts"

import translations from "./translations.ts"

const useTrans = () => {
  const { state } = useData()

  return {
    trans: (key: string, locale?: Language) => {
      return getObject<string>(translations[locale || state.config.currentLocale], key, key)
    },

    numberTrans: (num: number | string, locale?: Language) => {
      return Language.ENGLISH === `${locale || state.config.currentLocale}`
        ? nepaliToEnglishNumber(num as string)
        : englishToNepaliNumber(num)
    },
  }
}

export default useTrans
