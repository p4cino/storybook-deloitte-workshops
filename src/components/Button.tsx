import React from 'react';
import PropTypes from "prop-types";

type IButtonColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'black' | 'white' | 'gray';
type IButtonSize = 'small' | 'medium' | 'large';
type IButtonBorderRadius = 'rounded' | 'rounded-full' | 'rounded-none';
type IButtonBorderType = 'solid' | 'dashed' | 'dotted' | 'double' | 'none';

interface IButton {
    border?: IButtonBorderType;
    borderColour?: IButtonColor;
    backgroundColor?: IButtonColor;
    children?: React.ReactNode;
    height?: string;
    radius?: IButtonBorderRadius;
    size?: IButtonSize;
    label?: string;
    disabled?: boolean;
    color?: IButtonColor;
    handleClick?: () => void;
}

const Button: React.FC<IButton> = ({
                                       border = 'none',
                                       borderColour = 'black',
                                       backgroundColor = 'blue',
                                       color = 'white',
                                       children,
                                       height,
                                       radius = 0,
                                       size = 'medium',
                                       label,
                                       disabled = false,
                                       handleClick,
                                       ...props
                                   }) => {

    const buttonStyle = {
        border: border || 'none',
        backgroundColor: backgroundColor,
        height: height || '40px',
        width: size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px',
        color: 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        borderRadius: radius === 'rounded' ? '5px' : radius === 'rounded-full' ? '50%' : '0px',
        borderColor: borderColour,
    }

    const onClickHandler = () => {
        return handleClick;
    }

    return (
        <button
            style={buttonStyle}
            onClick={onClickHandler}
            disabled
            {...props}
        >
            <span>
                {label}
            </span>
        </button>
    );
}

//We should always check the types of props we are passing to the component
//Typescript validates types at compile time, whereas PropTypes are checked at runtime.
Button.propTypes = {
    border: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double', 'none']),
    backgroundColor: PropTypes.oneOf(['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white', 'gray']),
    color: PropTypes.oneOf(['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white', 'gray']),
    borderColour: PropTypes.oneOf(['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white', 'gray']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    radius: PropTypes.oneOf(['rounded', 'rounded-full', 'rounded-none']),
    label: PropTypes.string,
}

export default Button;
