import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-todolist-3790e.firebaseio.com/'
});

export default instance;