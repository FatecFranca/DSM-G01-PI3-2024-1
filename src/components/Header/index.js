import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import '../../assets/Background-Image.png';
import logo from '../../assets/logo_bandfinder.png';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Bandfinder" className={styles.logo} />

            <div className={styles.links}>
                <nav>
                    <Link to="/timeline">Time Line</Link>
                    <Link to="/usuarios">Usuários</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/anuncios">Anúncios</Link>
                </nav>
            </div>

            <div className={styles.botoes}>
                <button>
                    <Link to="/login">Login</Link>
                </button>
                <button>
                    <Link to="/cadastro">Cadastre-se</Link>
                </button>
            </div>
        </header>
    );
}

export default Header;