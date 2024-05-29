import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Anuncios-pagUsuario.module.css';
const AnunciosPage = () => {
  const [anuncios, setAnuncios] = useState([]);

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

  return (
    <div className={styles.container}>
      <h1>Anúncios</h1>
      <div className={styles.anunciosList}>
        {anuncios.map((anuncio) => (
          <div key={anuncio._id} className={styles.anuncioItem}>
            <h3>{anuncio.titulo}</h3>
            <p>{anuncio.descricao}</p>
            <p>Preço: R$ {anuncio.preco}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnunciosPage;
