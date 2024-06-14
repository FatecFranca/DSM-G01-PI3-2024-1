import React, { useState, useEffect } from 'react';
import UsersCard from '../../components/UsersCard';
import styles from './Usuarios.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UsersPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulação de carregamento de dados
    const mockPosts = [
      {
        _id: "6657b3a4a1d206f4a711f69f",
        nome: "Ana Clara Martins",
        cidade: "Curitiba",
        uf: "PR",
        influencias: "Jazz, MPB",
        habilidades: "Saxofone",
        bio: "Saxofonista de jazz e música brasileira",
        instagram: "@anasax",
        facebook: "ana.clara",
        youtube: "anasaxplayer",
        midia: '/uploads/ana.jpg'
      },
      {
        _id: "6657b3c6a1d206f4a711f6a3",
        nome: "Bruna Alves",
        cidade: "Salvador",
        uf: "BA",
        influencias: "Funk, Soul",
        habilidades: "Baixo",
        bio: "Baixista em busca de novas colaborações",
        instagram: "@brunabass",
        facebook: "bruna.alves",
        youtube: "brunabassist",
        midia: '/uploads/bruna.jpg'
      },
      {
        _id: "6657b3dca1d206f4a711f6a7",
        nome: "Camila Rocha",
        cidade: "Fortaleza",
        uf: "CE",
        influencias: "Pop, Rock",
        habilidades: "Vocal",
        bio: "Cantora com experiência em bandas de pop rock",
        instagram: "@camilarock",
        facebook: "camila.rocha",
        youtube: "camilarocha",
        midia: '/uploads/camila.jpg'
      },
      {
        _id: "6657b375a1d206f4a711f699",
        nome: "Carlos Souza",
        cidade: "Campinas",
        uf: "SP",
        influencias: "Rock, Reggae",
        habilidades: "Bateria",
        bio: "Baterista com experiência em várias bandas de rock",
        instagram: "@carlosdrums",
        facebook: "carlos.souza",
        youtube: "carlosdrummer",
        midia: '/uploads/carlos.jpg'
      },
      {
        _id: "6657b391a1d206f4a711f69d",
        nome: "Felipe Santos",
        cidade: "Belo Horizonte",
        uf: "MG",
        influencias: "Pop, Soul",
        habilidades: "Teclado, Backvocal",
        bio: "Tecladista e vocalista, pronto para novos desafios",
        instagram: "@felipemusic",
        facebook: "felipe.santos",
        youtube: "felipesantos",
        midia: '/uploads/felipe.jpg'
      },
      {
        _id: "6657b3eaa1d206f4a711f6a9",
        nome: "Gabriel Oliveira",
        cidade: "Manaus",
        uf: "AM",
        influencias: "Gospel, Soul",
        habilidades: "Teclado, Vocal",
        bio: "Tecladista e cantor com foco em música gospel",
        instagram: "@gabrielgospel",
        facebook: "gabriel.oliveira",
        youtube: "gabrieloliveira",
        midia: '/uploads/gabriel.jpg'
      },
      {
        _id: "6657b3b6a1d206f4a711f6a1",
        nome: "João Silva",
        cidade: "Porto Alegre",
        uf: "RS",
        influencias: "Blues, Rock",
        habilidades: "Guitarra, Vocal",
        bio: "Guitarrista e vocalista de banda de blues",
        instagram: "@joaoblues",
        facebook: "joao.silva",
        youtube: "joaosilvablues",
        midia: '/uploads/joao.jpg'
      },
      {
        _id: "6657b383a1d206f4a711f69b",
        nome: "Larissa Mendes",
        cidade: "São Paulo",
        uf: "SP",
        influencias: "Folk",
        habilidades: "Violino",
        bio: "Violinista clássica à procura de novos projetos",
        instagram: "@larissaviolin",
        facebook: "larissa.mendes",
        youtube: "larissaviolinist",
        midia: '/uploads/larissa.jpg'
      },
      {
        _id: "6657b344a1d206f4a711f697",
        nome: "Mariana Ferreira",
        cidade: "Ribeirão Preto",
        uf: "SP",
        influencias: "Pop, Jazz",
        habilidades: "Piano, Vocal",
        bio: "Cantora e pianista buscando novas oportunidades",
        instagram: "@mariana.music",
        facebook: "mariana.music",
        youtube: "marianamusic",
        midia: '/uploads/mariana.jpg'
      },
      {
        _id: "6657b3d2a1d206f4a711f6a5",
        nome: "Ricardo Lima",
        cidade: "Brasília",
        uf: "DF",
        influencias: "MPB",
        habilidades: "Violão",
        bio: "Violonista com foco em música brasileira",
        instagram: "@ricardoviolao",
        facebook: "ricardo.lima",
        youtube: "ricardolima",
        midia: '/uploads/ricardo.jpg'
      }
    ];
    
    setPosts(mockPosts);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>USUÁRIOS</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <UsersCard key={post._id} post={post} />
        ))}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};



export default UsersPage;