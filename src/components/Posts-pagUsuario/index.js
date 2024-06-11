import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import CriarPost from '../../pages/CriarPosts'; // Certifique-se de que o caminho está correto
import styles from './Posts-pagUsuario.module.css'
import PostCard from '../PostCard';

Modal.setAppElement('#root'); // Isso é necessário para acessibilidade

const customStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%', // Ajuste o tamanho conforme necessário
    padding: '10px',
    borderRadius: '10px',
    background: 'transparent', // Definir fundo transparente
    border: 'none' // Remover borda
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)' // Fundo escurecido
  }
};

const PostsPage = () => {
  // Estado para armazenar os posts
  const [posts, setPosts] = useState([]);
  
  // Estado para controlar a visibilidade do modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Função para carregar os posts
  const carregarPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    }
  };

  // Carregar os posts ao montar o componente
  useEffect(() => {
    carregarPosts();
  }, []);

  // Função para abrir o modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Função para adicionar um novo post à lista
  const adicionarPost = (novoPost) => {
    setPosts([...posts, novoPost]);
  };

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '1',
        usuario_id: '123',
        nome: 'Carlos Pereira Castillo',
        data: new Date().toISOString(),
        descricao: 'Terceiro ensaio, aumentando o repertório pouco a pouco, todos mandando muito bem! Em Breve showzinho no ReggaeHouse',
        midia: 'uploads/reggae_ensaio.jpg'
      }
    ];
    setPosts(mockPosts);
  }, []);


  return (
    <div>
      <button className={styles.botao} onClick={openModal}>NOVO POST</button>
      <h1>POSTS</h1>
      
      
        {/* Mapear os posts e exibir cada um */}
       
        <div className={styles.container}>
        <div className={styles.grid}>
            {posts.map((post) => (
            <PostCard key={post._id} post={post} />
            ))}
        
    </div>
  );
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Criar Novo Post">
        <div style={{ background: '#BLACK', padding: '20px', borderRadius: '10px' }}>
          <button onClick={closeModal} style={{ float: 'right', background: '#22394D', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
          <CriarPost adicionarPost={adicionarPost} closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default PostsPage;