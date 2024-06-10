import React, { useState, useEffect } from 'react';
import AnunciosCard from '../../components/AnunciosCard';
import styles from './Anuncios.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const AnunciosPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: '6657b78ca1d206f4a711f6b8',
        usuario_id: '6657b3c6a1d206f4a711f6a3',
        nome: 'José',
        titulo: 'Baixo Ibanez',
        valor: 'R$ 699,99',
        cidade: 'Salvador',
        data: '2024-12-15T00:00:00.000Z',
        descricao: 'Baixo Ibanez com case, usado',
        midia: '/uploads/baixo_ibanez.jpg'
      },
      {
        _id: '6657b695a1d206f4a711f6ad',
        nome: 'Maria',
        usuario_id: '6657b375a1d206f4a711f699',
        titulo: 'Guitarra Gibson Les Paul',
        valor: 'R$ 1999,99',
        cidade: 'Campinas',
        data: '2024-07-10T00:00:00.000Z',
        descricao: 'Guitarra Gibson Les Paul, pouco uso',
        midia: '/uploads/guitarra_gibson.jpg'
      },
      {
        _id: '6657b7baa1d206f4a711f6ba',
        nome: 'Pedro',
        usuario_id: '6657b3d2a1d206f4a711f6a5',
        titulo: 'Guitarra PRS Custom 24',
        valor: 'R$ 2200,00',
        cidade: 'Brasília',
        data: '2025-01-05T00:00:00.000Z',
        descricao: 'Guitarra PRS Custom 24 em perfeito estado',
        midia: '/uploads/guitarra_prs.jpg'
      },
      {
        _id: '662c35ea6b0411a8f1a3bb3a',
        nome: 'Ana',
        usuario_id: '662c2ce9e363e968531bb19d',
        titulo: 'Guitarra Strato Squier',
        valor: 'R$ 599,99',
        cidade: 'Franca',
        data: '2024-06-17T00:00:00.000Z',
        descricao: 'Guitarra Squier Preta com pickups Fender, Cordas Novas.',
        midia: '/uploads/foto_guitasquier.jpg'
      },
      {
        _id: '6657b7c6a1d206f4a711f6bc',
        nome: 'Carla',
        usuario_id: '6657b3dca1d206f4a711f6a7',
        titulo: 'Microfone AKG C414',
        valor: 'R$ 1500,00',
        cidade: 'Fortaleza',
        data: '2025-01-20T00:00:00.000Z',
        descricao: 'Microfone AKG C414 em excelente estado',
        midia: '/uploads/microfone_akg.jpg'
      },
      {
        _id: '6657b770a1d206f4a711f6b4',
        nome: 'Fernando',
        usuario_id: '6657b3a4a1d206f4a711f69f',
        titulo: 'Saxofone Yamaha',
        valor: 'R$ 1800,00',
        cidade: 'Curitiba',
        data: '2024-10-10T00:00:00.000Z',
        descricao: 'Saxofone Yamaha em excelente condição',
        midia: '/uploads/saxofone_yamaha.jpg'
      },
      {
        _id: '6657b75fa1d206f4a711f6b2',
        nome: 'Alice',
        usuario_id: '6657b391a1d206f4a711f69d',
        titulo: 'Sintetizador Roland',
        valor: 'R$ 1500,00',
        cidade: 'Belo Horizonte',
        data: '2024-09-01T00:00:00.000Z',
        descricao: 'Sintetizador Roland com diversos efeitos',
        midia: '/uploads/sintetizador_roland.jpg'
      },
      {
        _id: '6657b74fa1d206f4a711f6b0',
        nome: 'Mariana',
        usuario_id: '6657b383a1d206f4a711f69b',
        titulo: 'Violino Stradivarius',
        valor: 'R$ 2500,00',
        cidade: 'São Paulo',
        data: '2024-08-05T00:00:00.000Z',
        descricao: 'Violino Stradivarius em perfeito estado',
        midia: '/uploads/violino_stradivarius.jpg'
        },
        {
        _id: '6657b780a1d206f4a711f6b6',
        nome: 'Lucas',
        usuario_id: '6657b3b6a1d206f4a711f6a1',
        titulo: 'Violão Clássico Giannini',
        valor: 'R$ 499,99',
        cidade: 'Porto Alegre',
        data: '2024-11-05T00:00:00.000Z',
        descricao: 'Violão Clássico Giannini, usado, ótimo som',
        midia: '/uploads/violao_giannini.jpg'
        },
    ];
    setPosts(mockPosts);
  }, []);

  return (

    <div className={styles.container}>
        <Header/>
      <h1>ANÚNCIOS</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <AnunciosCard key={post._id} post={post} />
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

export default AnunciosPage;