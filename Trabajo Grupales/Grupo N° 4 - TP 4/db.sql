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

INSERT INTO users (name, email, password) VALUES
('Juan Pérez', 'juan@mail.com', 'hashedpassword1'),
('Ana López', 'ana@mail.com', 'hashedpassword2'),
('Carlos Gómez', 'carlos@mail.com', 'hashedpassword3');
INSERT INTO clientes (nombre, apellido, email) VALUES
('María', 'Suárez', 'maria.suarez@mail.com'),
('Pedro', 'Ramírez', 'pedro.ramirez@mail.com'),
('Lucía', 'Martínez', 'lucia.martinez@mail.com');
INSERT INTO servicios (nombre, descripcion, precio_total) VALUES
('Página Web', 'Desarrollo de página web institucional', 120000.00),
('E-commerce', 'Tienda online completa', 200000.00),
('Mantenimiento', 'Soporte técnico mensual', 30000.00);
INSERT INTO planes_pago (cliente_id, servicio_id, numero_cuotas, fecha_inicio) VALUES
(1, 1, 6, '2025-01-01'),
(2, 2, 12, '2025-02-10'),
(3, 3, 3, '2025-03-05');
INSERT INTO cuotas (plan_pago_id, numero_cuota, monto, fecha_vencimiento, estado) VALUES
(1, 1, 20000.00, '2025-02-01', 'PENDIENTE'),
(1, 2, 20000.00, '2025-03-01', 'PENDIENTE'),
(1, 3, 20000.00, '2025-04-01', 'PENDIENTE'),
(1, 4, 20000.00, '2025-05-01', 'PENDIENTE'),
(1, 5, 20000.00, '2025-06-01', 'PENDIENTE'),
(1, 6, 20000.00, '2025-07-01', 'PENDIENTE');
INSERT INTO cuotas (plan_pago_id, numero_cuota, monto, fecha_vencimiento, estado) VALUES
(2, 1, 16666.67, '2025-03-10', 'PENDIENTE'),
(2, 2, 16666.67, '2025-04-10', 'PENDIENTE'),
(2, 3, 16666.67, '2025-05-10', 'PENDIENTE'),
(2, 4, 16666.67, '2025-06-10', 'PENDIENTE'),
(2, 5, 16666.67, '2025-07-10', 'PENDIENTE'),
(2, 6, 16666.67, '2025-08-10', 'PENDIENTE'),
(2, 7, 16666.67, '2025-09-10', 'PENDIENTE'),
(2, 8, 16666.67, '2025-10-10', 'PENDIENTE'),
(2, 9, 16666.67, '2025-11-10', 'PENDIENTE'),
(2, 10, 16666.67, '2025-12-10', 'PENDIENTE'),
(2, 11, 16666.67, '2026-01-10', 'PENDIENTE'),
(2, 12, 16666.67, '2026-02-10', 'PENDIENTE');
INSERT INTO cuotas (plan_pago_id, numero_cuota, monto, fecha_vencimiento, estado) VALUES
(3, 1, 10000.00, '2025-04-05', 'PENDIENTE'),
(3, 2, 10000.00, '2025-05-05', 'PENDIENTE'),
(3, 3, 10000.00, '2025-06-05', 'PENDIENTE');

DROP DATABASE nombre_de_tu_base;
