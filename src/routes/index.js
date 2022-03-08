import { Route, Routes } from 'react-router-dom';

//import Header from './components/Header';
//import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Listagem from '../pages/Listagem';


function MobitRoutes(){
    return(
        
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/cadastro" element={<Cadastro/>} />
            <Route exact path="/listar" element={<Listagem/>} />
            <Route path="*" component={<Login/>} />
        </Routes>
        
    );
}

export default MobitRoutes;