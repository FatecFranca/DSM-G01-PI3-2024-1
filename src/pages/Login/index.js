import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import axios from 'axios';
import styles from './Login.module.css';
import Header from '../../components/Header';
import CadastroUsuario from '../CadastroUsuario';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    background: 'transparent',
    border: 'none',
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', senha: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use o useNavigate

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', loginData);
      console.log('Login bem-sucedido:', response.data);
      setErrorMessage('');
      // Redireciona para a página /users após login bem-sucedido
      navigate('/users');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Email ou senha incorretos');
    }
  };

  return (
    <div>
      <Header />
      <br />
      <div className={styles.container}>
        <h2 className={styles.titulo}>LOGIN</h2>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <div className={styles.campo}>
            <label htmlFor="email">E-MAIL:</label>
            <input type="email" id="email" name="email" value={loginData.email} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="senha">SENHA:</label>
            <input type="password" id="senha" name="senha" value={loginData.senha} onChange={handleChange} required />
          </div>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button className={styles.botao} type="submit">ENTRAR</button>
          <button className={styles.botao} type="button" onClick={openModal}>CADASTRE-SE</button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Cadastro de Usuário"
        >
          <div style={{ background: '#black', padding: '10px', borderRadius: '10px' }}>
            <button onClick={closeModal} style={{ float: 'right', background: '#22394D', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
            <CadastroUsuario />
          </div>
        </Modal>
      </div>
    </div>
  );
}


export default Login;
