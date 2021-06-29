import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

const COLOR = ["primary", "green"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
    ...restProps
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    const btnClassName = `btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`;

    return (
        <button className={btnClassName.trim()} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
