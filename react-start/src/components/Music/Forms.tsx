import React, { useState } from 'react'
type PropsType ={

}
const Reservation: React.FC<PropsType> = () => {
    const [isGoing, setIsGoing] = useState(true)
    const [numberOfGuests, setNumberOfGuests] = useState(2)
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target
        switch (target.name) {
            case 'isGoing':
                setIsGoing(target.checked)
                break;
        
            case 'numberOfGuests':
                setNumberOfGuests(Number(target.value))
                break;
        
            default:
                break;
        }
        
    }
    return (
        <form action="">
            <label htmlFor="">
                IsGoing:
                <input name='isGoing'
                       type='checkbox'
                        checked={isGoing}
                        onChange={inputHandler}/>
            </label>
            <br/>
            <label htmlFor="">
                Number of guests:
                <input name='numberOfGuests'
                       type='number'
                        value={numberOfGuests}
                        onChange={inputHandler}/>
            </label>
        </form>
    )
}

export default Reservation