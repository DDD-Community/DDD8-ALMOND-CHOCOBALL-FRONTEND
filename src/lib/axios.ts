import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: true,
});

instance.interceptors.request.use();
instance.interceptors.response.use();

export default instance;
