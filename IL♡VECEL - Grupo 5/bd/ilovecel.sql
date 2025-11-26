-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2025 a las 01:38:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ilovecel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `celulares`
--

CREATE TABLE `celulares` (
  `id` int(11) NOT NULL,
  `api_id` int(11) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `thumbnail` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `celulares`
--

INSERT INTO `celulares` (`id`, `api_id`, `titulo`, `precio`, `thumbnail`) VALUES
(1, 121, 'iPhone 5s', 199.99, 'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp'),
(2, 122, 'iPhone 6', 299.99, 'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp'),
(3, 123, 'iPhone 13 Pro', 1099.99, 'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp'),
(4, 124, 'iPhone X', 899.99, 'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp'),
(5, 125, 'Oppo A57', 249.99, 'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp'),
(6, 126, 'Oppo F19 Pro Plus', 399.99, 'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp'),
(7, 127, 'Oppo K1', 299.99, 'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp'),
(8, 128, 'Realme C35', 149.99, 'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp'),
(9, 129, 'Realme X', 299.99, 'https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp'),
(10, 130, 'Realme XT', 349.99, 'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp'),
(11, 131, 'Samsung Galaxy S7', 299.99, 'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp'),
(12, 132, 'Samsung Galaxy S8', 499.99, 'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp'),
(13, 133, 'Samsung Galaxy S10', 699.99, 'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp'),
(14, 134, 'Vivo S1', 249.99, 'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp'),
(15, 135, 'Vivo V9', 299.99, 'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp'),
(16, 136, 'Vivo X21', 499.99, 'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(14) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `birthday` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `surname`, `email`, `phone`, `password`, `address`, `birthday`) VALUES
(1, 'ana', 'reyes', 'ana@gamil.com', 1134554296, '276', 'soldati 123', '2009-09-17'),
(2, 'joaquin', 'reyes', 'joaquin@gmail.com', 1134554296, '0', 'sex 123', '2005-12-29'),
(3, 'Lucio', 'Ana', 'l@gmail.com', 124124, '96', '12132', '4131-03-12'),
(4, 'mike', 'noble', 'mike@gmail.com', 1134554296, '81dc9bdb52d04dc20036dbd8313ed055', 'neo 1234', '2005-12-29'),
(5, '1', '2', '1@1', 325246524, 'c4ca4238a0b923820dcc509a6f75849b', 'soldati 123', '4884-05-12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `celulares`
--
ALTER TABLE `celulares`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `api_id` (`api_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `celulares`
--
ALTER TABLE `celulares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
