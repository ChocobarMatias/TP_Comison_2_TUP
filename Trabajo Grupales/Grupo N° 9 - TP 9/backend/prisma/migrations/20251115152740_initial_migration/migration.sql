-- CreateTable
CREATE TABLE `deportes` (
    `idDeporte` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activo` BOOLEAN NULL DEFAULT true,

    UNIQUE INDEX `nombre`(`nombre`),
    PRIMARY KEY (`idDeporte`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `membresias` (
    `idMembresia` INTEGER NOT NULL AUTO_INCREMENT,
    `socio_id` INTEGER NOT NULL,
    `deporte_id` INTEGER NOT NULL,
    `cuota_mensual` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `fecha_alta` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activo` BOOLEAN NULL DEFAULT true,

    INDEX `deporte_id`(`deporte_id`),
    INDEX `idx_membresias_socio`(`socio_id`),
    UNIQUE INDEX `socio_id`(`socio_id`, `deporte_id`),
    PRIMARY KEY (`idMembresia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagos` (
    `idPago` INTEGER NOT NULL AUTO_INCREMENT,
    `membresia_id` INTEGER NOT NULL,
    `importe` DECIMAL(10, 2) NOT NULL,
    `fecha_pago` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cuota_mes` TINYINT NOT NULL,
    `cuota_anio` SMALLINT NOT NULL,
    `metodo_pago` VARCHAR(50) NULL,
    `comentario` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_pagos_periodo`(`cuota_anio`, `cuota_mes`),
    INDEX `membresia_id`(`membresia_id`),
    PRIMARY KEY (`idPago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socios` (
    `idSocio` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `dni` VARCHAR(20) NOT NULL,
    `telefono` VARCHAR(50) NULL,
    `contrasena` VARCHAR(250) NULL,
    `email` VARCHAR(150) NOT NULL,
    `fecha_alta` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `activo` BOOLEAN NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `resetToken` VARCHAR(255) NULL,
    `resetTokenExpires` DATETIME(0) NULL,
    `rol` VARCHAR(50) NULL DEFAULT 'socio',

    UNIQUE INDEX `dni`(`dni`),
    UNIQUE INDEX `email_unique`(`email`),
    PRIMARY KEY (`idSocio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `membresias` ADD CONSTRAINT `membresias_ibfk_1` FOREIGN KEY (`socio_id`) REFERENCES `socios`(`idSocio`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `membresias` ADD CONSTRAINT `membresias_ibfk_2` FOREIGN KEY (`deporte_id`) REFERENCES `deportes`(`idDeporte`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pagos` ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`membresia_id`) REFERENCES `membresias`(`idMembresia`) ON DELETE CASCADE ON UPDATE NO ACTION;
