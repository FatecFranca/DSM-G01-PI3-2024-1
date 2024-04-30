
import React, { useState } from 'react';
import './Cadastro-clientes.module.css';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente(prevCliente => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados do cliente para o servidor
    console.log('Dados do cliente:', cliente);
    // Resetar o formulário após o envio
    setCliente({
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: ''
    });
  };

  return (
    <div className="cadastro-cliente">
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={cliente.nome} onChange={handleChange} required />
        </div>
        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={cliente.email} onChange={handleChange} required />
        </div>
        <div className="campo">
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" value={cliente.telefone} onChange={handleChange} required />
        </div>
        <div className="campo">
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" value={cliente.endereco} onChange={handleChange} required />
        </div>
        <div className="campo">
          <label htmlFor="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" value={cliente.cidade} onChange={handleChange} required />
        </div>
        <div className="campo">
          <label htmlFor="estado">Estado:</label>
          <input type="text" id="estado" name="estado" value={cliente.estado} onChange={handleChange} required />
        </div>
        <div className="botao">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroCliente;
