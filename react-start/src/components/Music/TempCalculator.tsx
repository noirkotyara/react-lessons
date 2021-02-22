import { useState } from "react"
import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit' 
}


type PropsType = {
    onTemperatureHandle: (scale: 'c' | 'f', temperature: string) => void,
    temperature: string,
    scale: 'c' | 'f'
}
const TemperatureInput: React.FC<PropsType> = (props) => {
   
    const temperatureHandle = (e: React.ChangeEvent<HTMLInputElement>) => { 
        props.onTemperatureHandle(props.scale, e.currentTarget.value)
    }
    return (
        <div>
            <fieldset>
                <legend>
                    Input Temperature in {//@ts-ignore
                     scaleNames[props.scale]}:
                </legend>
                <input value={props.temperature} onChange={temperatureHandle} />
            </fieldset>
        </div>
    );
}
const toCelcius = (fahrenheit: number) => (fahrenheit - 32) * 5/9
const toFahrenheit = (celsius: number) => (celsius * 9/5) + 32
const tryConvert = (temperature: string, convert:(input: number) => number ) => {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) return ''
    const output = convert(input)
    const rounded = Math.round(output * 1000) /1000
    return rounded.toString()
}
const TemperatureCalculator = () => {
    const [temperature, setTemperature] = useState<string>('')
    const [scale, changeScale] = useState<'c' | 'f'>('c')
    const onTemperatureHandle = (scale: 'c' | 'f', temperature: string) => {
        changeScale(scale)
        setTemperature(temperature)
    }
        let tempC = (scale === 'f') ? tryConvert(temperature, toCelcius) : temperature
        let tempF = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature
    
    return (
        <div>
            <h1>Converter</h1>            
            <TemperatureInput onTemperatureHandle={onTemperatureHandle} temperature={tempC} scale='c' />
            <TemperatureInput onTemperatureHandle={onTemperatureHandle} temperature={tempF} scale='f' />
        </div>
    )
}

export default TemperatureCalculator