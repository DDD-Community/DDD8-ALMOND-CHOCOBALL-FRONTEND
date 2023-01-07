import React from 'react';
import { IconIc } from '../Icons';

interface Props {
  handleClick: () => void;
}

function HeaderBackButton({ handleClick }: Props) {
  return (
    <div onClick={handleClick}>
      <IconIc width="24px" height="24px" fill="#fff" />
    </div>
  );
}

export default HeaderBackButton;
