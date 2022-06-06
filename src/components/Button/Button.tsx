import React from "react";
import './Button.css'

interface IButtonProps {
    title: string

}

const Button = (props: IButtonProps) => {
    return (
        <button className='MainButton'> Learn More
        </button>
    )
}

export default Button;
