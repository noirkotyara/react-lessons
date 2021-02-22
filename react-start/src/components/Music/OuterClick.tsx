import React, { useEffect, useRef, useState } from 'react'

export const OuterClick: React.FC<{}> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleContainer = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler)
    }, [isOpen])
    const onClickOutsideHandler = (event: any) => {
        if(isOpen && (
            toggleContainer.current
             && !toggleContainer.current.contains(event.target))){
                setIsOpen(false)
        }
    }
    const onClickHandler = () => {
        setIsOpen(!isOpen)
        console.log('after' + isOpen)
    }
    return (
        <div ref={toggleContainer}>
            <button onClick={onClickHandler}>Click to choose:</button>
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