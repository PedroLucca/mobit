import { Route, Routes } from 'react-router-dom';

//import Header from './components/Header';
//import MyRoute from './MyRoute';
import Login from '../pages/Login';


function MobitRoutes(){
    return(
        
        <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route path="*" component={<Login/>} />
        </Routes>
        
    );
}

export default MobitRoutes;