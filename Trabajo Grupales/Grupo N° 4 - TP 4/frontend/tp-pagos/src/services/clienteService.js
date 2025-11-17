import api from "./api";
import { ENDPOINTS } from "../endpoints/endpoints";

export const clientesService = {
  getAll: () => api.get(ENDPOINTS.CLIENTES),
  getById: (id) => api.get(`${ENDPOINTS.CLIENTES}/${id}`),
  create: (data) => api.post(ENDPOINTS.CLIENTES, data),
  update: (id, data) => api.put(`${ENDPOINTS.CLIENTES}/${id}`, data),
  remove: (id) => api.delete(`${ENDPOINTS.CLIENTES}/${id}`),
};
