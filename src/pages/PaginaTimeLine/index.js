import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import styles from './TimeLine.module.css';
import Header from '../../components/Header';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '1',
        usuario_id: '123',
        nome: 'José',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 1 Descrição do Post 1 Descrição do Post 1 Descrição do Post 1 Descrição do Post 1 Descrição do Post 1 Descrição do Post 1Descrição do Post 1',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '2',
        nome: 'Maria',
        usuario_id: '456',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 2',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '3',
        usuario_id: '789',
        nome: 'Pedro',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 3',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '4',
        usuario_id: '101',
        nome: 'Ana',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 4',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '5',
        usuario_id: '102',
        nome: 'Carla',
        data: new Date().toISOString(),
        descricao: 'Descrição do Post 5',
        midia: 'https://via.placeholder.com/150'
      },
      {
        _id: '6',
        usuario_id: '103',
        nome: 'Carlos',
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
      <h1>Posts</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
