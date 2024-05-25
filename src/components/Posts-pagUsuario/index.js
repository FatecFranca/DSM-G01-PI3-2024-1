import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostsPage = () => {
  // Estado para armazenar os posts
  const [posts, setPosts] = useState([]);

  // Função para carregar os posts
  const carregarPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    }
  };

  // Carregar os posts ao montar o componente
  useEffect(() => {
    carregarPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {/* Mapear os posts e exibir cada um */}
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.titulo}</h3>
            <p>{post.conteudo}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
