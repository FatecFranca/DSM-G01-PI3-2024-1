import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderUser.module.css';
import '../../../../assets/Background-Image.png';
function HeaderUser(){
    return(
        <div className={styles.header}>
            
            <img className={styles.imagem} src="Background-image.png">
            </img>
        

            <div className={styles.botoes}>
                <button >
                    <a Link to="/login">Time-Line</a>
                </button>
                <button>
                    <a Link to="/Home">Sair</a>
                </button>
            </div>
            
       

          
                
        </div>

    );
}
export default HeaderUser;

