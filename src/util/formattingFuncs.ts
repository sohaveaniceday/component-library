export const capitalizeWord = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const containsValidS3Chars = (string: string): boolean =>
  !!string.match(/^[a-z0-9!\-_*'() ]{0,}$/i)

export const sortEntityAlphabetically = (a: any, b: any): number =>
  a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
