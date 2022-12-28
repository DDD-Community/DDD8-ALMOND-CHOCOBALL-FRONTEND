import * as React from 'react';

interface Props {
  width: string;
  height: string;
  fill: string;
}
const IconHome = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 36 36"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_246_5790)">
      <path
        d="M31.9748 16.7412L19.0673 4.8194C18.491 4.28808 17.6048 4.28808 17.0284 4.8194L4.12287 16.7412C3.64975 17.2143 3.98394 18.0235 4.65419 18.0235H8.28516V28.5372C8.28516 29.367 8.95729 30.0391 9.78712 30.0391H26.3086C27.1385 30.0391 27.8106 29.367 27.8106 28.5372V18.0235H31.4416C32.1099 18.0235 32.446 17.2143 31.9729 16.7412H31.9748ZM20.6782 27.0352H15.4213C14.7999 27.0352 14.2949 26.5302 14.2949 25.9087C14.2949 25.2873 14.7999 24.7823 15.4213 24.7823H20.6782C21.2996 24.7823 21.8046 25.2873 21.8046 25.9087C21.8046 26.5302 21.2996 27.0352 20.6782 27.0352Z"
        fill="current"
      />
    </g>
    <defs>
      <clipPath id="clip0_246_5790">
        <rect width={props.width} height={props.height} fill={props.fill} />
      </clipPath>
    </defs>
  </svg>
);
export default IconHome;
