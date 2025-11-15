create database gimnasio;
use gimnasio;


CREATE TABLE actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cupo_maximo INT NOT NULL
);

CREATE TABLE socios (
    idSocio INT AUTO_INCREMENT PRIMARY KEY,
    nombreSocio VARCHAR(100) NOT NULL,
    apellidoSocio VARCHAR(100) NOT NULL,
    emailSocio VARCHAR(150) NOT NULL UNIQUE,
    contraSocio VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    socio_id INT NOT NULL,
    actividad_id INT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (socio_id) REFERENCES socios(idSocio) ON DELETE CASCADE,
    FOREIGN KEY (actividad_id) REFERENCES actividades(id) ON DELETE CASCADE,
    CONSTRAINT UQ_reserva_unica UNIQUE (socio_id, actividad_id, fecha)
);

CREATE TABLE administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    contra VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO actividades (nombre, cupo_maximo) VALUES
('Yoga', 20),
('Spinning', 15),
('CrossFit', 25),
('Pilates', 18),
('Zumba', 30),
('Boxeo', 12),
('Natación', 10),
('Funcional', 22),
('Musculación', 35),
('Kickboxing', 16);

INSERT INTO administradores (nombre, apellido, email, contra) VALUES
('Juan', 'Pérez', 'admin@admin.com', 'admin');