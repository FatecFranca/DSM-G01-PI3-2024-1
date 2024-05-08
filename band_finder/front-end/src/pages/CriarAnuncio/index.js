import React, { useState } from 'react';
import axios from 'axios';
import styles from './CriarAnuncio.module.css';
const CriarAnuncio = () =>{
    const [venda, setVenda] = useState({
        titulo: '',
        usuario_id: '',
        data: '',
        descricao: '',
        municipio: '',
        uf: '',
        preco: '',
        midia: null // Inicialize midia como null para permitir a seleção de uma foto
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setVenda({ ...venda, [name]: value });
    };

    const handleMidiaChange = (event) => {
        const midia = event.target.files[0]; // Obtenha o arquivo de mídia (foto)
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
            formData.append('midia', venda.midia); // Adicione a foto ao FormData

            const response = await axios.post('http://localhost:3000/vendas', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Defina o cabeçalho para indicar que é um formulário de dados multipartes
                }
            });
            console.log(response.data);
            setVenda({ // Limpe o estado do formulário após o envio bem-sucedido
                titulo: '',
                usuario_id: '',
                data: '',
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
        <h2 className={styles.titulo}>Criar Anúncio</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="titulo" value={venda.titulo} onChange={handleChange} placeholder="Título" required />
            <input type="text" name="usuario_id" value={venda.usuario_id} onChange={handleChange} placeholder="ID do Usuário" required />
            <input type="date" name="data" value={venda.data} onChange={handleChange} required />
            <textarea name="descricao" value={venda.descricao} onChange={handleChange} placeholder="Descrição" />
            <input type="text" name="municipio" value={venda.municipio} onChange={handleChange} placeholder="Município" required />
            <input type="text" name="uf" value={venda.uf} onChange={handleChange} placeholder="UF" required />
            <input type="number" name="preco" value={venda.preco} onChange={handleChange} placeholder="Preço" required />
            <input type="file" name="midia" onChange={handleMidiaChange} accept="image/*" required /> {/* Campo de entrada para a foto */}
            <button type="submit">Salvar</button>
        </form>
        </div>
       
       
    );
};

export default CriarAnuncio;
