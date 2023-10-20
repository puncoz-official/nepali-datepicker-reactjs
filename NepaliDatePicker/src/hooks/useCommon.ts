export const useCommon = () => {
  const omitKeys = (keys: string[], obj: { [key: string]: any }) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (!keys.includes(key)) {
        return { ...acc, [key]: value }
      }
      return { ...acc }
    }, {})
  }

  const getObject = <T>(obj: object, key: string, defaultValue: T | null = null): T => {
    let value = { ...obj } as object

    try {
      key.split(".").forEach((subKey) => {
        if (!Object.keys(value).includes(subKey)) {
          throw new Error(`No property ${subKey} found in the object. Please define defaultValue.`)
        }

        value = (value as any)[subKey]
      })
    } catch (e) {
      if (defaultValue) {
        return defaultValue
      }

      throw e
    }

    return value as T
  }

  const range = (start: number, end: number, step: number = 1): number[] => {
    const list = []

    for (let i = start; i <= end; i += step) {
      list.push(i)
    }

    return list
  }

  const zeroPad = (num: number | string, length: number = 2): string => String(num).padStart(length, "0")

  return { omitKeys, getObject, range, zeroPad }
}
