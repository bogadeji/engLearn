import React from 'react'
import styles from './navbar.module.css';
import HomeIcon from '../../assets/icons/HomeIcon';
import Settingsicon from '../../assets/icons/SettingsIcon';
import StatIcon from '../../assets/icons/StatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={[styles.navlink, styles.home].join(' ')}>
        <NavLink to="/">
          <HomeIcon />
        </NavLink>
      </div>
      <div className={[styles.navlink, styles.stats].join(' ')}>
      <NavLink to="analytics">
        <StatIcon />
      </NavLink>
      </div>
      <div className={[styles.navlink, styles.profile].join(' ')}>
      <NavLink to="/user-profile">
        <ProfileIcon />
      </NavLink>
      </div>
      <div className={[styles.navlink, styles.settings].join(' ')}>
      <NavLink to="/settings">
      <Settingsicon />
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar