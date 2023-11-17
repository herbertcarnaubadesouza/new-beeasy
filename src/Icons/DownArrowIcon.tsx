import { IconProps } from '.';

export default function DownArrowIcon({ color = '#F3B200' }: IconProps) {
    return (
        <svg viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.33803 4.53184L1.33803 8.104L4.91016 8.104"
                stroke={color}
                strokeWidth="1.33956"
                strokeLinecap="square"
            />
            <path
                d="M11.7578 1.55528L8.68024 5.27629L5.74925 3.4902L1.63668 7.80664"
                stroke={color}
                strokeWidth="1.33956"
                strokeLinecap="square"
            />
        </svg>
    );
}
