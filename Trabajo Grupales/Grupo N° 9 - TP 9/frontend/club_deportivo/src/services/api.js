import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user'); 
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// --- SERVICIOS DE AUTENTICACIÓN ---
export const authRegister = (data) => 
  api.post('/auth/register', data).then(res => res.data);

export const authLogin = (data) => 
  api.post('/auth/login', data).then(res => res.data);

export const authForgotPassword = (email) => 
  api.post('/auth/forgot-password', { email }).then(res => res.data);

export const authResetPassword = (token, nuevaContraseña) => 
  api.post(`/auth/reset-password/${token}`, { nuevaContraseña }).then(res => res.data);


// --- Servicios para SOCIOS ---
export const getSocios = () => 
  api.get('/socios').then(res => res.data);

export const getSocio = (id) => 
  api.get(`/socios/${id}`).then(res => res.data);

export const updateSocio = (id, socioData) => 
  api.put(`/socios/${id}`, socioData).then(res => res.data);

export const deleteSocio = (id) => 
  api.delete(`/socios/${id}`).then(res => res.data);


// --- Servicios para DEPORTES ---
export const getDeportes = () => 
  api.get('/deportes').then(res => res.data);

export const getDeporte = (id) => 
  api.get(`/deportes/${id}`).then(res => res.data);

export const createDeporte = (deporteData) => 
  api.post('/deportes', deporteData).then(res => res.data);

export const updateDeporte = (id, deporteData) => 
  api.put(`/deportes/${id}`, deporteData).then(res => res.data);

export const deleteDeporte = (id) => 
  api.delete(`/deportes/${id}`).then(res => res.data);


// --- Servicios para MEMBRESÍAS ---
export const getMembresias = () => 
  api.get('/membresias').then(res => res.data);

export const getMembresia = (id) => 
  api.get(`/membresias/${id}`).then(res => res.data);

export const createMembresia = (data) => 
  api.post('/membresias', data).then(res => res.data);

export const updateMembresia = (id, data) => 
  api.put(`/membresias/${id}`, data).then(res => res.data);

export const deleteMembresia = (id) => 
  api.delete(`/membresias/${id}`).then(res => res.data);


// --- Servicios para PAGOS ---
export const getPagos = () => 
  api.get('/pagos').then(res => res.data);

export const createPago = (pagoData) => 
  api.post('/pagos', pagoData).then(res => res.data);

export const getDeudores = () => 
  api.get('/pagos/deudas').then(res => res.data);

export const sendEmail = (data) => 
  api.post('/mail/enviar', data).then(res => res.data);

export default api;