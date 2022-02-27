import _ from 'lodash'

/**
 *
 * @param obj: Data from server
 * @returns data from server with camel case keys
 */
export default function toCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v))
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [_.camelCase(key)]: toCamelCase(obj[key]),
      }),
      {}
    )
  }
  return obj
}
