import React from 'react';
import formatTime from '../utilities/format';
import Button from './Button';
import Time from './Time';

const Pomodoro: React.FC = () => {
    const workChime: HTMLAudioElement = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    const restChime: HTMLAudioElement = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

    const [workTime, setWorkTime] = React.useState<number>(1 * 60);
    const [restTime, setRestTime] = React.useState<number>(1 * 60);

    const [time, setTime] = React.useState<number>(0);

    const [currentPhase, setCurrentPhase] = React.useState<string | null>(null);

    let phaseInterval = 0;

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
            <div className={'work_timer'}>
                <div className={'work_buttons'}>
                    <Button handleClick={handleAddWorkTime} text={'+'} />
                    <Button handleClick={handleRemoveWorkTime} text={'-'} />
                </div>
                <Time time={displayWorkTime} />
            </div>

            <div className={'rest_timer'}>
                <div className={'rest_buttons'}>
                    <Button handleClick={handleAddRestTime} text={'+'} />
                    <Button handleClick={handleRemoveRestTime} text={'-'} />
                </div>
                <Time time={displayRestTime} />
            </div>
            <div className={'timer_buttons'}>
                <Button handleClick={handleStart} text={'Start'} />
                <Button handleClick={handleReset} text={'Reset'} />
            </div>
        </>
    );
};

export default Pomodoro;
