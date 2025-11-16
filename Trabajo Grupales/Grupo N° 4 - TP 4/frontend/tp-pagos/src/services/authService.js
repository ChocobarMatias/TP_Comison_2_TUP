import api from "./api";
import { ENDPOINTS } from "../endpoints/endpoints";

export const loginRequest = (data) =>
  api.post(`${ENDPOINTS.AUTH}/login`, data);

export const getMeRequest = () =>
  api.get(`${ENDPOINTS.AUTH}/me`);