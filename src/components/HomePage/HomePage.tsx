import React from 'react';
import { JSX } from 'react/jsx-runtime';
import styles from './HomePage.module.css';

export default function HomePage():JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://cojo.ru/wp-content/uploads/2022/12/privet-kartinki-27.webp" alt="Hello" width="400" height="400" />
    </div>

  );
}
