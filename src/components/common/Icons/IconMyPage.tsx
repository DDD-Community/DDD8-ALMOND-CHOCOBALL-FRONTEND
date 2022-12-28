import * as React from 'react';
interface Props {
  width: string;
  height: string;
  fill: string;
}
const IconMyPage = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 36 36"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_246_5791)">
      <path
        d="M17.9991 15.8025C21.3326 15.8025 24.035 13.1001 24.035 9.76647C24.035 6.43289 21.3326 3.73048 17.9991 3.73048C14.6655 3.73048 11.9631 6.43289 11.9631 9.76647C11.9631 13.1001 14.6655 15.8025 17.9991 15.8025Z"
        fill={props.fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.98731 18.0009H27.0108C28.6698 18.0009 30.0147 19.3458 30.0147 21.0048V27.0127C30.0147 28.6717 28.6698 30.0166 27.0108 30.0166H8.98731C7.32829 30.0166 5.9834 28.6717 5.9834 27.0127V21.0048C5.9834 19.3458 7.32829 18.0009 8.98731 18.0009ZM19.1218 21.7558H24.3824C25.0045 21.7558 25.5088 22.2601 25.5088 22.8823C25.5088 23.5044 25.0045 24.0087 24.3824 24.0087H19.1218C18.4996 24.0087 17.9953 23.5044 17.9953 22.8823C17.9953 22.2601 18.4996 21.7558 19.1218 21.7558Z"
        fill={props.fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_246_5791">
        <rect width={props.width} height={props.height} fill={props.fill} />
      </clipPath>
    </defs>
  </svg>
);
export default IconMyPage;
