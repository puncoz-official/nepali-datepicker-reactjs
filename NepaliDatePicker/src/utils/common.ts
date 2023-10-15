export const omitKeys = (keys: string[], obj: { [key: string]: any }) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (keys.includes(key)) {
      return { ...acc, [key]: value }
    }
    return { ...acc }
  }, {})
}
