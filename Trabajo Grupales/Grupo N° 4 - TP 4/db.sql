-- Crear base
CREATE DATABASE IF NOT EXISTS tp4_pagos;
USE tp4_pagos;

-- =====================
-- 1. USUARIOS (auth)
-- =====================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    resetToken VARCHAR(255) DEFAULT NULL,
    resetTokenExp DATETIME DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================
-- 2. CLIENTES
-- =====================
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    apellido VARCHAR(80) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE
);

-- =====================
-- 3. SERVICIOS
-- =====================
CREATE TABLE servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio_total DECIMAL(10,2) NOT NULL
);

-- =====================
-- 4. PLANES DE PAGO
-- =====================
CREATE TABLE planes_pago (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    servicio_id INT NOT NULL,
    numero_cuotas INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,
    FOREIGN KEY (servicio_id) REFERENCES servicios(id) ON DELETE CASCADE
);

-- =====================
-- 5. CUOTAS
-- =====================
CREATE TABLE cuotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plan_pago_id INT NOT NULL,
    numero_cuota INT NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    estado ENUM('PENDIENTE', 'PAGADO') DEFAULT 'PENDIENTE',
    fecha_pago DATETIME NULL,
    FOREIGN KEY (plan_pago_id) REFERENCES planes_pago(id) ON DELETE CASCADE
);