import { IconProps } from 'phosphor-react';

export default function ImageIcon({ color = '#fff' }: IconProps) {
    return (
        <svg viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M47 1H3C1.89543 1 1 1.89543 1 3V39C1 40.1046 1.89543 41 3 41H47C48.1046 41 49 40.1046 49 39V3C49 1.89543 48.1046 1 47 1Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M32 17C33.6569 17 35 15.6569 35 14C35 12.3431 33.6569 11 32 11C30.3431 11 29 12.3431 29 14C29 15.6569 30.3431 17 32 17Z"
                fill={color}
            />
            <path
                d="M29.8276 30L36.2501 23.585C36.6252 23.2102 37.1337 22.9996 37.6639 22.9996C38.1941 22.9996 38.7026 23.2102 39.0776 23.585L49.0001 33.515"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1 31.1725L14.585 17.585C14.7707 17.399 14.9913 17.2515 15.2341 17.1509C15.4769 17.0502 15.7372 16.9984 16 16.9984C16.2628 16.9984 16.5231 17.0502 16.7659 17.1509C17.0087 17.2515 17.2293 17.399 17.415 17.585L40.8275 41"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
