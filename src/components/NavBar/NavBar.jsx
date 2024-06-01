import React from 'react'
import styles from './navbar.module.css';
import HomeIcon from '../../assets/icons/HomeIcon';
import Settingsicon from '../../assets/icons/SettingsIcon';
import StatIcon from '../../assets/icons/StatIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={[styles.navlink, styles.home].join(' ')}>
        <HomeIcon />
      </div>
      <div className={[styles.navlink, styles.stats].join(' ')}>
        <StatIcon />
      </div>
      <div className={[styles.navlink, styles.profile].join(' ')}>
        <ProfileIcon />
      </div>
      <div className={[styles.navlink, styles.settings].join(' ')}>
        <Settingsicon />
      </div>
    </nav>
  )
}

export default NavBar