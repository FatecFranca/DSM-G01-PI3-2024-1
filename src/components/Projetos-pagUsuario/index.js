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
          _id: '1',
          usuario_id: '123',
          nome: 'José',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 1',
          midia: 'https://via.placeholder.com/150',
          municipio: 'São Paulo',
          uf: 'SP',
          procura: 'Investidores',
          objetivo: 'Desenvolver uma nova tecnologia',
          contato: 'jose@example.com'
        },
        {
          _id: '2',
          nome: 'Maria',
          usuario_id: '456',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 2',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Rio de Janeiro',
          uf: 'RJ',
          procura: 'Parceiros',
          objetivo: 'Expandir o negócio',
          contato: 'maria@example.com'
        },
        {
          _id: '3',
          usuario_id: '789',
          nome: 'Pedro',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 3',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Belo Horizonte',
          uf: 'MG',
          procura: 'Clientes',
          objetivo: 'Vender novos produtos',
          contato: 'pedro@example.com'
        },
        {
          _id: '4',
          usuario_id: '101',
          nome: 'Ana',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 4',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Curitiba',
          uf: 'PR',
          procura: 'Colaboradores',
          objetivo: 'Realizar um projeto social',
          contato: 'ana@example.com'
        },
        {
          _id: '5',
          usuario_id: '102',
          nome: 'Carla',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 5',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Porto Alegre',
          uf: 'RS',
          procura: 'Investidores',
          objetivo: 'Abrir uma nova filial',
          contato: 'carla@example.com'
        },
        {
          _id: '6',
          usuario_id: '103',
          nome: 'Carlos',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 6',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Florianópolis',
          uf: 'SC',
          procura: 'Fornecedores',
          objetivo: 'Ampliar a rede de distribuição',
          contato: 'carlos@example.com'
        },
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
