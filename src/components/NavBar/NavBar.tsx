import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
  return (
// eslint-disable-next-line react/react-in-jsx-scope
<nav className={styles.container}>
 <NavLink to="pet" className={styles.link}>
    Pet
 </NavLink>
 <NavLink to="pizza" className={styles.link}>
    Pizza
 </NavLink>
 <NavLink to="randomActivity" className={styles.link}>
    RandomActivity
 </NavLink>
 <NavLink to="users" className={styles.link}>
    Users
 </NavLink>
 <NavLink to="/" className={styles.link}> Home </NavLink>
</nav>
  );
}
