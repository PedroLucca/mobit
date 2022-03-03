//import './App.css';

import history from './services/history';
import MobitRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <MobitRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;