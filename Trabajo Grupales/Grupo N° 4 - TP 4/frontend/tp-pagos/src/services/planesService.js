import api from "./api";

const BASE = "/planes-pago";

export const getPlanes = () => api.get(BASE);

export const getPlanById = (id) =>
  api.get(`${BASE}/${id}`);

export const getCuotasByPlan = (id) =>
  api.get(`${BASE}/${id}/cuotas`);

export const createPlan = (data) =>
  api.post(BASE, data);

export const pagarCuota = (idCuota) =>
  api.put(`/cuotas/${idCuota}/pagar`);


export const getPlanesByCliente = (clienteId) =>
  api.get(`/clientes/${clienteId}/planes`);
