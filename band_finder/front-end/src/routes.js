import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import TimeLine from './pages/TimeLine';
import Usuarios from './pages/Usuarios';
import Projetos from './pages/Projetos';
import Anuncios from './pages/Anuncios';
import CadastroUsuario from './pages/CadastroUsuario';
import CriarAnuncio from './pages/CriarAnuncio'
import CriarPost from './pages/CriarPosts';
import PaginaUsuario from './pages/PaginaUsusario';
import DataFetcher from './pages/DataFetcher.js'

function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/data" element={DataFetcher} /> 
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<TimeLine/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/anuncios" element={<Anuncios/>} />
            <Route path="/projetos" element={<Projetos/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<CadastroUsuario/>} />
            <Route path="/vendas" element={<CriarAnuncio/>} />
            <Route path="/posts" element={<CriarPost/>} />
            <Route path="/users" element={<PaginaUsuario/>} />

        </Routes>
        
        </BrowserRouter>

    )
}; 
export default AppRoutes