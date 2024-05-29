import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Projetos-pagUsuario.module.css';

const ProjetosPage = () => {
  // Estado para armazenar os projetos
  const [projetos, setProjetos] = useState([]);

  // Função para carregar os projetos
  const carregarProjetos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projetos');
      setProjetos(response.data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    }
  };

  // Carregar os projetos ao montar o componente
  useEffect(() => {
    carregarProjetos();
  }, []);

  return (
    <div>
      <h1>Projetos</h1>
      <p>Nesta página voce pode ver todos os seus projetos</p>
      <div>
        {/* Mapear os projetos e exibir cada um */}
        {projetos.map((projeto) => (
          <div key={projeto.id}>
            <h3>{projeto.descricao}</h3>
            <p>Data: {projeto.data}</p>
            <p>Objetivo: {projeto.objetivo.join(', ')}</p>
            <p>Município: {projeto.municipio}</p>
            <p>UF: {projeto.uf}</p>
            <p>Estilo: {projeto.estilo.join(', ')}</p>
            <p>Procura: {projeto.procura.join(', ')}</p>
            {projeto.link && <p>Link: <a href={projeto.link}>{projeto.link}</a></p>}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetosPage;
