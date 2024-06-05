import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import '../../assets/Background-Image.png';
import logo from '../../assets/logo_bandfinder.png';

function Header() {
    return (
      <div>
        <header className={styles.header}>
            <div>
              <h3>Band Finder - Todos os direitos reservados</h3>
            </div>
        </header>
        </div>
    );
}

export default Header;