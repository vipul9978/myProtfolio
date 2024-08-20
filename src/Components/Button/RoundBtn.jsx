import React from 'react'
import "./Button.css"

const RoundBtn = ({children ,click}) => {
    return (
        <button className='roundbutton' onClick={click}>
            {children}
        </button>
    )
}

export default RoundBtn
