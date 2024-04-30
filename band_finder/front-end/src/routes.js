import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroCliente from './pages/Cadastro-clientes';

function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<CadastroCliente/>} />
        </Routes>
        
        </BrowserRouter>

    )
}; 
export default AppRoutes