export function toTitleCase(str: string) {
    if (str.length === 0) return str
    else return str[0].toUpperCase() + str.slice(1) 
}