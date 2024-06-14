import React, { useState, useEffect } from 'react';
import UsersCard from '../../components/UsersCard';
import styles from './Usuarios.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UsersPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://bandfinder-backend-p669-git-main-allison-rodrigues-projects.vercel.app/usuarios');
        const data = await response.json();
        console.log('Dados recebidos:', data); // Verifique os dados recebidos
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };
  
    fetchPosts();
  }, []);



  return (
    <div className={styles.container}>
      <Header />
      <h1>USUÁRIOS</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <UsersCard key={post._id} post={post} />
        ))}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <br/>
      <br/>
    </div>
  );
};


export default UsersPage;
