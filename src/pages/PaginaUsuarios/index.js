import React, { useState, useEffect } from 'react';
import UsersCard from '../../components/UsersCard';
import styles from './Usuarios.module.css';
import Header from '../../components/Header';

const UsersPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '1',
        nome: 'José',
        cidade: 'São Paulo',
        influencias: 'Rock, Jazz',
        habilidades: 'Guitarra, Bateria',
        bio: 'Músico com 10 anos de experiência.',
        data: new Date().toISOString(),
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '2',
        nome: 'Maria',
        cidade: 'Campinas',
        influencias: 'Pop, Blues',
        habilidades: 'Vocal, Piano',
        bio: 'Cantora e pianista profissional.',
        data: new Date().toISOString(),
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '3',
        nome: 'Pedro',
        cidade: 'Rio de Janeiro',
        influencias: 'Samba, MPB',
        habilidades: 'Percussão, Violão',
        bio: 'Percussionista e violonista especializado em música brasileira.',
        data: new Date().toISOString(),
        midia: 'https://via.placeholder.com/150'
      }
    ];
    
    setPosts(mockPosts);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Usuários</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <UsersCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
"PaginaUsuarios"