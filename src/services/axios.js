import axios from 'axios';

const api = axios.create({
    baseURL: 'http://educacao.dadosabertosbr.com',
  });

  export default api;