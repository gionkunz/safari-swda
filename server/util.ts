export function filterObject<T>(original: any, properties: string[]): T {
  return <T>Object
    .keys(original)
    .reduce((obj, key) => {
      if (properties.includes(key)) {
        obj[key] = original[key];
      }
      return obj;
    }, {});
}
