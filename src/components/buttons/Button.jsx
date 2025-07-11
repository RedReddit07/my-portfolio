import React from 'react';
import './Button.css';
const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>
            <span>{text}</span>
        </button>
    );
}
export default Button;