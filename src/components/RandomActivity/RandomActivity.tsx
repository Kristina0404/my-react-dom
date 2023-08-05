import React, { useEffect, useState } from 'react';
import type Activity from './types/Activity';
import styles from './RandomActivity.module.css';

export default function RandomActivity(): JSX.Element {
    const initialValue: Activity = {
        activity: '',
        type: '',
        participants: 0,
        price: 0,
        link: '',
        key: '',
        accessibility: 0
      };

  const [activity, setActivity] = useState<Activity>(initialValue);

  async function getActivity(): Promise<void> {
    fetch('https://www.boredapi.com/api/activity')
       .then((res: Response) => res.json())
       .then((obj: Activity) => {
         setActivity(obj);
       });
    }
  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.active}>{activity.activity}</h1>
      <p className={styles.info}>Участники: {activity.participants}</p>
      <p className={styles.info}> Цена: {activity.price}</p>
      {activity.link ? <a className={styles.link} href={activity.link}>К событию</a> : ''}
      <button className={styles.btn} type="button" onClick={getActivity}>Обновить</button>
    </div>
  );
}
