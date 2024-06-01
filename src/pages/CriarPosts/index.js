import React, { useState } from 'react';
import axios from 'axios';
import styles from './CriarPost.module.css';

const CriarPost = ({ adicionarPost, closeModal }) => {
    const [post, setPost] = useState({
        usuario_id: '', // Ajuste conforme necessário
        data: new Date().toISOString().split('T')[0], // Captura a data atual do sistema
        texto: '',
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
            formData.append('usuario_id', post.usuario_id); // Ajuste conforme necessário
            formData.append('data', post.data);
            formData.append('texto', post.texto); // Certifique-se de que o nome está correto
            formData.append('midia', post.midia); // Adicione a foto ao FormData

            const response = await axios.post('http://localhost:3000/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Defina o cabeçalho para indicar que é um formulário de dados multipartes
                }
            });

            adicionarPost(response.data); // Adicione o novo post à lista de posts
            setPost({
                usuario_id: '',
                data: new Date().toISOString().split('T')[0], // Captura a data atual novamente
                texto: '',
                midia: null
            });
            closeModal(); // Feche o modal após a criação do post
        } catch (error) {
            console.error('Erro ao enviar post:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>POST</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <label htmlFor="texto">TEXTO:</label>
                    <textarea
                        id="texto"
                        name="texto"
                        value={post.texto}
                        onChange={handleChange}
                        placeholder=""
                        className={styles.bioTextArea}
                        required
                    />
                </div>
                <div className={styles.campo}>
                    <label htmlFor="midia">MÍDIA:</label>
                    <input
                        type="file"
                        id="midia"
                        name="midia"
                        onChange={handleMidiaChange}
                        accept="image/*"
                        required
                    />
                </div>
                <button className={styles.botao} type="submit">ENVIAR</button>
            </form>
        </div>
    );
};

export default CriarPost;

