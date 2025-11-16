import api from "./api";
import { ENDPOINTS } from "../endpoints/endpoints";

export const serviciosService = {
  getAll: () => api.get(ENDPOINTS.SERVICIOS),
  getById: (id) => api.get(`${ENDPOINTS.SERVICIOS}/${id}`),
  create: (data) => api.post(ENDPOINTS.SERVICIOS, data),
  update: (id, data) => api.put(`${ENDPOINTS.SERVICIOS}/${id}`, data),
  remove: (id) => api.delete(`${ENDPOINTS.SERVICIOS}/${id}`),
};