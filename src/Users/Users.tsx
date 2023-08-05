/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import User from './types/User';
import styles from './UserPage.module.css';

export default function Users():JSX.Element {
    const [users, setUsers] = useState<User[]>([]);

    async function loadUsers(): Promise<void> {
        const res = await fetch('https://testapi.devtoolsdaily.com/users');
        const arr = await res.json();
        setUsers(arr);
      }
      useEffect(() => {
        loadUsers();
      }, []);
      return (
        <div>
          <ul>
            {users.map((user) => (
              <li className={styles.container} key={user.id}>
                <div><span className={styles.text}>Name: </span>
                <span>{user.firstName} {user.lastName}</span>
                </div>
                <div><span className={styles.text}>Country Code:</span>
                <span>{user.countryCode}</span>
                </div>
                <div><span className={styles.text}>company Id: </span>
                <span>{user.companyId}</span>
                </div>
                <Link to={String(user.id)}>К пользователю</Link>
              </li>
            )
            )}
          </ul>
        </div>
      );
    }
