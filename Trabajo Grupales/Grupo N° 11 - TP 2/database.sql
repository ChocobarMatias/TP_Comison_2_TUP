-- ============================================================
-- BASE DE DATOS: Sistema de Gestión de Turnos y Servicios
-- Grupo N° 11 - TP 2
-- ============================================================

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gestion_turnos;
USE gestion_turnos;

-- ============================================================
-- TABLA: Users (Usuarios/Empleados)
-- ============================================================
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- TABLA: Clientes
-- ============================================================
CREATE TABLE IF NOT EXISTS Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- TABLA: Servicios
-- ============================================================
CREATE TABLE IF NOT EXISTS servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_nombre (nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- TABLA: Turnos
-- ============================================================
CREATE TABLE IF NOT EXISTS turnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
    idServicio INT NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idCliente) REFERENCES Clientes(id) ON DELETE CASCADE,
    FOREIGN KEY (idServicio) REFERENCES servicios(id) ON DELETE CASCADE,
    INDEX idx_fecha_hora (fecha, hora),
    INDEX idx_cliente (idCliente),
    INDEX idx_servicio (idServicio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- INSERTS: Datos de Ejemplo
-- ============================================================

-- Insertar usuarios/empleados (passwords hasheadas con bcrypt)
-- Password para todos: "password123"
INSERT INTO Users (name, email, password) VALUES
('Juan Pérez', 'juan.perez@example.com', '$2b$10$rKZN7YhqS1xqw.VzJ3p.VO8YQBqL9Z8eMQdKPl5vXtRzJ3Lx6JQHK'),
('María González', 'maria.gonzalez@example.com', '$2b$10$rKZN7YhqS1xqw.VzJ3p.VO8YQBqL9Z8eMQdKPl5vXtRzJ3Lx6JQHK'),
('Carlos Rodríguez', 'carlos.rodriguez@example.com', '$2b$10$rKZN7YhqS1xqw.VzJ3p.VO8YQBqL9Z8eMQdKPl5vXtRzJ3Lx6JQHK'),
('Ana Martínez', 'ana.martinez@example.com', '$2b$10$rKZN7YhqS1xqw.VzJ3p.VO8YQBqL9Z8eMQdKPl5vXtRzJ3Lx6JQHK'),
('Luis Fernández', 'luis.fernandez@example.com', '$2b$10$rKZN7YhqS1xqw.VzJ3p.VO8YQBqL9Z8eMQdKPl5vXtRzJ3Lx6JQHK');

-- Insertar clientes
INSERT INTO Clientes (user_id, nombre, apellido, telefono) VALUES
(1, 'Roberto', 'Sánchez', '3815123456'),
(1, 'Laura', 'López', '3815234567'),
(1, 'Diego', 'Morales', '3815345678'),
(2, 'Sofía', 'Ramírez', '3815456789'),
(2, 'Miguel', 'Torres', '3815567890'),
(2, 'Valeria', 'Gómez', '3815678901'),
(3, 'Fernando', 'Castro', '3815789012'),
(3, 'Carolina', 'Herrera', '3815890123'),
(3, 'Pablo', 'Díaz', '3815901234'),
(4, 'Gabriela', 'Ruiz', '3816012345'),
(4, 'Andrés', 'Vega', '3816123456'),
(4, 'Lucía', 'Ortiz', '3816234567'),
(5, 'Martín', 'Silva', '3816345678'),
(5, 'Patricia', 'Méndez', '3816456789'),
(5, 'Ricardo', 'Vargas', '3816567890');

-- Insertar servicios
INSERT INTO servicios (nombre, precio) VALUES
('Corte de Cabello Hombre', 5000.00),
('Corte de Cabello Mujer', 7000.00),
('Coloración Completa', 12000.00),
('Mechas', 10000.00),
('Manicura', 4000.00),
('Pedicura', 4500.00),
('Tratamiento Capilar', 8000.00),
('Alisado Permanente', 15000.00),
('Peinado para Evento', 9000.00),
('Barba y Bigote', 3000.00),
('Depilación Facial', 3500.00),
('Masaje Capilar', 5500.00),
('Brushing', 6000.00),
('Nutrición Capilar', 7500.00),
('Extensiones de Cabello', 20000.00);

-- Insertar turnos (próximas 2 semanas)
INSERT INTO turnos (idCliente, idServicio, fecha, hora) VALUES
-- Semana 1
(1, 1, '2025-11-07', '09:00:00'),
(2, 2, '2025-11-07', '10:00:00'),
(3, 10, '2025-11-07', '11:30:00'),
(4, 5, '2025-11-07', '14:00:00'),
(5, 3, '2025-11-07', '15:00:00'),

(6, 6, '2025-11-08', '09:30:00'),
(7, 2, '2025-11-08', '11:00:00'),
(8, 7, '2025-11-08', '13:00:00'),
(9, 1, '2025-11-08', '16:00:00'),
(10, 4, '2025-11-08', '17:30:00'),

(11, 9, '2025-11-09', '10:00:00'),
(12, 12, '2025-11-09', '11:00:00'),
(13, 1, '2025-11-09', '14:00:00'),
(14, 8, '2025-11-09', '15:30:00'),
(15, 13, '2025-11-09', '17:00:00'),

(1, 5, '2025-11-10', '09:00:00'),
(2, 6, '2025-11-10', '10:30:00'),
(3, 2, '2025-11-10', '12:00:00'),
(4, 11, '2025-11-10', '14:30:00'),
(5, 7, '2025-11-10', '16:00:00'),

-- Semana 2
(6, 1, '2025-11-11', '09:00:00'),
(7, 14, '2025-11-11', '10:30:00'),
(8, 3, '2025-11-11', '13:00:00'),
(9, 4, '2025-11-11', '15:30:00'),
(10, 2, '2025-11-11', '17:00:00'),

(11, 10, '2025-11-12', '09:30:00'),
(12, 5, '2025-11-12', '11:00:00'),
(13, 6, '2025-11-12', '13:30:00'),
(14, 1, '2025-11-12', '15:00:00'),
(15, 9, '2025-11-12', '16:30:00'),

(1, 12, '2025-11-13', '10:00:00'),
(2, 7, '2025-11-13', '12:00:00'),
(3, 13, '2025-11-13', '14:00:00'),
(4, 2, '2025-11-13', '16:00:00'),
(5, 11, '2025-11-13', '17:30:00'),

(6, 15, '2025-11-14', '09:00:00'),
(7, 8, '2025-11-14', '11:30:00'),
(8, 4, '2025-11-14', '14:00:00'),
(9, 5, '2025-11-14', '16:00:00'),
(10, 6, '2025-11-14', '17:30:00');

-- ============================================================
-- CONSULTAS ÚTILES PARA VERIFICAR LOS DATOS
-- ============================================================

-- Ver todos los turnos con información completa
-- SELECT 
--     t.id,
--     c.nombre AS cliente_nombre,
--     c.apellido AS cliente_apellido,
--     c.telefono,
--     s.nombre AS servicio,
--     s.precio,
--     t.fecha,
--     t.hora,
--     u.name AS empleado
-- FROM turnos t
-- JOIN Clientes c ON t.idCliente = c.id
-- JOIN servicios s ON t.idServicio = s.id
-- JOIN Users u ON c.user_id = u.id
-- ORDER BY t.fecha, t.hora;

-- Ver turnos por fecha específica
-- SELECT * FROM turnos WHERE fecha = '2025-11-07';

-- Ver clientes de un empleado específico
-- SELECT * FROM Clientes WHERE user_id = 1;

-- Ver servicios más solicitados
-- SELECT s.nombre, COUNT(t.id) as cantidad_turnos, SUM(s.precio) as total_facturado
-- FROM servicios s
-- LEFT JOIN turnos t ON s.id = t.idServicio
-- GROUP BY s.id
-- ORDER BY cantidad_turnos DESC;
