import React from 'react';

interface PomodoroProps {
    time: string;
    handleAddTime: () => void;
    handleRemoveTime: () => void;
}

const Pomodoro = (props: PomodoroProps) => {
    return (
        <>
            <div className="work">
                <p>Work Time</p>
                <button onClick={props.handleAddTime} className="btn plus-work">
                    +
                </button>
                <button onClick={props.handleRemoveTime} className="btn minus-work">
                    -
                </button>
            </div>
            <div className="work-clock">
                <h1 className="time">{props.time}</h1>
            </div>
        </>
    );
};

export default Pomodoro;
