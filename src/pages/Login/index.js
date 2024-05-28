import React, { useState } from 'react';
import styles from './Login.module.css';
import Header from '../../components/Header'; // Importe o componente Header
import CadastroUsuario from '../CadastroUsuario'; // Importe o componente CadastroUsuario
import Modal from 'react-modal'; // Importe o componente Modal

Modal.setAppElement('#root'); // Isso é necessário para acessibilidade

const customStyles = {
  content: {
    top: '65%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    background: 'transparent', // Definir fundo transparente
    border: 'none' // Remover borda
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)' // Fundo escurecido
  }
};

function Login() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <Header /> {/* Renderize o componente Header aqui */}
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
