import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Criar Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="usuario_id" value={post.usuario_id} onChange={handleChange} placeholder="ID do Usuário" required />
                <input type="date" name="data" value={post.data} onChange={handleChange} required />
                <textarea name="descricao" value={post.descricao} onChange={handleChange} placeholder="Descrição" required />
                <input type="file" name="midia" onChange={handleMidiaChange} accept="image/*" required /> {/* Campo de entrada para a foto */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default CriarPost;
