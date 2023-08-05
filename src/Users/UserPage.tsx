/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import User from './types/User';
import styles from './UserPage.module.css';

export default function UserPage():JSX.Element {
    const { userId } = useParams();
    const initialValue : User = {
    id: 0,
    firstName: '',
    lastName: '',
    countryCode: '',
    companyId: 0
    };

    const [user, setUser] = useState<User>(initialValue);

    useEffect(() => {
      async function loadUser(): Promise<void> {
        const res = await fetch(`https://testapi.devtoolsdaily.com/users/${userId}`);
        const obj = await res.json();
        setUser(obj);
      }

    loadUser();
    }, [userId]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className={styles.container} key={user.id}>
      <ul>
    <li><span className={styles.text}>Name: </span>{user.firstName} {user.lastName}</li>
    <li><span className={styles.text}>Country Code: </span>{user.countryCode}</li>
    <li><span className={styles.text}>Company id: </span>{user.companyId}</li>
    <Link to="../users"> К пользователям</Link>
      </ul>
    </div>
);
}
