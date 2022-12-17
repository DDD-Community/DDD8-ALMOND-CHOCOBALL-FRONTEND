import React from 'react';
import Tag from './Tag';

interface Props {
  textList: string[];
}

function TagList({ textList }: Props) {
  return (
    <div>
      {textList.map((text, index) => (
        <Tag text={text} key={index} />
      ))}
    </div>
  );
}

export default TagList;
