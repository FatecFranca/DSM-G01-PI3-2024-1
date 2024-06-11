import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import CriarAnuncio from '../../pages/CriarAnuncio'; // Certifique-se de que o caminho está correto
import styles from './Anuncios-pagUsuario.module.css';
import AnunciosCard from '../AnunciosCard';


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

const AnunciosPage = () => {
  const [anuncios, setAnuncios] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const carregarAnuncios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/anuncios'); // Ajuste a URL conforme necessário
      setAnuncios(response.data);
    } catch (error) {
      console.error('Erro ao carregar anúncios:', error);
    }
  };

  useEffect(() => {
    carregarAnuncios();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const adicionarAnuncio = (novoAnuncio) => {
    setAnuncios([...anuncios, novoAnuncio]);
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '1',
        usuario_id: '123',
        nome: 'Carlos Pereira',
        titulo: 'Guitarra PRS',
        valor: 'R$ 1500,00',
        cidade: 'Curitiba',
        data: new Date().toISOString(),
        descricao: 'Guitarra pouco usada, regulada e com cordas novas.',
        midia: 'uploads/guitarra_prs.jpg'
      }
      
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <div className={styles.container}>
    <button className={styles.botao} onClick={openModal}>NOVO ANÚNCIO</button>
      <h1>ANÚNCIOS</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <AnunciosCard key={post._id} post={post} />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Criar Novo Anúncio"
      >
        <div style={{ background: '#BLACK', borderRadius: '10px' }}>
          <button onClick={closeModal} style={{ float: 'right', background: '#22394D', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
          <CriarAnuncio adicionarAnuncio={adicionarAnuncio} closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );


};

export default AnunciosPage;