import React from 'react';

interface RestProps {
    time: string;
    handleAddTime: () => void;
    handleRemoveTime: () => void;
}

const Rest = (props: RestProps) => {
    return (
        <>
            <div className="rest">
                <p>Rest Time</p>
                <button onClick={props.handleAddTime} className="btn plus-rest">
                    +
                </button>
                <button onClick={props.handleRemoveTime} className="btn minus-rest">
                    -
                </button>
            </div>
            <div className="rest-clock">
                <h1 className="time">{props.time}</h1>
            </div>
        </>
    );
};

export default Rest;
