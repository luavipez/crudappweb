import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dashboard.render.com/d/dpg-d1rk7iur433s73ae7eb0-a/cruddbapp',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
