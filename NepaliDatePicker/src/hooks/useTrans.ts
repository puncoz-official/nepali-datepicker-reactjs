import { englishToNepaliNumber, nepaliToEnglishNumber } from "nepali-number"

import { translations } from "@/components"
import { Language } from "#/Data.ts"

import { useCommon } from "./useCommon.ts"
import { useData } from "./useData.ts"

export const useTrans = () => {
  const { state } = useData()
  const { getObject } = useCommon()

  return {
    trans: (key: string, locale?: Language) => {
      return getObject<string>(translations[locale ?? state.locale.calendar], key, key)
    },

    numberTrans: (num: number | string, locale?: Language) => {
      return Language.ENGLISH === (locale ?? state.locale.calendar)
        ? nepaliToEnglishNumber(num as string)
        : englishToNepaliNumber(num)
    },
  }
}
