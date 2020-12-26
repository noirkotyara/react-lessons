
export const required = (value: null | string) => {
   return value ? undefined : 'Field is required';
}
type valueType = {
   value: number
   length: number
}
export let maxLengthC = (maxLen: number) => (value: valueType) => {
   return value && value.length < maxLen ? undefined : `${maxLen} is reached`} 