import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import styles from './TimeLine.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://bandfinder-backend-p669-git-main-allison-rodrigues-projects.vercel.app/posts');
        const data = await response.json();
        console.log('Dados recebidos:', data);

        if (Array.isArray(data)) {
          setPosts(data);
          // Fetch user data for each post
          const userIds = data.map(post => post.usuario_id);
          const uniqueUserIds = [...new Set(userIds)];
          fetchUsers(uniqueUserIds);
        } else {
          console.error('Dados recebidos não são um array:', data);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    const fetchUsers = async (userIds) => {
      try {
        const userResponses = await Promise.all(userIds.map(id => fetch(`http://localhost:3000/usuarios/${id}`)));
        const userData = await Promise.all(userResponses.map(res => res.json()));
        const userMap = userData.reduce((acc, user) => {
          acc[user._id] = user;
          return acc;
        }, {});
        setUsers(userMap);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>TIMELINE POSTS</h1>
      <div className={styles.grid}>
        {Array.isArray(posts) && posts.map((post) => (
          <PostCard key={post._id} post={post} user={users[post.usuario_id]} />
        ))}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <br />
      <br />
    </div>
  );
};

export default PostsPage;
