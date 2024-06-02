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
          {({ isActive }) => (
            <>
              <HomeIcon status={isActive ? 'is-active' : 'inactive'} />
            </>
          )}
        </NavLink>
      </div>
      <div className={[styles.navlink, styles.stats].join(' ')}>
        <NavLink to="analytics">
            {({ isActive }) => (
              <>
                <StatIcon status={isActive ? 'is-active' : 'inactive'} />
              </>
            )}
        </NavLink>
      </div>
      <div className={[styles.navlink, styles.profile].join(' ')}>
        <NavLink to="/user-profile">
            {({ isActive }) => (
              <>
                <ProfileIcon status={isActive ? 'is-active' : 'inactive'} />
              </>
            )}
        </NavLink>
      </div>
      <div className={[styles.navlink, styles.settings].join(' ')}>
        <NavLink to="/settings">
          {({ isActive }) => (
            <>
              <Settingsicon status={isActive ? 'is-active' : 'inactive'} />
            </>
          )}
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar