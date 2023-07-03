import { useState } from "react";
import dayjs from 'dayjs';
import useLiveClock from "@src/shared/hooks/useLiveClock";

export default function Header() {
    const [search, setSearch] = useState('');
    const currentTime = useLiveClock();
    const { HH, MM, MMMM, YYYY, ss } = currentTime;
    return (
        <div className="d-flex justify-content-between header">
            <div className="d-flex justify-content-between">
                <div className="header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-41.8008 -90.1095 362.2736 540.657">
                        <path d="M238.077 338.483v21.912h7.027v-14.589h25.575v14.589h7.022v-21.874l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383m-84.921-29.112h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415v-21.944h-32.42v-7.159m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 324.189c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1v-28.691l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" fill="#e82127" />
                        <g fill="#e82127">
                            <path d="M139.35 252.502l35.476-199.519c33.815 0 44.481 3.708 46.021 18.843 0 0 22.684-8.458 34.125-25.636-44.646-20.688-89.505-21.621-89.505-21.621l-26.176 31.882.059-.004-26.176-31.883s-44.86.934-89.5 21.622c11.431 17.178 34.124 25.636 34.124 25.636C59.347 56.686 70 52.978 103.588 52.954l35.762 199.548" />
                            <path d="M139.336 15.36c36.09-.276 77.399 5.583 119.687 24.014 5.652-10.173 7.105-14.669 7.105-14.669C219.901 6.416 176.61.157 139.331 0 102.054.157 58.765 6.417 12.544 24.705c0 0 2.062 5.538 7.1 14.669 42.28-18.431 83.596-24.29 119.687-24.014h.005" />
                        </g>
                    </svg>
                </div>
                <div className="d-flex align-items-center">
                    <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <div className="">
                    {dayjs().format('dddd')}
                </div>
                <div className="d-flex align-items-center">
                    {MM}{' '}{MMMM}{', '}{YYYY}{' '}
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 8px' }} width="16" height="16" fill="green" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    </svg>
                    {HH}:{ss}
                </div>
            </div>
        </div>
    );
}