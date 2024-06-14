import React from 'react';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      {post.midia && <img src={post.midia} alt="Midia do post" className={styles.media} />}
      <div className={styles.content}>
        <h2>{post.nome}</h2>
        <h3>{post.descricao}</h3>
        <p>{new Date(post.data).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PostCard;
