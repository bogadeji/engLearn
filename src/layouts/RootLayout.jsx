import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import styles from './layouts.module.css';

export default function RootLayout() {
  return (
    <div className={styles['root-layout']}>
      <NavBar />

      <main className={styles['main']}>
        <Outlet />
      </main>
    </div>
  )
}
