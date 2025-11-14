import { useState } from "react";
import useCustomAlumnos from "../../Hooks/useCustomAlumnos";
import swal from "sweetalert2";

const Alumnos = () => {
    const { alumnos, loading, error } = useCustomAlumnos();
    