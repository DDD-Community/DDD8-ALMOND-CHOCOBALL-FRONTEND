import React from 'react';
import './Tag.css';

interface Props {
  text: string;
}
function Tag({ text }: Props) {
  return <span className="tag">{text}</span>;
}

export default Tag;
