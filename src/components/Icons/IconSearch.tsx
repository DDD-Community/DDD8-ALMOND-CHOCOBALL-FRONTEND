import * as React from 'react';
interface Props {
  width: string;
  height: string;
  fill: string;
}
const IconSearch = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_287_5928)">
      <path
        d="M20.9937 18.0888L17.5662 15.3925C18.4712 14.0687 19.0012 12.47 19.0012 10.75C19.0012 6.20125 15.3 2.5 10.7513 2.5C6.2025 2.5 2.5 6.20125 2.5 10.75C2.5 15.2987 6.20125 19 10.75 19C12.8588 19 14.7837 18.2037 16.2437 16.8975L19.7563 19.6612C19.94 19.805 20.1575 19.875 20.3738 19.875C20.67 19.875 20.9625 19.7437 21.16 19.4937C21.5012 19.06 21.4263 18.4313 20.9925 18.09L20.9937 18.0888ZM10.75 17C7.30375 17 4.5 14.1962 4.5 10.75C4.5 7.30375 7.30375 4.5 10.75 4.5C14.1962 4.5 17 7.30375 17 10.75C17 14.1962 14.1962 17 10.75 17V17Z"
        fill="current"
      />
    </g>
    <defs>
      <clipPath id="clip0_287_5928">
        <rect width={props.width} height={props.height} fill={props.fill} />
      </clipPath>
    </defs>
  </svg>
);
export default IconSearch;
