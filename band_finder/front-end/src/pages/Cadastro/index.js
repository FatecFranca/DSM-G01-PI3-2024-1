import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
    const [usuario, setUsuario] = useState({
        nome: '',
        cpf: '',
        data_nascimento: '',
        municipio: '',
        uf: '',
        telefone: '',
        email: '',
        habilidade: [],
        bio: '',
        influencia: [],
        foto_user: '',
        instagram: '',
        youtube: '',
        facebook: '',
        senha: '',
        objetivo: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'habilidade' || name === 'influencia' || name === 'objetivo') {
            const options = e.target.options;
            const selectedValues = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    selectedValues.push(options[i].value);
                }
            }
            setUsuario({
                ...usuario,
                [name]: selectedValues
            });
        } else {
            setUsuario({
                ...usuario,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/usuarios', usuario); // Altere o caminho da rota de acordo com sua API
            alert('Usuário cadastrado com sucesso!');
            // Limpar o formulário após o envio bem-sucedido
            setUsuario({
                nome: '',
                cpf: '',
                data_nascimento: '',
                municipio: '',
                uf: '',
                telefone: '',
                email: '',
                habilidade: [],
                bio: '',
                influencia: [],
                foto_user: '',
                instagram: '',
                youtube: '',
                facebook: '',
                senha: '',
                objetivo: []
            });
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Verifique o console para mais detalhes.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" value={usuario.nome} onChange={handleChange} placeholder="Nome" required />
            <input type="text" name="cpf" value={usuario.cpf} onChange={handleChange} placeholder="CPF" required />
            <input type="text" name="data_nascimento" value={usuario.data_nascimento} onChange={handleChange} placeholder="Data de Nascimento" required />
            <input type="text" name="municipio" value={usuario.municipio} onChange={handleChange} placeholder="Município" required />
            <input type="text" name="uf" value={usuario.uf} onChange={handleChange} placeholder="UF" required />
            <input type="tel" name="telefone" value={usuario.telefone} onChange={handleChange} placeholder="Telefone" required />
            <input type="email" name="email" value={usuario.email} onChange={handleChange} placeholder="Email" required />
            <select name="habilidade" value={usuario.habilidade} onChange={handleChange} multiple required>
                <option value="guitarra">Guitarra</option>
                <option value="violao">Violão</option>
                <option value="vocal">Vocal</option>
                <option value="back_vocal">Back Vocal</option>
                <option value="bateria">Bateria</option>
                <option value="baixo">Baixo</option>
                <option value="outro">Outro</option>
            </select>
            <textarea name="bio" value={usuario.bio} onChange={handleChange} placeholder="Biografia" required />
            <select name="influencia" value={usuario.influencia} onChange={handleChange} multiple required>
                <option value="rock">Rock</option>
                <option value="samba">Samba</option>
                <option value="pop">Pop</option>
                <option value="mpb">MPB</option>
                <option value="reggae">Reggae</option>
                <option value="metal">Metal</option>
                <option value="hiphop">Hip Hop</option>
                <option value="rap">Rap</option>
                <option value="eletronica">Eletrônica</option>
                <option value="pagode">Pagode</option>
                <option value="sertanejo">Sertanejo</option>
            </select>
            <input type="text" name="foto_user" value={usuario.foto_user} onChange={handleChange} placeholder="Foto do Usuário" />
            <input type="text" name="instagram" value={usuario.instagram} onChange={handleChange} placeholder="Instagram" />
            <input type="text" name="youtube" value={usuario.youtube} onChange={handleChange} placeholder="Youtube" />
            <input type="text" name="facebook" value={usuario.facebook} onChange={handleChange} placeholder="Facebook" />
            <select name="objetivo" value={usuario.objetivo} onChange={handleChange} multiple required>
                <option value="hobbie">Hobbie</option>
                <option value="profissional">Profissional</option>
                <option value="freelance">Freelance</option>
            </select>
            <input type="password" name="senha" value={usuario.senha} onChange={handleChange} placeholder="Senha" required />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Cadastro;
