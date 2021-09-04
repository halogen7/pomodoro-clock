const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minuteStr = minutes.toString().padStart(2, '0');
    const secondStr = seconds.toString().padStart(2, '0');

    return minuteStr + ':' + secondStr;
};

export default formatTime;
