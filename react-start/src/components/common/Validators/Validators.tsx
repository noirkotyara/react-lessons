
type ValidatorsType = (value: null | string) => undefined | string

export const required: ValidatorsType = (value) => {
   return value ? undefined : 'Field is required';
}

export let maxLengthC = (maxLen: number): ValidatorsType => (value) => {
   return value && value.length < maxLen ? undefined : `${maxLen} is reached`} 