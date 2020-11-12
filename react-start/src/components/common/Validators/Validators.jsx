export const required = (value) => {
   return value ? undefined : 'Field is required';
}

export let maxLengthC = (maxLen) => (value) => {
   return value && value.length < maxLen ? undefined : `${maxLen} is reached`} 