import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import '../../assets/Background-Image.png';
import logo from '../../assets/logo_bandfinder.png';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo Bandfinder" className={styles.logo} />
            </Link>


            <div className={styles.links}>
                <nav>
                    <Link to="/timeline">TIMELINE</Link>
                    <Link to="/usuarios">USUÁRIOS</Link>
                    <Link to="/projetos">PROJETOS</Link>
                    <Link to="/anuncios">ANÚNCIOS</Link>
                </nav>
            </div>

            <div>
                <button className={styles.botao}>
                    <Link to="/login">LOGIN</Link>
                </button>
            </div>
        </header>
    );
}

export default Header;