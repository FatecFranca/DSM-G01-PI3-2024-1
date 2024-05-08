import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroCliente from './pages/Cadastro-clientes';
import CriarAnuncio from './pages/CriarAnuncio'

function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<CadastroCliente/>} />
            <Route path="/vendas" element={<CriarAnuncio/>} />
        </Routes>
        
        </BrowserRouter>

    )
}; 
export default AppRoutes