import React from 'react';
import './Button.css';

const STYLES = [
  'btn btn-primary mb1 bg-orange',
  'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Buttonsss = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
        </button>
    )
}