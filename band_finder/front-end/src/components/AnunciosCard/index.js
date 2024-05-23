import React from 'react';
import styles from './AnunciosCard.module.css';

const AnunciosCard = ({ post }) => {
  return (
    <div className={styles.card}>
        <div className={styles.content1}>
            <h2>{post.titulo}</h2>
            <h2> {post.valor}</h2>
        </div>    

      {post.midia && <img src={post.midia} alt="Midia do post" className={styles.media} />}
      <div className={styles.content}>
        <h3>{post.descricao}</h3>
        <h2>{post.nome}</h2> 
        <h2>{post.cidade}</h2>      
        <p>{new Date(post.data).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default AnunciosCard;
