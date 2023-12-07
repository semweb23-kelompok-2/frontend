export function toTitleCase(str: string) {
  if (str.length === 0) return str;
  else return str[0].toUpperCase() + str.slice(1);
}

export function convertToArray(str: string | string[], split: string) {
  return typeof str === "string" ? (str.split(split) as string[]) : str;
}
