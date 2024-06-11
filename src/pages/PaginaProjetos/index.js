import React, { useState, useEffect } from 'react';
import ProjetosCard from '../../components/ProjetosCard';
import styles from './Projetos.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjetosPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '662c35fa6b0411a8f1a3bb3c',
        usuario_id: '662c2ce9e363e968531bb19d',
        nome: 'Banda Rockers',
        data: "2024-05-21T00:00:00.000Z",
        descricao: 'Banda com 5 anos de estrada, com interesse em gravar novo album autoral',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Franca',
        uf: 'SP',
        procura: 'vocal, bateria',
        objetivo: 'autoral, cover, hobbie',
        link: 'instagram.com/banda'
      },
      {
        _id: '66589e305621a584069bcc82',
        nome: 'Banda de Blues',
        usuario_id: '6657b3b6a1d206f4a711f6a1',
        data: "2024-02-29T00:00:00.000Z",
        descricao: 'Banda de blues procurando novos membros',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Porto Alegre',
        uf: 'RS',
        procura: 'guitarra',
        objetivo: 'autoral',
        link: 'instagram.com/bandablues'
      },
      {
        _id: '66589e185621a584069bcc7e',
        nome: 'Banda de Pop Rock',
        usuario_id: '6657b391a1d206f4a711f69d',
        data: "2024-02-01T00:00:00.000Z",
        descricao: 'Banda de pop rock com shows regulares',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Belo Horizonte',
        uf: 'MG',
        procura: 'bateria',
        objetivo: 'cover',
        link: 'instagram.com/bandapoprock'
      },
      {
        _id: '66589e7a5621a584069bcc8c',
        nome: 'Banda de Reggae',
        usuario_id: '662c2ce9e363e968531bb19d',
        data: "2024-08-06T00:00:00.000Z",
        descricao: 'Banda de reggae em busca de novos membros',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Franca',
        uf: 'SP',
        procura: 'teclado',
        objetivo: 'hobby',
        link: 'instagram.com/bandareggae'
      },
      {
        _id: '66589e4b5621a584069bcc86',
        nome: 'Banda de Rock Progressivo',
        usuario_id: '6657b3d2a1d206f4a711f6a5',
        data: "2024-05-21T00:00:00.000Z",
        descricao: 'Banda de rock progressivo com material próprio',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Brasília',
        uf: 'DF',
        procura: 'teclado',
        objetivo: 'autoral',
        link: 'instagram.com/rockprogressivo'
      },
      {
        _id: '66589dff5621a584069bcc7a',
        nome: 'Banda Indie',
        usuario_id: '6657b375a1d206f4a711f699',
        data: "2024-10-31T00:00:00.000Z",
        descricao: 'Banda indie buscando novos integrantes',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Campinas',
        uf: 'SP',
        procura: 'baixo',
        objetivo: 'autoral',
        link: 'instagram.com/bandaindie'
      },
      {
        _id: '66589e665621a584069bcc8a',
        nome: 'Coro Gospel',
        usuario_id: '6657b3eaa1d206f4a711f6a9',
        data: "2024-03-25T00:00:00.000Z",
        descricao: 'Coro gospel com foco em eventos religiosos',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Manaus',
        uf: 'AM',
        procura: 'piano',
        objetivo: 'freelance',
        link: 'instagram.com/corogospel'
      },
      {
        _id: '66589e575621a584069bcc88',
        nome: 'Dueto Pop',
        usuario_id: '6657b3dca1d206f4a711f6a7',
        data: "2024-05-20T00:00:00.000Z",
        descricao: 'Dueto pop com apresentações regulares',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Fortaleza',
        uf: 'CE',
        procura: 'baixo',
        objetivo: 'cover',
        link: 'instagram.com/duetopop'
      },
      {
        _id: '66589e0c5621a584069bcc7c',
        nome: 'Orquestra de Câmara',
        usuario_id: '6657b383a1d206f4a711f69b',
        data: "2024-02-18T00:00:00.000Z",
        descricao: 'Orquestra de câmara com repertório variado',
        midia: 'https://via.placeholder.com/150',
        municipio: 'São Paulo',
        uf: 'SP',
        procura: 'saxofone',
        objetivo: 'hobby',
        link: 'instagram.com/orquestradecamara'
      },
      {
        _id: '66589e3e5621a584069bcc84',
        nome: 'Projeto Acústico',
        usuario_id: '6657b3c6a1d206f4a711f6a3',
        data: "2024-06-01T00:00:00.000Z",
        descricao: 'Projeto acústico com repertório variado',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Salvador',
        uf: 'BA',
        procura: 'vocal, bateria',
        objetivo: 'hobby',
        link: 'instagram.com/projetoacustico'
      },
      {
        _id: '66589db95621a584069bcc78',
        nome: 'Quarteto de Cordas',
        usuario_id: '6657b344a1d206f4a711f697',
        data: "2024-05-03T00:00:00.000Z",
        descricao: 'Quarteto especializado em música clássica para eventos',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Ribeirão Preto',
        uf: 'SP',
        procura: 'violino',
        objetivo: 'freelance',
        link: 'instagram.com/quartetodecordas'
      },
      {
        _id: '66589e255621a584069bcc80',
        nome: 'Trio de Jazz',
        usuario_id: '6657b3a4a1d206f4a711f69f',
        data: "2024-05-11T00:00:00.000Z",
        descricao: 'Trio de jazz com foco em eventos corporativos',
        midia: 'https://via.placeholder.com/150',
        municipio: 'Curitiba',
        uf: 'PR',
        procura: 'piano',
        objetivo: 'freelance',
        link: 'instagram.com/triodejazz'
      }
      
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

        <br/>
        <br/>
       <div className={styles.footer}>
         <Footer />

        </div>

      </div>
    </div>
  );
};

export default ProjetosPage;
