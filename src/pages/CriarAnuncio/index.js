import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CriarAnuncio.module.css';

const estadosBrasil = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const CriarAnuncio = () => {
  const [venda, setVenda] = useState({
    titulo: '',
    usuario_id: '',
    data: new Date().toISOString().slice(0, 10), // Define a data atual no formato 'YYYY-MM-DD'
    descricao: '',
    municipio: '',
    uf: '',
    preco: '',
    midia: null
  });

  // Define o ID do usuário logado ao montar o componente
  useEffect(() => {
    const usuarioId = localStorage.getItem('usuario_id');
    if (usuarioId) {
      setVenda(prevVenda => ({ ...prevVenda, usuario_id: usuarioId }));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVenda({ ...venda, [name]: value });
  };

  const handleMidiaChange = (event) => {
    const midia = event.target.files[0];
    setVenda({ ...venda, midia });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('titulo', venda.titulo);
      formData.append('usuario_id', venda.usuario_id);
      formData.append('data', venda.data);
      formData.append('descricao', venda.descricao);
      formData.append('municipio', venda.municipio);
      formData.append('uf', venda.uf);
      formData.append('preco', venda.preco);
      formData.append('midia', venda.midia);

      const response = await axios.post('http://localhost:3000/vendas', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setVenda({
        titulo: '',
        usuario_id: '',
        data: new Date().toISOString().slice(0, 10),
        descricao: '',
        municipio: '',
        uf: '',
        preco: '',
        midia: null
      });
    } catch (error) {
      console.error('Erro ao enviar venda:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.titulo}>ANÚNCIO</h2>
        <div className={styles.campo}>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" value={venda.titulo} onChange={handleChange} required />
        </div>
        <div className={styles.campo}>
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" value={venda.descricao} onChange={handleChange} required />
        </div>

        <div className={styles.campo}>
          <label htmlFor="preco">Preço:</label>
          <input type="number" id="preco" name="preco" value={venda.preco} onChange={handleChange} required />
        </div>
        <div className={styles.campo}>
          <label htmlFor="midia">Mídia:</label>
          <input type="file" id="midia" name="midia" onChange={handleMidiaChange} accept="image/*" required />
        </div>
        <div className={styles.botao}>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default CriarAnuncio;

