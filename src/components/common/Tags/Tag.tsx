import React from 'react';
import styles from './Tag.module.css';

interface Props {
  text: string;
}

function Tag({ text }: Props) {
  return <span className={styles.Tag}>{text}</span>;
}

export default Tag;
