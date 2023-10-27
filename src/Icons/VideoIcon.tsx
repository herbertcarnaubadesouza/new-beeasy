import { IconProps } from '.';

export default function VideoIcon({ color = '#fff' }: IconProps) {
    return (
        <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 15L18 15C18.8284 15 19.5 14.3284 19.5 13.5V3C19.5 2.17157 18.8284 1.5 18 1.5L3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V13.5C1.5 14.3284 2.17157 15 3 15Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.5 18H7.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.5 8.25L9 5.25V11.25L13.5 8.25Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
