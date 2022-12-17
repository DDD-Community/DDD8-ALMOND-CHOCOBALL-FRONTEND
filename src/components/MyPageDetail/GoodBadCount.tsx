import React from 'react';
import { IconGood, IconBad } from '../Icons';
import styles from './GoodBadCount.module.css';

interface Props {
  goodOrBad: 'good' | 'bad';
  count: number;
}
function GoodButton({ goodOrBad, count }: Props) {
  return (
    <div className={styles.container}>
      {goodOrBad === 'good' ? <IconGood /> : <IconBad />}
      <span>{count}</span>
    </div>
  );
}

export default GoodButton;
