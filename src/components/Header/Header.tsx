import React from 'react';
import { Container } from '../Container';
import logo from '../../icons/logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a className={styles.link} href='/'>
            <img className={styles.logo} src={logo} alt='Logo' />
          </a>
          <ul className={styles.links}>
            <li>
              <a className={styles.link} href='/'>
                Home
              </a>
            </li>
            <li>
              <a className={styles.link} href='/'>
                About
              </a>
            </li>
            <li>
              <a className={styles.link} href='/'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
