import * as React from 'react';
interface Props {
  width: string;
  height: string;
  fill: string;
}
const SVGComponent = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_277_9056)">
      <path
        d="M16.9688 6.25H6.96875C5.3125 6.25 3.96875 7.59375 3.96875 9.25V14.75C3.96875 16.4062 5.3125 17.75 6.96875 17.75H15.4688L17.5425 19.8237C17.7 19.9812 17.9688 19.87 17.9688 19.6475V17.58C19.1337 17.1675 19.9688 16.0575 19.9688 14.7513V9.25125C19.9688 7.595 18.625 6.25125 16.9688 6.25125V6.25ZM7.71875 12.75C7.305 12.75 6.96875 12.4137 6.96875 12C6.96875 11.5863 7.305 11.25 7.71875 11.25C8.1325 11.25 8.46875 11.5863 8.46875 12C8.46875 12.4137 8.1325 12.75 7.71875 12.75ZM11.9688 12.75C11.555 12.75 11.2188 12.4137 11.2188 12C11.2188 11.5863 11.555 11.25 11.9688 11.25C12.3825 11.25 12.7188 11.5863 12.7188 12C12.7188 12.4137 12.3825 12.75 11.9688 12.75ZM16.2188 12.75C15.805 12.75 15.4688 12.4137 15.4688 12C15.4688 11.5863 15.805 11.25 16.2188 11.25C16.6325 11.25 16.9688 11.5863 16.9688 12C16.9688 12.4137 16.6325 12.75 16.2188 12.75Z"
        fill="current"
      />
    </g>
    <defs>
      <clipPath id="clip0_277_9056">
        <rect width={props.width} height={props.height} fill={props.fill} />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
