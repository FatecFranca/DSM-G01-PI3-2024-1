import React, { useState, useEffect } from 'react';
import AnunciosCard from '../../components/AnunciosCard';
import styles from './Anuncios.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const ProjetosPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://bandfinder-backend-p669-git-main-allison-rodrigues-projects.vercel.app/anuncios');
        const data = await response.json();
        console.log('Dados recebidos:', data); // Verifique os dados recebidos
  
        // Verifique se `data` é um array
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Dados recebidos não são um array:', data);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };
  
    fetchPosts();
  }, []);
  
  
  useEffect(() => {
    console.log('Estado posts:', posts); // Verifique o estado posts
  }, [posts]);
  

  return (
    <div className={styles.container}>
      <Header />
      <h1>ANÚNCIOS</h1>
      <div className={styles.grid}>
        {Array.isArray(posts) && posts.map((post) => (
          <AnunciosCard key={post._id} post={post} />
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

export default ProjetosPage;


