import React, { useState, useEffect } from 'react';
import ProjetosCard from '../../components/ProjetosCard';
import styles from './Projetos.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';

const ProjetosPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
        {
          _id: '1',
          usuario_id: '123',
          nome: 'José',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 1',
          midia: 'https://via.placeholder.com/150',
          municipio: 'São Paulo',
          uf: 'SP',
          procura: 'Investidores',
          objetivo: 'Desenvolver uma nova tecnologia',
          contato: 'jose@example.com'
        },
        {
          _id: '2',
          nome: 'Maria',
          usuario_id: '456',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 2',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Rio de Janeiro',
          uf: 'RJ',
          procura: 'Parceiros',
          objetivo: 'Expandir o negócio',
          contato: 'maria@example.com'
        },
        {
          _id: '3',
          usuario_id: '789',
          nome: 'Pedro',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 3',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Belo Horizonte',
          uf: 'MG',
          procura: 'Clientes',
          objetivo: 'Vender novos produtos',
          contato: 'pedro@example.com'
        },
        {
          _id: '4',
          usuario_id: '101',
          nome: 'Ana',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 4',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Curitiba',
          uf: 'PR',
          procura: 'Colaboradores',
          objetivo: 'Realizar um projeto social',
          contato: 'ana@example.com'
        },
        {
          _id: '5',
          usuario_id: '102',
          nome: 'Carla',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 5',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Porto Alegre',
          uf: 'RS',
          procura: 'Investidores',
          objetivo: 'Abrir uma nova filial',
          contato: 'carla@example.com'
        },
        {
          _id: '6',
          usuario_id: '103',
          nome: 'Carlos',
          data: new Date().toISOString(),
          descricao: 'Descrição do Post 6',
          midia: 'https://via.placeholder.com/150',
          municipio: 'Florianópolis',
          uf: 'SC',
          procura: 'Fornecedores',
          objetivo: 'Ampliar a rede de distribuição',
          contato: 'carlos@example.com'
        },
      ];
      
    setPosts(mockPosts);
  }, []);

  return (

    <div className={styles.container}>
        <Header/>
      <h1>PROJETOS</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <ProjetosCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ProjetosPage;
