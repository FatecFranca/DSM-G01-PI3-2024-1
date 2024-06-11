import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import CadastroProjeto from '../../pages/CriarProjeto'; // Certifique-se de que o caminho está correto
import styles from './Projetos-pagUsuario.module.css';
import ProjetosCard from '../ProjetosCard';

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
    border: 'none', // Remover borda
    zIndex: '9999' // Definir um alto z-index
    
  },
  overlay: {
    zIndex: '9999', // Definir um alto z-index
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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
        {
          _id: '66589e7a5621a584069bcc8c',
          nome: 'Banda de Reggae',
          usuario_id: '662c2ce9e363e968531bb19d',
          data: "2024-08-06T00:00:00.000Z",
          descricao: 'Banda de reggae em busca de novos membros',
          midia: 'uploads/reggae_ensaio.jpg',
          municipio: 'Curitiba',
          uf: 'Paraná',
          procura: 'teclado',
          objetivo: 'hobby',
          contato: 'instagram.com/reggaeroots'
        }
        
      ];
      
    setPosts(mockPosts);
  }, []);


  return (
    <div className={styles.container}>
    <button className={styles.botao} onClick={openModal}>NOVO PROJETO</button>
      <div className={styles.projetosList}>
      <div className={styles.container}>
      <h1>PROJETOS</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <ProjetosCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Criar Novo Projeto"
      >
        <div style={{ background: '#BLACK', padding: '20px', borderRadius: '10px' }}>
          <button onClick={closeModal} style={{ float: 'right', background: '#22394D', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
          <CadastroProjeto adicionarProjeto={adicionarProjeto} closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default ProjetosPage;
