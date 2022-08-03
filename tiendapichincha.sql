-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-08-2022 a las 05:59:32
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendapichincha`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

DROP TABLE IF EXISTS `detalle_pedido`;
CREATE TABLE IF NOT EXISTS `detalle_pedido` (
  `DEP_CODIGO` int NOT NULL AUTO_INCREMENT,
  `PED_CODIGO` int NOT NULL,
  `ZAP_CODIGO` varchar(10) NOT NULL,
  `DEP_CANTIDAD` int NOT NULL,
  `DEP_PRECIO` decimal(10,2) NOT NULL,
  `DEP_DESCUENTO` decimal(10,2) NOT NULL,
  `DEP_IVA` decimal(10,4) NOT NULL,
  `DEP_SUBTOTAL` decimal(10,2) NOT NULL,
  `DEP_OBSERVACION` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DEP_CODIGO`),
  KEY `PED_CODIGO` (`PED_CODIGO`),
  KEY `ZAP_CODIGO` (`ZAP_CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

INSERT INTO `detalle_pedido` (`DEP_CODIGO`, `PED_CODIGO`, `ZAP_CODIGO`, `DEP_CANTIDAD`, `DEP_PRECIO`, `DEP_DESCUENTO`, `DEP_IVA`, `DEP_SUBTOTAL`, `DEP_OBSERVACION`) VALUES
(9, 6, 'ZAP-4', 2, '20.99', '0.00', '5.0400', '47.02', 'quality product'),
(11, 8, 'ZAP-2', 1, '20.99', '0.00', '2.5200', '23.51', 'quality product'),
(12, 9, 'ZAP-3', 1, '10.50', '0.00', '1.2600', '11.76', 'quality product'),
(14, 11, 'ZAP-4', 18, '20.99', '0.00', '45.3400', '423.16', 'quality product'),
(15, 12, 'ZAP-3', 1, '10.50', '0.00', '1.2600', '11.76', 'quality product'),
(16, 13, 'ZAP-2', 1, '20.99', '0.00', '2.5200', '23.51', 'quality product'),
(17, 13, 'ZAP-3', 10, '10.50', '0.00', '12.6000', '117.60', 'quality product'),
(18, 14, 'ZAP-1', 1, '10.50', '0.00', '1.2600', '11.76', 'quality product'),
(19, 14, 'ZAP-7', 1, '10.50', '0.00', '1.2600', '11.76', 'quality product'),
(20, 14, 'ZAP-6', 1, '20.99', '0.00', '2.5200', '23.51', 'quality product'),
(21, 15, 'zap-11', 10, '12.45', '0.00', '14.9400', '139.44', 'quality product'),
(22, 15, 'ZAP-10', 1, '20.99', '0.00', '2.5200', '23.51', 'quality product'),
(23, 16, 'ZAP-2', 2, '20.99', '0.00', '5.0400', '47.02', 'quality product'),
(24, 16, 'zap-11', 1, '12.45', '0.00', '1.4900', '13.94', 'quality product');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrega`
--

DROP TABLE IF EXISTS `entrega`;
CREATE TABLE IF NOT EXISTS `entrega` (
  `ENT_CODIGO` int NOT NULL AUTO_INCREMENT,
  `PED_CODIGO` int NOT NULL,
  `ENT_DESCRIPCION` varchar(255) DEFAULT NULL,
  `ENT_RECIBE` varchar(100) DEFAULT NULL,
  `ENT_OBSERVACION` varchar(255) DEFAULT NULL,
  `ENT_FECHA_ENVIO` datetime DEFAULT NULL,
  `ENT_FECHA_RECIBE` datetime DEFAULT NULL,
  `ENT_ESTADO` varchar(10) NOT NULL,
  PRIMARY KEY (`ENT_CODIGO`),
  KEY `PED_CODIGO` (`PED_CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `entrega`
--

INSERT INTO `entrega` (`ENT_CODIGO`, `PED_CODIGO`, `ENT_DESCRIPCION`, `ENT_RECIBE`, `ENT_OBSERVACION`, `ENT_FECHA_ENVIO`, `ENT_FECHA_RECIBE`, `ENT_ESTADO`) VALUES
(3, 6, 'test description', 'Juan Perez', 'Order by buy test', '2022-07-17 01:03:58', '2022-07-20 01:03:57', 'Enviado'),
(5, 8, 'test description', 'Juan Perez', 'Order by buy test', '2022-07-17 21:50:18', '2022-07-20 21:50:17', 'Bodega'),
(6, 9, 'test description', 'Juan Perez', 'Order by buy test', '2022-07-17 21:57:20', '2022-07-20 21:57:19', 'Bodega'),
(8, 11, 'test description', 'Juan Perez', 'Order by buy test', '2022-07-18 09:20:59', '2022-07-21 09:20:58', 'Enviado'),
(9, 12, 'test description', 'Juan Perez', 'Order by buy test', '2022-07-18 11:17:17', '2022-07-21 11:17:16', 'Bodega'),
(10, 13, 'test description', 'Juan Perez', 'Order by buy test', '2022-08-02 22:07:18', '2022-08-05 22:07:15', 'Bodega'),
(11, 14, 'test description', 'Juan Perez', 'Order by buy test', '2022-08-02 23:02:48', '2022-08-05 23:02:46', 'Bodega'),
(12, 15, 'test description', 'Juan Perez', 'Order by buy test', '2022-08-02 23:03:45', '2022-08-05 23:03:44', 'Bodega'),
(13, 16, 'test description', 'Juan Perez', 'Order by buy test', '2022-08-02 23:27:32', '2022-08-05 23:27:30', 'Bodega');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `PED_CODIGO` int NOT NULL AUTO_INCREMENT,
  `PER_CODIGO` int NOT NULL,
  `PED_FECHA` datetime NOT NULL,
  `PED_OBSERVACION` varchar(255) DEFAULT NULL,
  `PED_ESTADO` varchar(10) DEFAULT NULL,
  `PED_TOTAL` decimal(10,2) NOT NULL,
  `PED_FACTURA` varchar(50) NOT NULL,
  PRIMARY KEY (`PED_CODIGO`),
  KEY `PER_CODIGO` (`PER_CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`PED_CODIGO`, `PER_CODIGO`, `PED_FECHA`, `PED_OBSERVACION`, `PED_ESTADO`, `PED_TOTAL`, `PED_FACTURA`) VALUES
(6, 1, '2022-07-17 01:03:57', 'new Order', 'Pendiente', '47.02', '001-001-000000002'),
(8, 1, '2022-07-17 21:50:17', 'new Order', 'Pendiente', '23.51', '001-001-000000002'),
(9, 1, '2022-07-17 21:57:19', 'new Order', 'Pendiente', '11.76', '001-001-000000003'),
(11, 1, '2022-07-18 09:20:58', 'new Order', 'Pendiente', '423.16', '001-001-000000005'),
(12, 1, '2022-07-18 11:17:16', 'new Order', 'Pendiente', '11.76', '001-001-000000005'),
(13, 1, '2022-08-02 22:07:16', 'new Order', 'Pendiente', '141.11', '001-001-000000006'),
(14, 1, '2022-08-02 23:02:46', 'new Order', 'Pendiente', '47.03', '001-001-000000007'),
(15, 1, '2022-08-02 23:03:44', 'new Order', 'Pendiente', '162.95', '001-001-000000008'),
(16, 1, '2022-08-02 23:27:30', 'new Order', 'Pendiente', '60.96', '001-001-000000009');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `PER_CODIGO` int NOT NULL AUTO_INCREMENT,
  `PER_IDENTIFICACION` varchar(20) NOT NULL,
  `PER_NOMBRE` varchar(50) NOT NULL,
  `PER_APELLIDO` varchar(50) NOT NULL,
  `PER_DIRECCION` varchar(100) DEFAULT NULL,
  `PER_TALLA` varchar(10) DEFAULT NULL,
  `PER_FECHA_NACIMIENTO` date DEFAULT NULL,
  `PER_GENERO` varchar(2) DEFAULT NULL,
  `PER_EMAIL` varchar(255) DEFAULT NULL,
  `PER_PASSWORD` varchar(255) NOT NULL,
  PRIMARY KEY (`PER_CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`PER_CODIGO`, `PER_IDENTIFICACION`, `PER_NOMBRE`, `PER_APELLIDO`, `PER_DIRECCION`, `PER_TALLA`, `PER_FECHA_NACIMIENTO`, `PER_GENERO`, `PER_EMAIL`, `PER_PASSWORD`) VALUES
(1, '1805004908', 'Marco Alexander', 'Aseicha Quinto', 'Pelileo', '1,70', '1996-09-14', 'M', 'maseicha@pichincha.com', 'maseicha'),
(2, '1804374898', 'Pepito', 'Perez', 'Pelileo', '1,60', '1996-09-14', 'M', 'pperez@pichincha.com', 'pperez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zapato`
--

DROP TABLE IF EXISTS `zapato`;
CREATE TABLE IF NOT EXISTS `zapato` (
  `ZAP_CODIGO` varchar(10) NOT NULL,
  `ZAP_NOMBRE` varchar(100) NOT NULL,
  `ZAP_MODELO` varchar(100) NOT NULL,
  `ZAP_GENERO` varchar(2) NOT NULL,
  `ZAP_COLOR` varchar(50) NOT NULL,
  `ZAP_TALLA` varchar(20) NOT NULL,
  `ZAP_STOCK` int NOT NULL,
  `ZAP_PRECIO` decimal(10,2) NOT NULL,
  `ZAP_IMAGE` varchar(255) DEFAULT '''assets/images/product.png''',
  PRIMARY KEY (`ZAP_CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `zapato`
--

INSERT INTO `zapato` (`ZAP_CODIGO`, `ZAP_NOMBRE`, `ZAP_MODELO`, `ZAP_GENERO`, `ZAP_COLOR`, `ZAP_TALLA`, `ZAP_STOCK`, `ZAP_PRECIO`, `ZAP_IMAGE`) VALUES
('ZAP-1', 'Prueba edit', 'Deportivo', 'M', 'azul', '36', 19, '10.50', 'assets/images/product.png'),
('ZAP-10', 'Nombre del zapato 10', 'Casual', 'M', 'azul', '36', 49, '20.99', 'https://http2.mlstatic.com/D_NQ_NP_774555-MEC48213954943_112021-O.jpg'),
('zap-11', 'Bruno Marc', 'Casual', 'M', 'negro', '32', 9, '12.45', 'https://img.lalr.co/cms/2017/12/05165632/Zapatos.jpg?size=xl'),
('ZAP-2', 'Nombre del zapato 2', 'Casual', 'M', 'azul', '36', 6, '20.99', 'https://http2.mlstatic.com/D_NQ_NP_774555-MEC48213954943_112021-O.jpg'),
('ZAP-3', 'Nombre del zapato 3', 'Deportivo', 'F', 'azul', '30', 3, '10.50', 'assets/images/product.png'),
('ZAP-4', 'Nombre del zapato 4', 'Casual', 'M', 'azul', '36', 0, '20.99', 'assets/images/product.png'),
('ZAP-5', 'Nombre del zapato 5', 'Deportivo', 'M', 'azul', '36', 25, '10.50', 'assets/images/product.png'),
('ZAP-6', 'Nombre del zapato 6', 'Casual', 'F', 'azul', '30', 29, '20.99', 'assets/images/product.png'),
('ZAP-7', 'Nombre del zapato 7', 'Deportivo', 'M', 'azul', '36', 34, '10.50', 'assets/images/product.png'),
('ZAP-8', 'Nombre del zapato 8', 'Casual', 'M', 'azul', '36', 40, '20.99', 'assets/images/product.png'),
('ZAP-9', 'Nombre del zapato 9', 'Deportivo', 'F', 'azul', '30', 45, '10.50', 'assets/images/product.png');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `detalle_pedido_ibfk_1` FOREIGN KEY (`PED_CODIGO`) REFERENCES `pedido` (`PED_CODIGO`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detalle_pedido_ibfk_2` FOREIGN KEY (`ZAP_CODIGO`) REFERENCES `zapato` (`ZAP_CODIGO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `entrega`
--
ALTER TABLE `entrega`
  ADD CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`PED_CODIGO`) REFERENCES `pedido` (`PED_CODIGO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`PER_CODIGO`) REFERENCES `persona` (`PER_CODIGO`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
