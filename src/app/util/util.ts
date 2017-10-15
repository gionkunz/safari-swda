export function listToMap<T>(list: Array<T>, key: string): {[k: string]: T} {
  return list.reduce((map, item) => {
    map[item[key]] = item;
    return map;
  }, {});
}

export function mapToList<T>(map: {[k: string]: T}): Array<T> {
  return Object.keys(map).map((key) => map[key]);
}
