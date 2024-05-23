import React, { useState, useEffect } from 'react';
import AnunciosCard from '../../components/AnunciosCard';
import styles from './Anuncios.module.css';
import Header from '../../components/Header';

const AnunciosPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '1',
        usuario_id: '123',
        nome: 'José',
        titulo: 'guitarra',
        valor: 'R$ 1000,00',
        cidade: 'São Paulo',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 1',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '2',
        nome: 'Maria',
        usuario_id: '456',
        titulo: 'bateria',
        cidade: 'Campinas',
        valor: 'R$ 2000,00',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 2',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '3',
        usuario_id: '789',
        titulo: 'saxofone',
        valor: 'R$ 3000,00',
        cidade: 'Rio de Janeiro',
        nome: 'Pedro',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 3',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '4',
        usuario_id: '101',
        titulo: 'violão',
        valor: 'R$ 4000,00',
        cidae: 'Belo Horizonte',
        nome: 'Ana',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 4',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '5',
        usuario_id: '102',
        titulo: 'bateria',
        valor: 'R$ 5000,00',
        nome: 'Carla',
        cidade: 'Porto Alegre',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 5',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '6',
        usuario_id: '103',
        titulo: 'saxofone',
        valor: 'R$ 6000,00',
        nome: 'Carlos',
        cidade: 'Florianópolis',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 6',
        midia: 'https://via.placeholder.com/150'
      },
    ];
    setPosts(mockPosts);
  }, []);

  return (

    <div className={styles.container}>
        <Header/>
      <h1>Anuncios</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <AnunciosCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AnunciosPage;
