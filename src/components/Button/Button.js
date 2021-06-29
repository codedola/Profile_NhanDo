import React from "react";
import "./Button.css";
const STYLES = ["btn-grad"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    Icons,
    ...restProps
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const btnClassName = `${checkButtonStyle}`;

    return (
        <button className={btnClassName.trim()} onClick={onClick} type={type}>
            {Icons ? <Icons /> : null} {children}
        </button>
    );
};
