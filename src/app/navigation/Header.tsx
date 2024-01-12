import dayjs from 'dayjs';
import { useLiveClock } from "@src/shared";

export default function Header() {
    const { HH, MM, MMMM, YYYY, ss } = useLiveClock();

    return (
        <>
            {dayjs().format('dddd')}{' / '}
            {MM}{' '}{MMMM}{', '}{YYYY}{' / '}
            {HH}:{ss}
        </>
    );
}