import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TimeLine from './pages/PaginaTimeLine/index.js';
import Usuarios from './pages/PaginaUsuarios/index.js';
import Projetos from './pages/PaginaProjetos/index.js';
import Anuncios from './pages/PaginaAnuncios/index.js';

import CadastroUsuario from './pages/CadastroUsuario';
import CriarAnuncio from './pages/CriarAnuncio'
import CriarPost from './pages/CriarPosts';
import CriarProjeto from './pages/CriarProjeto';

import PaginaUsuario from './pages/PaginaUsusario';
import Home from './pages/Home';
import Login from './pages/Login';

import DataFetcher from './pages/DataFetcher.js'


function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/data" element={DataFetcher} /> 
        
                            {/* login */}
            <Route path="/login" element={<Login/>} />

                           {/* perfil */}
            <Route path="/users" element={<PaginaUsuario/>} />

                            {/* home */}
            <Route path="/" element={<Home />} />

             {/* páginas com os cards (nome no plural) */}
            <Route path="/timeline" element={<TimeLine/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/anuncios" element={<Anuncios/>} />
            <Route path="/projetos" element={<Projetos/>} />


                {/* formulários (nome no singular)*/}
            <Route path="/cadastro" element={<CadastroUsuario/>} />
            <Route path="/anuncio" element={<CriarAnuncio/>} />
            <Route path="/post" element={<CriarPost/>} />
            <Route path="/projeto" element={<CriarProjeto/>} />

        </Routes>
        
        </BrowserRouter>

    )
}; 
export default AppRoutes