import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InfoUser.module.css';
import Header from '../../../../components/Header';
import Modal from 'react-modal';
import CadastroUsuario from '../../../CadastroUsuario';

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

function InfoUser() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    // Redireciona para a página /login ao clicar em "logout"
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <Header />
      <br />
      <br />
      <br />
      <div className={styles.background}>
        <div className={styles.fotoContainer}>
          <img className={styles.foto} src="../../../uploads/carlos.jpg" alt="User" />
        </div>
        <div className={styles.info}>
          <div className={styles.row}>
            <h1>CARLOS PEREIRA CASTILLO</h1>
            <h1>IDADE: 33</h1>
          </div>

          <div className={styles.row}>
            <h3>CIDADE: Curitiba</h3>
            <h3>ESTADO: Paraná</h3>
          </div>

          <div className={styles.row}>
            <h3>BIO: Vivo a música desde a infância, toco violão desde então, e ao longo dos anos adquiri outras habilidades</h3>
          </div>
          <div className={styles.row}>
            <h3>HABILIDADE: Violão, Guitarra, Bateria</h3>
            <h3>INFLUÊNCIAS: MPB, Rock, Reggae</h3>
          </div>
          <div className={styles.row}>
            <h3>INSTAGRAM: @carlos_music</h3>
            <h3>FACEBOOK: carlos_pereira1991</h3>
            <h3>YOUTUBE: carlinhosmusik</h3>
          </div>
        </div>
      </div>

      <div className={styles.rowbotao}>
        <button className={styles.botao} onClick={openModal}>EDITAR</button>
        <button className={styles.botao} onClick={handleLogout}>LOGOUT</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cadastro de Usuário"
      >
        <div style={{ background: '#000', padding: '10px', borderRadius: '10px' }}>
          <button onClick={closeModal} style={{ float: 'right', background: '#22394D', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
          <CadastroUsuario />
        </div>
      </Modal>
    </div>
  );
}

export default InfoUser;
