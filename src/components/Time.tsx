import React, { ReactElement } from 'react';

interface TimeProps {
    time: string;
}

const Time = (props: TimeProps): ReactElement => {
    return (
        <div className="time">
            <h1>{props.time}</h1>
        </div>
    );
};

export default Time;
