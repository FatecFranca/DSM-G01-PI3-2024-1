import React, { useState } from 'react';
import styles from './CriarProjeto.module.css';

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

const objetivosOptions = [
  "Profissional", "Hobbie", "Cover", "Autoral", "Freelance"
];

const CadastroProjeto = () => {
  const [projeto, setProjeto] = useState({
    titulo: '',
    descricao: '',
    objetivos: [],
    municipio: '',
    uf: '',
    influencias: [],
    procura: [],
    link: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setProjeto(prevProjeto => ({
        ...prevProjeto,
        [name]: checked ? [...prevProjeto[name], value] : prevProjeto[name].filter(v => v !== value)
      }));
    } else {
      setProjeto(prevProjeto => ({
        ...prevProjeto,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do projeto:', projeto);
    setErrorMessage('');
    setProjeto({
      titulo: '',
      descricao: '',
      objetivos: [],
      municipio: '',
      uf: '',
      influencias: [],
      procura: [],
      link: ''
    });
  };

  return (
    <div className={styles.cadastroProjeto}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.campo}>
            <h2>- DADOS DO PROJETO -</h2>
            <label htmlFor="titulo">TÍTULO:</label>
            <input type="text" id="titulo" name="titulo" value={projeto.titulo} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="descricao">DESCRIÇÃO:</label>
            <textarea id="descricao" name="descricao" value={projeto.descricao} onChange={handleChange} required className={styles.descricaoTextArea} />
          </div>
          <div className={styles.campo}>
            <label>OBJETIVOS:</label>
            <div className={styles.checkboxContainer}>
              {objetivosOptions.map(objetivo => (
                <div key={objetivo} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={objetivo}
                    name="objetivos"
                    value={objetivo}
                    checked={projeto.objetivos.includes(objetivo)}
                    onChange={handleChange}
                  />
                  <label htmlFor={objetivo}>{objetivo}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.campo}>
            <label htmlFor="municipio">MUNICÍPIO:</label>
            <input type="text" id="municipio" name="municipio" value={projeto.municipio} onChange={handleChange} required />
          </div>
          <div className={styles.campo}>
            <label htmlFor="uf">ESTADO:</label>
            <select id="uf" name="uf" value={projeto.uf} onChange={handleChange} required>
              <option value="">Selecione</option>
              {estadosBrasil.map(estado => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>
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
                    checked={projeto.influencias.includes(influencia)}
                    onChange={handleChange}
                  />
                  <label htmlFor={influencia}>{influencia}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.campo}>
            <label>PROCURA:</label>
            <div className={styles.checkboxContainer}>
              {habilidadesOptions.map(habilidade => (
                <div key={habilidade} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    id={habilidade}
                    name="procura"
                    value={habilidade}
                    checked={projeto.procura.includes(habilidade)}
                    onChange={handleChange}
                  />
                  <label htmlFor={habilidade}>{habilidade}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.campo}>
            <label htmlFor="link">LINK:</label>
            <input type="text" id="link" name="link" value={projeto.link} onChange={handleChange} required />
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

export default CadastroProjeto;
