-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS registro_cultural;
USE registro_cultural;

-- Tabla unificada de usuarios (empleados, asistentes, admin)
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) NOT NULL UNIQUE,
    password_usuario VARCHAR(255) NOT NULL,
    rol_usuario ENUM('empleado','asistente','admin') NOT NULL,
    estado_usuario TINYINT DEFAULT 1,
    fecha_creacion_usuario DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de artistas
CREATE TABLE artistas (
    id_artista INT AUTO_INCREMENT PRIMARY KEY,
    nombre_artista VARCHAR(100) NOT NULL,
    tipo_arte_artista VARCHAR(50),
    biografia_artista TEXT,
    email_artista VARCHAR(100) UNIQUE,
    contra_artista VARCHAR(255),
    telefono_artista VARCHAR(20),
    estado_artista TINYINT DEFAULT 1,
    fecha_creacion_artista DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de lugares
CREATE TABLE lugares (
    id_lugar INT AUTO_INCREMENT PRIMARY KEY,
    nombre_lugar VARCHAR(100) NOT NULL,
    tipo_lugar VARCHAR(50),
    direccion_lugar VARCHAR(255),
    contacto_nombre_lugar VARCHAR(100),
    contacto_telefono_lugar VARCHAR(20),
    contacto_email_lugar VARCHAR(100),
    equipamiento_lugar TEXT,
    capacidad_maxima_lugar INT,
    estado_lugar TINYINT DEFAULT 1,
    fecha_creacion_lugar DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de eventos
CREATE TABLE eventos (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    nombre_evento VARCHAR(100) NOT NULL,
    fecha_inicio_evento DATETIME NOT NULL,
    fecha_fin_evento DATETIME NOT NULL,
    precio_entrada_evento DECIMAL(10,2),
    entradas_vendidas_evento INT DEFAULT 0,
    id_lugar INT,
    estado_evento TINYINT DEFAULT 1,
    fecha_creacion_evento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_lugar) REFERENCES lugares(id_lugar)
);

-- Tabla intermedia artistas_eventos (N-N)
CREATE TABLE artistas_eventos (
    id_artista_evento INT AUTO_INCREMENT PRIMARY KEY,
    id_evento INT NOT NULL,
    id_artista INT NOT NULL,
    rol_artista_evento VARCHAR(50),
    estado_artista_evento TINYINT DEFAULT 1,
    fecha_creacion_artista_evento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
    FOREIGN KEY (id_artista) REFERENCES artistas(id_artista)
);

-- Tabla de ventas de boletos
CREATE TABLE ventas_boletos (
    id_venta_boleto INT AUTO_INCREMENT PRIMARY KEY,
    id_evento INT NOT NULL,
    id_usuario INT NOT NULL,
    cantidad_boletos INT NOT NULL,
    total_venta DECIMAL(10,2) NOT NULL,
    metodo_pago VARCHAR(50),
    estado_venta_boleto TINYINT DEFAULT 1,
    fecha_creacion_venta_boleto DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
