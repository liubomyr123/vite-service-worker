import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const useLiveClock = () => {
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const worker = new Worker(new URL('../workers/liveTimer', import.meta.url));

        const handleMessage = (event: MessageEvent) => setCurrentTime(dayjs(event.data));
        worker.addEventListener('message', handleMessage);

        return () => {
            worker.removeEventListener('message', handleMessage);
            worker.terminate();
        };
    }, []);

    return {
        MM: currentTime.format('MM'),
        MMMM: currentTime.format('MMMM'),
        YYYY: currentTime.format('YYYY'),
        HH: currentTime.format('HH'),
        ss: currentTime.format('ss'),
    };
};

export default useLiveClock;