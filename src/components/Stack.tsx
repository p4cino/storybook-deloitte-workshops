import React from 'react';
import PropTypes from "prop-types";

type IStackDirection = 'row' | 'column';

interface IStack {
    spacing?: number;
    direction?: IStackDirection;
    wrap?: boolean;
    children: any;
}

const Stack: React.FC<IStack> = ({
                                     spacing = 2,
                                     direction = 'row',
                                     wrap = false,
                                     children,
                                     ...props
                                 }) => {

    const stackStyle = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
    }

    return (
        <div
            // @ts-ignore
            style={stackStyle}
            {...props}
        >
            {children}
        </div>
    );
}

//We should always check the types of props we are passing to the component
//Typescript validates types at compile time, whereas PropTypes are checked at runtime.
Stack.propTypes = {
    spacing: PropTypes.number,
    direction: PropTypes.oneOf(['row', 'column']),
    wrap: PropTypes.bool,
    children: PropTypes.node,
}

export default Stack;
