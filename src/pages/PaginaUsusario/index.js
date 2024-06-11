import React, { useState } from 'react';
import PostsPage from '../../components/Posts-pagUsuario/index';
import AnunciosPage from '../../components/Anuncios-pagUsuario/index';
import ProjetosPage from '../../components/Projetos-pagUsuario/index';
import styles from './PaginaUsuario.module.css';
import HeaderUser from './componentsUser/HeaderUser';
import InfosUser from './componentsUser/InfoUser';
import Footer from '../../components/Footer/index';
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


const PaginaUsuario = () => {
    const [paginaAtual, setPaginaAtual] = useState('posts'); // Inicialmente, exibir os posts

    const handleSelecionarPagina = (pagina) => {
        setPaginaAtual(pagina);
    };

    return (
        <div className={styles.container}>
            

                <InfosUser/>
        
            <div className={styles.botoes}>
                <div className={styles.botao}>
                    <button onClick={() => handleSelecionarPagina('posts')}>Posts</button>
                    <button onClick={() => handleSelecionarPagina('anuncios')}>Anúncios</button>
                    <button onClick={() => handleSelecionarPagina('projetos')}>Projetos</button>
                </div>
            </div>
            <div className={styles.conteudo}>
                {paginaAtual === 'posts' && <PostsPage />}
                {paginaAtual === 'anuncios' && <AnunciosPage />}
                {paginaAtual === 'projetos' && <ProjetosPage />}
            </div>
        </div>
    );
};

export default PaginaUsuario;
