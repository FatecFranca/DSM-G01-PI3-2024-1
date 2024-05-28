import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import CadastroProjeto from '../../pages/CriarProjeto'; // Certifique-se de que o caminho está correto
import styles from './Projetos-pagUsuario.module.css';

Modal.setAppElement('#root'); // Isso é necessário para acessibilidade

const customStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%', // Ajuste o tamanho conforme necessário
    maxHeight: '80vh', // Limitar a altura do modal
    overflowY: 'auto', // Adicionar barra de rolagem vertical
    padding: '20px',
    borderRadius: '10px',
    background: 'transparent', // Definir fundo transparente
    border: 'none' // Remover borda
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)' // Fundo escurecido
  }
};

const ProjetosPage = () => {
  const [projetos, setProjetos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const carregarProjetos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projetos');
      setProjetos(response.data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    }
  };

  useEffect(() => {
    carregarProjetos();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const adicionarProjeto = (novoProjeto) => {
    setProjetos([...projetos, novoProjeto]);
  };

  return (
    <div className={styles.container}>
      <h1>Projetos</h1>
      <button onClick={openModal}>NOVO PROJETO</button>
      <div className={styles.projetosList}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className={styles.projetoItem}>
            <h3>{projeto.descricao}</h3>
            <p>Data: {projeto.data}</p>
            <p>Objetivo: {projeto.objetivo.join(', ')}</p>
            <p>Município: {projeto.municipio}</p>
            <p>UF: {projeto.uf}</p>
            <p>Estilo: {projeto.estilo.join(', ')}</p>
            <p>Procura: {projeto.procura.join(', ')}</p>
            {projeto.link && <p>Link: <a href={projeto.link}>{projeto.link}</a></p>}
            <hr />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Criar Novo Projeto"
      >
        <div style={{ background: 'black', padding: '20px', borderRadius: '10px' }}>
          <button onClick={closeModal} style={{ float: 'right', background: '#22394D', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
          <CadastroProjeto adicionarProjeto={adicionarProjeto} closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default ProjetosPage;
