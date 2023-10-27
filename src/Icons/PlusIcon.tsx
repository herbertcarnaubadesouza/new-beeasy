import { IconProps } from '.';

export default function PlusIcon({ color = '#fff' }: IconProps) {
    return (
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43Z"
                stroke={color}
                strokeWidth="2"
                strokeMiterlimit="10"
            />
            <path
                d="M13.25 22H30.75"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 13.25V30.75"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
