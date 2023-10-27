import { IconProps } from 'phosphor-react';

export default function FloppyDiskIcon({ color = '#fff' }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path
                    d="M20.75 8.56031V19.5C20.75 19.6989 20.671 19.8897 20.5303 20.0303C20.3897 20.171 20.1989 20.25 20 20.25H5C4.80109 20.25 4.61032 20.171 4.46967 20.0303C4.32902 19.8897 4.25 19.6989 4.25 19.5V4.5C4.25 4.30109 4.32902 4.11032 4.46967 3.96967C4.61032 3.82902 4.80109 3.75 5 3.75H15.9397C16.1383 3.75009 16.3288 3.82899 16.4694 3.96938L20.5306 8.03063C20.671 8.17117 20.7499 8.36166 20.75 8.56031Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 20.25V14.25C8 14.0511 8.07902 13.8603 8.21967 13.7197C8.36032 13.579 8.55109 13.5 8.75 13.5H16.25C16.4489 13.5 16.6397 13.579 16.7803 13.7197C16.921 13.8603 17 14.0511 17 14.25V20.25"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.75 6.75H9.5"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
