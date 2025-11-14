import React, { useEffect, useState } from 'react';
import api from '../Services/Api';

const useCustomAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const obtenerAlumnos = async () => {
    setLoading(true);
    try {
      const response = await api.get('/');
        setAlumnos(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const traerAlumnosporId = async (id) => {
    setLoading(true);
    try {
      const response = await api.get(`/${id}`);
        setAlumnos(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const crearAlumno = async (nuevoAlumno) => {
    setLoading(true);
    try {
      const response = await api.post('/', nuevoAlumno);
      setAlumnos([...alumnos, response.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const eliminarAlumno = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/${id}`);
      setAlumnos(alumnos.filter(alumno => alumno.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const editarAlumno = async (id, alumnoActualizado) => {
    setLoading(true);
    try {
      const response = await api.put(`/${id}`, alumnoActualizado);
      setAlumnos(alumnos.map(alumno => (alumno.id === id ? response.data : alumno)));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);



return { alumnos, loading, error, obtenerAlumnos, traerAlumnosporId, crearAlumno, eliminarAlumno, editarAlumno }};

export default useCustomAlumnos;