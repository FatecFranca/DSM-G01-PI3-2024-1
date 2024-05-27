import React from 'react';
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>LOGIN</h2>
            <form className={styles.formulario}>
                <div className={styles.campo}>
                    <label htmlFor="email">E-MAIL:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="senha">SENHA:</label>
                    <input type="senha" id="senha" name="senha" required />
                </div>
                <button className={styles.botao} type="submit">ENTRAR</button>
                <button className={styles.botao} type="submit">CADASTRE-SE</button>
            </form>
        </div>
    );
}

export default Login;
