import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './Login.module.css';

function Login() {
    return (
        <>
        <div className={styles.login}>
            <h2>Faça o Login no Band Finder</h2>
            <div className={styles.container}>
                <form className={styles.formulario}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" required />
                    <br></br>
                    <button type="submit">Entrar</button>
                    <a href="#">cadastrar-se</a>
                </form>
            </div>
        </div>
        </>
    );
}
export default Login