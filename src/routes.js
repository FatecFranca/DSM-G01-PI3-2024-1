import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import TimeLine from './pages/PaginaTimeLine/index.js';
import Usuarios from './pages/PaginaUsuarios/index.js';
import Projetos from './pages/PaginaProjetos/index.js';
import Anuncios from './pages/PaginaAnuncios/index.js';
import CadastroUsuario from './pages/CadastroUsuario';
import CriarAnuncio from './pages/CriarAnuncio'
import CriarPost from './pages/CriarPosts';
import CriarProjeto from './pages/CriarProjeto';
import PaginaUsuario from './pages/PaginaUsusario';
import DataFetcher from './pages/DataFetcher.js'
import PostsPage from './pages/PaginaTimeLine/index.js';
import AnunciosPage from './pages/PaginaAnuncios/index.js';


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

            <Route path="/users" element={<PaginaUsuario/>} />

            <Route path="/cadastro" element={<CadastroUsuario/>} />
            <Route path="/venda" element={<CriarAnuncio/>} />
            <Route path="/post" element={<CriarPost/>} />
            <Route path="/projeto" element={<CriarProjeto/>} />
            <Route path="/timeline" element={<PostsPage/>} />
            <Route path="/Anuncios" element={<AnunciosPage/>} />
        </Routes>
        
        </BrowserRouter>

    )
}; 
export default AppRoutes