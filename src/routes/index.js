import { Route, Routes } from 'react-router-dom';

import React, {Fragment} from 'react';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Listagem from '../pages/Listagem';
import Sobre from '../pages/Sobre';
import PrivateRoute from '../routes/privateRoute';
import HomeRoute from './homeRoute';
import LoginRoute from './loginRoute';

function MobitRoutes(){
    return(
        <Fragment>
            <Routes>
                <Route exact path='/' element={<HomeRoute/>}/>
                <Route  path="/login" element={<LoginRoute/>}>
                    <Route exact path="/login" element={<Login/>}/>
                </Route>
                
                <Route  path="/cadastro" element={<PrivateRoute/>} >
                    <Route  path="/cadastro" element={<Cadastro/>} />
                </Route>
                <Route  path="/listar" element={<PrivateRoute/>} >
                    <Route  path="/listar" element={<Listagem/>} />
                </Route>
                <Route  path="/sobre" element={<Sobre/>} />
                <Route path="*" component={<Login/>} />
            </Routes>
        </Fragment>
        
    );
}

export default MobitRoutes;