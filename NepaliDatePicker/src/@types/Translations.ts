import { Language } from "#/Data.ts"

export const Months = [
  "baisakh",
  "jestha",
  "asar",
  "shrawan",
  "bhadra",
  "asoj",
  "kartik",
  "mangsir",
  "pouse",
  "magh",
  "falgun",
  "chaitra",
] as const

export const Weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const

export interface Translation {
  months: {
    [month in typeof Months[number]]: string
  }
  weeks: {
    [week in typeof Weeks[number]]: string
  }
  labels: Record<string, string>
}

export type Translations = {
  [locale in Language]: Translation
}
