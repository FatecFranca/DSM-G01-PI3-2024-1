import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';

function Login() {
    return (
        <>
        <Header/>
        <div className='login'>
            <h2>Faça o Login no Band Finder</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Entrar</button>
                <a href="#">cadastrar-se</a>
            </form>
            
        </div>
        </>
    );
}
export default Login