import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnunciosPage = () => {
  // Estado para armazenar os anúncios
  const [anuncios, setAnuncios] = useState([]);

  // Função para carregar os anúncios
  const carregarAnuncios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/anuncios');
      setAnuncios(response.data);
    } catch (error) {
      console.error('Erro ao carregar anúncios:', error);
    }
  };

  // Carregar os anúncios ao montar o componente
  useEffect(() => {
    carregarAnuncios();
  }, []);

  return (
    <div>
      <h1>Anúncios</h1>
      <div>
        {/* Mapear os anúncios e exibir cada um */}
        {anuncios.map((anuncio) => (
          <div key={anuncio.id}>
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
