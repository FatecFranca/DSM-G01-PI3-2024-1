import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import '../../assets/Background-Image.png';
function Header(){
    return(
        <header className={styles.header}>
            
            <img src="Background-image.png">
            </img>
            
            <div className={styles.links}>
                <nav>
                    <a href="#">O que é</a>
                    <a href="#">Nossos Usuários</a>
                    <a href="#">Contatos</a>
                </nav>    

            </div>

            <div className={styles.botoes}>
                <button >
                    <a Link to="/login">Login</a>
                </button>
                <button>
                    <a Link to="/cadastro">Cadastre-se</a>
                </button>
            </div>
            
       

          
                
        </header>

    );
}
export default Header;

