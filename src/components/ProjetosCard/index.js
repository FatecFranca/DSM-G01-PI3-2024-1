import React from 'react';
import styles from './ProjetosCard.module.css';

const ProjetosCard = ({ post }) => {
  return (
    <div className={styles.card}>
           {post.midia && <img src={post.midia} alt="Midia do post" className={styles.media} />}
      <div className={styles.content}>
      <h2>Nome: {post.titulo}</h2>
      <h2>Descrição: {post.descricao}</h2>
      <h2>Procura: {Array.isArray(post.procura) ? post.procura.join(' - ') : post.procura}</h2>
      <h2>Objetivo: {Array.isArray(post.objetivo) ? post.objetivo.join(' - ') : post.objetivo}</h2>
      <h2>Estilos: {Array.isArray(post.estilo) ? post.estilo.join(' - ') : post.estilo}</h2>
      <h2>Município: {post.municipio}</h2>
        <h2>Contato: {post.link}</h2>
        <h2>UF: {post.uf}</h2>
        <p>Data: {new Date(post.data).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ProjetosCard;

