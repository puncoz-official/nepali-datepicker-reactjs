export const useCommon = () => {
  const omitKeys = (keys: string[], obj: Record<string, any>) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (!keys.includes(key)) {
        return { ...acc, [key]: value as unknown }
      }
      return { ...acc }
    }, {})
  }

  const getObject = <T>(obj: Record<string, any>, key: string, defaultValue: T | null = null): T => {
    let value: Record<string, any> = { ...obj }

    try {
      key.split(".").forEach((subKey) => {
        if (!Object.keys(value).includes(subKey)) {
          throw new Error(`No property ${subKey} found in the object. Please define defaultValue.`)
        }

        value = value[subKey] as Record<string, any>
      })
    } catch (e) {
      if (defaultValue) {
        return defaultValue
      }

      throw e
    }

    return value as T
  }

  const range = (start: number, end: number, step = 1): number[] => {
    const list = []

    for (let i = start; i <= end; i += step) {
      list.push(i)
    }

    return list
  }

  const zeroPad = (num: number | string, length = 2): string => String(num).padStart(length, "0")

  return { omitKeys, getObject, range, zeroPad }
}
