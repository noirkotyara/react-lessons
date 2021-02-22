import React, { useState } from 'react'

export const OuterClick2: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = useState(false)
    let timeOutId: number
 
    const onBlurHandler = () => {
        timeOutId = setTimeout(() => {
            setIsOpen(false)
        });
        console.log('timeOutId' + timeOutId)
      }
    const onFocusHandler = () => {
        clearTimeout(timeOutId)
    } 
    const onClickHandler = () => {
        setIsOpen(!isOpen)
        console.log('after' + isOpen)
    }
    return (
        <div onBlur={onBlurHandler} onFocus={onFocusHandler}>
            <button onClick={onClickHandler}  aria-haspopup="true" aria-expanded={isOpen}>Click to choose:</button>
            {
                isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )
            }
        </div>
    )
}