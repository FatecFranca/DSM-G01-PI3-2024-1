import React, { useState } from 'react';
import styles from './Cadastro-usuario.module.css';

const estadosBrasil = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const influenciasOptions = [
  "Rock", "Pop", "Eletrônica", "Samba", "Reggae", "MPB", "Clássica", "Gospel",
  "Forró", "Axé", "Sertanejo", "Hip Hop", "Rap", "Outros"
];

const habilidadesOptions = [
  "Baixo", "Guitarra", "Violão", "Bateria", "Vocal", "Backvocal", "Percussão",
  "Teclado", "Violino", "Viola", "Saxofone", "Outros"
];

const CadastroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    cpf: '',
    data_nascimento: '',
    municipio: '',
    uf: '',
    foto_user: '',
    bio: '',
    influencias: [],
    habilidades: [],
    telefone: '',
    instagram: '',
    facebook: '',
    youtube: '',
    email: '',
    senha: '',
    confirmSenha: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setUsuario(prevUsuario => ({
        ...prevUsuario,
        [name]: checked ? [...prevUsuario[name], value] : prevUsuario[name].filter(v => v !== value)
      }));
    } else {
      setUsuario(prevUsuario => ({
        ...prevUsuario,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.senha !== usuario.confirmSenha) {
      setErrorMessage('Senhas não conferem');
      return;
    }
    console.log('Dados do usuário:', usuario);
    setErrorMessage('');
    setUsuario({
      nome: '',
      cpf: '',
      data_nascimento: '',
      municipio: '',
      uf: '',
      foto_user: '',
      bio: '',
      influencias: [],
      habilidades: [],
      telefone: '',
      instagram: '',
      facebook: '',
      youtube: '',
      email: '',
      senha: '',
      confirmSenha: ''
    });
  };

  return (
    <div className={styles.cadastroUsuario}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.campo}>
            <h2>           - DADOS PESSOAIS -</h2>
            <label htmlFor="nome">NOME:</label>
            <input type="text" id="nome" name="nome" value={usuario.nome} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" value={usuario.cpf} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="data_nascimento">DATA DE NASCIMENTO:</label>
            <input type="date" id="data_nascimento" name="data_nascimento" value={usuario.data_nascimento} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="municipio">MUNICÍPIO:</label>
            <input type="text" id="municipio" name="municipio" value={usuario.municipio} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="uf">ESTADO:</label>
            <select id="uf" name="uf" value={usuario.uf} onChange={handleChange} required>
              <option value="">Selecione</option>
              {estadosBrasil.map(estado => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>
          </div>
          <div className={styles.campo}>
            <label htmlFor="foto_user">FOTO DE PERFIL:</label>
            <input type="file" id="foto_user" name="foto_user" onChange={handleFileChange} required />
          </div>
          <br />
          <hr />
          <h2>- INFOS MUSICAIS -</h2>
          <div className={styles.campo}>
            <label htmlFor="bio">BIO:</label>
            <textarea id="bio" name="bio" value={usuario.bio} onChange={handleChange} required className={styles.bioTextArea} />
          </div>
          <div className={styles.campo}>
            <label>INFLUÊNCIAS:</label>
            <div className={styles.checkboxContainer}>
              {influenciasOptions.map(influencia => (
                <div key={influencia} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={influencia}
                    name="influencias"
                    value={influencia}
                    checked={usuario.influencias.includes(influencia)}
                    onChange={handleChange}
                  />
                  <label htmlFor={influencia}>{influencia}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.campo}>
            <label>HABILIDADES:</label>
            <div className={styles.checkboxContainer}>
              {habilidadesOptions.map(habilidade => (
                <div key={habilidade} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={habilidade}
                    name="habilidades"
                    value={habilidade}
                    checked={usuario.habilidades.includes(habilidade)}
                    onChange={handleChange}
                  />
                  <label htmlFor={habilidade}>{habilidade}</label>
                </div>
              ))}
            </div>
          </div>
          <br />
          <hr />
          <h2>- CONTATOS -</h2>
          <div className={styles.campo}>
            <label htmlFor="telefone">TELEFONE:</label>
            <input type="text" id="telefone" name="telefone" value={usuario.telefone} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="instagram">INSTAGRAM:</label>
            <input type="text" id="instagram" name="instagram" value={usuario.instagram} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="facebook">FACEBOOK:</label>
            <input type="text" id="facebook" name="facebook" value={usuario.facebook} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="youtube">YOUTUBE:</label>
            <input type="text" id="youtube" name="youtube" value={usuario.youtube} onChange={handleChange} required />
          </div>
          <br />
          <hr />
          <h2>- CADASTRO -</h2>
          <div className={styles.campo}>
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" value={usuario.email} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="senha">SENHA:</label>
            <input type="password" id="senha" name="senha" value={usuario.senha} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="confirmSenha">CONFIRMAR SENHA:</label>
            <input type="password" id="confirmSenha" name="confirmSenha" value={usuario.confirmSenha} onChange={handleChange} required />
          </div>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <div className={styles.botao}>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroUsuario;

