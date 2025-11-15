import axios from 'axios';
import {BASE_URL} from "../Services/Api.js"

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
}); 

export const obtenerTodosLosPrestamos = async () => {
    try {
        const response = await api.get('prestamos/');
        return response.data;
    } catch (error) {
        console.error('Error al obtener los préstamos:', error);
        throw error;
    }
}

export const obtenerPrestamoPorId = async (id) => {
    try {
        const response = await api.get(`prestamos/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el préstamo con ID ${id}:`, error);
        throw error;
    }
}

export const crearNuevoPrestamo = async (prestamoData) => {
    try {
        const response = await api.post('prestamos/', prestamoData, {
            headers: getAuthHeader()
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear un nuevo préstamo:', error);
        throw error;
    }
}

export const actualizarPrestamo = async (id, prestamoData) => {
    try { 
        const response = await api.put(`prestamos/${id}`, prestamoData, {
            headers: getAuthHeader()
        });
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar el préstamo con ID ${id}:`, error);
        throw error;
    }
}

export const eliminarPrestamo = async (id) => {
    try {
        const response = await api.delete(`prestamos/${id}`, {
            headers: getAuthHeader()
        });
        return response.data;
    } catch (error) {
        console.error(`Error al eliminar el préstamo con ID ${id}:`, error);
        throw error;
    }
}
