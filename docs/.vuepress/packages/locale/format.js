const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g
const hasOwnProperty = Object.prototype.hasOwnProperty
export function noop() {}
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}
export default function() {
  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template(string, ...args) {
    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0]
    }

    if (!args || !args.hasOwnProperty) {
      args = {}
    }

    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i
      } else {
        result = hasOwn(args, i) ? args[i] : null
        if (result === null || result === undefined) {
          return ''
        }

        return result
      }
    })
  }

  return template
}