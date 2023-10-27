import { IconProps } from '.';

export default function UpArrowIcon({ color = '#3CFCA0' }: IconProps) {
    return (
        <svg viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.7445 4.2748V0.702637H8.17236"
                stroke={color}
                stroke-width="1.33956"
                stroke-linecap="square"
            />
            <path
                d="M1.32471 7.25136L4.40228 3.53036L7.33327 5.31644L11.4458 1"
                stroke={color}
                stroke-width="1.33956"
                stroke-linecap="square"
            />
        </svg>
    );
}
