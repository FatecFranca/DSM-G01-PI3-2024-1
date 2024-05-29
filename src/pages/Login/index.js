import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>LOGIN</h2>
            <form className={styles.formulario}>
                <div className={styles.campo}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className={styles.botao}>
                    <button type="submit">ENTRAR</button>
                </div>
                <div className={styles.botao}>
                    <Link to="/cadastro">CADASTRE-SE</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
