import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Header from '../../components/Header';
import Modal from 'react-modal';
import CadastroUsuario from '../CadastroUsuario'

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
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = () => {
    // Redireciona para a página /users ao clicar em "ENTRAR"
    navigate('/users');
  };

  return (
    <div>
      <Header />
      <br />
      <div className={styles.container}>
        <h2 className={styles.titulo}>LOGIN</h2>
        <form className={styles.formulario}>
          <div className={styles.campo}>
            <label htmlFor="email">E-MAIL:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="senha">SENHA:</label>
            <input type="password" id="senha" name="senha" required />
          </div>
          <button className={styles.botao} type="button" onClick={handleLogin}>ENTRAR</button>
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