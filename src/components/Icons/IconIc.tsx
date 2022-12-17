import * as React from 'react';
interface Props {
  width: string;
  height: string;
  fill: string;
}
const IconIc = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_277_8595)">
      <path
        d="M12.9843 21.0274C12.7278 21.0274 12.4724 20.9298 12.2759 20.7345L4.97392 13.4312C4.59592 13.0532 4.3869 12.5501 4.3869 12.0156C4.3869 11.4812 4.59467 10.978 4.97392 10.6001L12.2759 3.29679C12.6664 2.90628 13.301 2.90628 13.6915 3.29679C14.082 3.6873 14.082 4.32188 13.6915 4.71238L6.38951 12.0144L13.6915 19.3164C14.082 19.7069 14.082 20.3415 13.6915 20.732C13.4963 20.9272 13.2397 21.0249 12.9831 21.0249L12.9843 21.0274Z"
        fill={props.fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_277_8595">
        <rect width={props.width} height={props.height} fill={props.fill} />
      </clipPath>
    </defs>
  </svg>
);
export default IconIc;
