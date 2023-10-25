import { IconProps } from '.';

export default function PackageIcon({ color = '#fff' }: IconProps) {
    return (
        <svg
            viewBox="0 0 15 17"
            stroke={color}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.288 0.678712V0.680962C7.28463 0.680899 7.28125 0.680899 7.27788 0.680962C7.26869 0.680492 7.2595 0.680492 7.25031 0.680962C7.24104 0.682357 7.23184 0.684234 7.22275 0.686587C7.21361 0.689111 7.2046 0.692115 7.19575 0.695587C7.18603 0.698237 7.17645 0.701429 7.16706 0.70515L0.450813 3.7494C0.392972 3.76647 0.342101 3.80243 0.305876 3.85184C0.269652 3.90126 0.25004 3.96145 0.250001 4.02334V12.3759C0.249862 12.4304 0.264884 12.4837 0.293293 12.5297C0.321701 12.5756 0.362308 12.6122 0.410313 12.6352L7.16031 15.8488C7.19011 15.8629 7.22211 15.8715 7.25481 15.8741C7.25706 15.8745 7.25931 15.8749 7.26156 15.8752C7.26381 15.8752 7.26606 15.8752 7.26831 15.8752C7.31325 15.8774 7.35804 15.8683 7.39881 15.8488L14.1511 12.633C14.1992 12.6102 14.24 12.5737 14.2686 12.5279C14.2972 12.482 14.3124 12.4287 14.3125 12.3742V4.01602C14.3123 3.94905 14.2892 3.88428 14.2473 3.83306C14.2053 3.78184 14.1472 3.74745 14.083 3.7359H14.0819L7.39544 0.70065C7.3614 0.686064 7.32488 0.678606 7.288 0.678712ZM7.28688 1.27496L13.273 3.99127L10.7305 4.91659C10.7139 4.90388 10.696 4.89313 10.6771 4.88452L5.00369 2.31052L7.28688 1.27496ZM4.31688 2.62159L4.34894 2.63565L4.37706 2.64859L4.40969 2.66321L9.97619 5.18996L7.27338 6.17321L1.28388 3.99577L4.31688 2.62102V2.62159ZM13.7579 4.4199V12.1908L7.55913 15.1417V6.6744L13.7579 4.4199ZM0.804626 4.42609L6.99888 6.67946V15.1423L0.804626 12.1937V4.42665V4.42609Z"
                strokeWidth="0.5"
            />
        </svg>
    );
}
