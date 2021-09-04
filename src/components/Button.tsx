import React, { ReactElement } from 'react';

interface ButtonProps {
    text: string;
    handleClick: () => void;
}

const Button = (props: ButtonProps): ReactElement => {
    return (
        <>
            <button onClick={props.handleClick} className="button">
                {props.text}
            </button>
        </>
    );
};

export default Button;
