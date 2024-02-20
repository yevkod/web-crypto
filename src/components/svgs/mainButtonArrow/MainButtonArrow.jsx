import React from 'react'

export const MainButtonArrow = ({ color }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_1866)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20718 0.792969L15.2072 13.793L13.793 15.2072L0.792969 2.20718L2.20718 0.792969Z" fill={color ? color : "white"} />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 13.5V7.5H15.5V15.5H7.5V13.5H13.5Z" fill={color ? color : "white"} />
            </g>
            <defs>
                <clipPath id="clip0_2_1866">
                    <rect width="16" height="16" fill={color ? color : "white"} />
                </clipPath>
            </defs>
        </svg>
    )
}
