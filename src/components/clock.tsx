import React from 'react';
import formatTime from '../utilities/formatTimeDisplay';
import Pomodoro from './pomodoro';
import Rest from './rest';

const Clock = () => {
    const workChime: HTMLAudioElement = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    const restChime: HTMLAudioElement = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

    const [workTime, setWorkTime] = React.useState<number>(1 * 60);
    const [restTime, setRestTime] = React.useState<number>(1 * 60);

    const [time, setTime] = React.useState<number>(0);

    const [currentPhase, setCurrentPhase] = React.useState<string | null>(null);

    let phaseInterval: number = 0;

    const handleAddWorkTime = () => {
        setWorkTime(workTime + 60);
    };
    const handleRemoveWorkTime = () => {
        setWorkTime(workTime - 60);
    };

    const handleAddRestTime = () => {
        setRestTime(restTime + 60);
    };
    const handleRemoveRestTime = () => {
        setRestTime(restTime - 60);
    };

    const handleStart = () => {
        setCurrentPhase('work');
        setTime(workTime);
    };
    const handleReset = () => {
        setCurrentPhase(null);
        window.clearInterval(phaseInterval);
    };

    const countdown = () => {
        setTime((prevTime) => (prevTime -= 1));
    };

    React.useEffect(() => {
        if (currentPhase !== null && phaseInterval === 0) {
            phaseInterval = window.setInterval(countdown, 1000);

            if (time === 0) {
                handleReset();
                if (currentPhase === 'work') {
                    workChime.play();
                    setTime(restTime);
                    setCurrentPhase('rest');
                } else {
                    restChime.play();
                    setTime(workTime);
                    setCurrentPhase('work');
                }
            }
        }

        return () => {
            window.clearInterval(phaseInterval);
        };
    }, [currentPhase, time]);

    const displayWorkTime = currentPhase === 'work' ? formatTime(time) : formatTime(workTime);
    const displayRestTime = currentPhase === 'rest' ? formatTime(time) : formatTime(restTime);

    return (
        <>
            <Pomodoro time={displayWorkTime} handleAddTime={handleAddWorkTime} handleRemoveTime={handleRemoveWorkTime} />
            <Rest time={displayRestTime} handleAddTime={handleAddRestTime} handleRemoveTime={handleRemoveRestTime} />
            <div className="buttons">
                <button onClick={handleStart} className="btn">
                    Start
                </button>
                <button onClick={handleReset} className="btn">
                    Reset
                </button>
            </div>
        </>
    );
};

export default Clock;
