import React, { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard';
import styles from './TimeLine.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';


const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        "_id": "6657c07d231d488d888551ec",
        "usuario_id": "6657b383a1d206f4a711f69b",
        "nome": "César Alberto",
        "data": "2024-06-01T00:00:00.000Z",
        "descricao": "Apresentação na Sala São Paulo",
        "midia": "/uploads/orquestra_sala.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0f0231d488d8885520a",
        "usuario_id": "6657b3b6a1d206f4a711f6a1",
        "nome": "Ana Lívia",
        "data": "2024-11-25T00:00:00.000Z",
        "descricao": "Blues na noite de Porto Alegre",
        "midia": "/uploads/blues_noite.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0d2231d488d88855200",
        "usuario_id": "6657b344a1d206f4a711f697",
        "nome": "Caetano Vinicius",
        "data": "2024-06-15T00:00:00.000Z",
        "descricao": "Concerto ao ar livre",
        "midia": "/uploads/quarteto_concerto.jpg",
        "__v": 0
      },
      {
        "_id": "6657c070231d488d888551e8",
        "usuario_id": "6657b344a1d206f4a711f697",
        "nome": "Pâmela Simpliciano",
        "data": "2024-04-25T00:00:00.000Z",
        "descricao": "Ensaiando com o quarteto de cordas",
        "midia": "/uploads/quarteto_ensaio.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0d8231d488d88855202",
        "usuario_id": "6657b375a1d206f4a711f699",
        "nome": "Wesley Marcos",
        "data": "2024-07-20T00:00:00.000Z",
        "descricao": "Ensaio da banda indie",
        "midia": "/uploads/banda_ensaio.jpg",
        "__v": 0
      },
      {
        "_id": "6657c105231d488d88855212",
        "usuario_id": "6657b3eaa1d206f4a711f6a9",
        "nome": "Quitéria Maria",
        "data": "2025-03-15T00:00:00.000Z",
        "descricao": "Ensaio do coro gospel",
        "midia": "/uploads/gospel_ensaio.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0ac231d488d888551f8",
        "usuario_id": "6657b3dca1d206f4a711f6a7",
        "nome": "Carla Amaranto",
        "data": "2024-10-05T00:00:00.000Z",
        "descricao": "Ensaio do nosso dueto pop",
        "midia": "/uploads/duetopop_ensaio.jpg",
        "__v": 0
      },
      {
        "_id": "6657c093231d488d888551f0",
        "usuario_id": "6657b3a4a1d206f4a711f69f",
        "nome": "Gustavo Marcelo",
        "data": "2024-07-10T00:00:00.000Z",
        "descricao": "Ensaio para o próximo evento corporativo",
        "midia": "/uploads/jazz_ensaio.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0e4231d488d88855206",
        "usuario_id": "6657b391a1d206f4a711f69d",
        "nome": "Pedro Fontelas",
        "data": "2024-09-10T00:00:00.000Z",
        "descricao": "Gravação do clipe em Belo Horizonte",
        "midia": "/uploads/poprock_clipe.jpg",
        "__v": 0
      },
      {
        "_id": "6657c098231d488d888551f2",
        "usuario_id": "6657b3b6a1d206f4a711f6a1",
        "nome": "Luis Marcos",
        "data": "2024-08-05T00:00:00.000Z",
        "descricao": "Gravação do nosso novo álbum de blues!",
        "midia": "/uploads/blues_gravacao.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0cc231d488d888551fe",
        "usuario_id": "662c2ce9e363e968531bb19d",
        "nome": "Tulio Guimarães",
        "data": "2024-04-20T00:00:00.000Z",
        "descricao": "Nosso primeiro ensaio de reggae",
        "midia": "/uploads/reggae_ensaio.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0fa231d488d8885520e",
        "usuario_id": "6657b3d2a1d206f4a711f6a5",
        "nome": "Felipe Pereira",
        "data": "2025-01-25T00:00:00.000Z",
        "descricao": "Nova composição de rock progressivo",
        "midia": "/uploads/rockprogressivo_composicao.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0a5231d488d888551f6",
        "usuario_id": "6657b3d2a1d206f4a711f6a5",
        "nome": "Gisele Porto",
        "data": "2024-09-15T00:00:00.000Z",
        "descricao": "Nova música de rock progressivo disponível",
        "midia": "/uploads/rockprogressivo_musica.jpg",
        "__v": 0
      },
      {
        "_id": "6657c076231d488d888551ea",
        "usuario_id": "6657b375a1d206f4a711f699",
        "nome": "Tiago Ciqueira",
        "data": "2024-05-15T00:00:00.000Z",
        "descricao": "Novo single disponível nas plataformas digitais!",
        "midia": "/uploads/banda_single.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0f5231d488d8885520c",
        "usuario_id": "6657b3c6a1d206f4a711f6a3",
        "nome": "Marcelo Luis",
        "data": "2024-12-10T00:00:00.000Z",
        "descricao": "Participação em evento acústico",
        "midia": "/uploads/acustico_evento.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0dd231d488d88855204",
        "usuario_id": "6657b383a1d206f4a711f69b",
        "nome": "Cibele Moreira",
        "data": "2024-08-10T00:00:00.000Z",
        "descricao": "Participação no festival de música",
        "midia": "/uploads/orquestra_festival.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0ea231d488d88855208",
        "usuario_id": "6657b3a4a1d206f4a711f69f",
        "nome": "Amanda Giuseppe",
        "data": "2024-10-20T00:00:00.000Z",
        "descricao": "Performance no evento de jazz",
        "midia": "/uploads/jazz_evento.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0b2231d488d888551fa",
        "usuario_id": "6657b3eaa1d206f4a711f6a9",
        "nome": "Tiburcio Henrique",
        "data": "2024-11-10T00:00:00.000Z",
        "descricao": "Preparação para o próximo evento gospel",
        "midia": "/uploads/gospel_preparacao.jpg",
        "__v": 0
      },
      {
        "_id": "6657c0ff231d488d88855210",
        "usuario_id": "6657b3dca1d206f4a711f6a7",
        "nome": "Bibiana Homero",
        "data": "2025-02-05T00:00:00.000Z",
        "descricao": "Preparação para o show pop",
        "midia": "/uploads/duetopop_show.jpg",
        "__v": 0
      },
      {
        "_id": "6657c09e231d488d888551f4",
        "usuario_id": "6657b3c6a1d206f4a711f6a3",
        "nome": "Priscila Pontes",
        "data": "2024-08-25T00:00:00.000Z",
        "descricao": "Primeira apresentação do Projeto Acústico",
        "midia": "/uploads/acustico_apresentacao.jpg",
        "__v": 0
      },
      {
        "_id": "6657c10b231d488d88855214",
        "usuario_id": "662c2ce9e363e968531bb19d",
        "nome": "Jacinto Melo",
        "data": "2025-04-20T00:00:00.000Z",
        "descricao": "Show de reggae ao vivo",
        "midia": "/uploads/reggae_show.jpg",
        "__v": 0
      },
      {
        "_id": "6657c08b231d488d888551ee",
        "usuario_id": "6657b391a1d206f4a711f69d",
        "nome": "Gabriel Kimmers",
        "data": "2024-06-20T00:00:00.000Z",
        "descricao": "Show incrível em Belo Horizonte!",
        "midia": "/uploads/poprock_show.jpg",
        "__v": 0
      }
    ];
    setPosts(mockPosts);
  }, []);

  return (

    <div className={styles.container}>
        <Header/>
      <h1>POSTS TIMELINE</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
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

export default PostsPage;
