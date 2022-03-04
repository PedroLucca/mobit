import { Route, Routes } from 'react-router-dom';

//import Header from './components/Header';
//import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';


function MobitRoutes(){
    return(
        
        <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/cadastro" element={<Cadastro/>} />
            <Route path="*" component={<Login/>} />
        </Routes>
        
    );
}

export default MobitRoutes;