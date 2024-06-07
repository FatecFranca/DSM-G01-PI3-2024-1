import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import '../../assets/Background-Image.png';


function Footer() {
    return (
      <div>
        <header className={styles.footer}>
            <div>
              <h3>Band Finder - Todos os direitos reservados</h3>
            </div>
        </header>
        </div>
    );
}

export default Footer;