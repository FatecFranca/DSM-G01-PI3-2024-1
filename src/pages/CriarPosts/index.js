import React, { useState } from 'react';
import axios from 'axios';
import styles from './CriarPost.module.css';

const CriarPost = () => {
    const [post, setPost] = useState({
        usuario_id: '',
        data: '',
        descricao: '',
        midia: null // Inicialize midia como null para permitir a seleção de uma foto
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const handleMidiaChange = (event) => {
        const midia = event.target.files[0]; // Obtenha o arquivo de mídia (foto)
        setPost({ ...post, midia });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('usuario_id', post.usuario_id);
            formData.append('data', post.data);
            formData.append('descricao', post.descricao);
            formData.append('midia', post.midia); // Adicione a foto ao FormData

            const response = await axios.post('http://localhost:3000/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Defina o cabeçalho para indicar que é um formulário de dados multipartes
                }
            });
            console.log(response.data);
            setPost({
                usuario_id: '',
                data: '',
                descricao: '',
                midia: null
            });
        } catch (error) {
            console.error('Erro ao enviar post:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Criar Post</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <label htmlFor="usuario_id">ID do Usuário:</label>
                    <input type="text" id="usuario_id" name="usuario_id" value={post.usuario_id} onChange={handleChange} placeholder="ID do Usuário" required />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="data">Data:</label>
                    <input type="date" id="data" name="data" value={post.data} onChange={handleChange} required />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" name="descricao" value={post.descricao} onChange={handleChange} placeholder="Descrição" className={styles.bioTextArea} required />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="midia">Mídia:</label>
                    <input type="file" id="midia" name="midia" onChange={handleMidiaChange} accept="image/*" required />
                </div>
                <button className={styles.botao} type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default CriarPost;
