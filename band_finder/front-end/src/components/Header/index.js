import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header(){
    return(
        <header className={styles.header}>
            <span>Band.Finder</span>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/">Home</Link>
                </nav>    

        </header>

    );
}
export default Header;