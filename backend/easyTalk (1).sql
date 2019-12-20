-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 20-Dez-2019 às 15:24
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `easyTalk`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name_category` varchar(100) NOT NULL,
  `description_category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `category`
--

INSERT INTO `category` (`id_category`, `name_category`, `description_category`) VALUES
(1, 'Tecnologia', 'Tecnologia\r\n'),
(2, 'a', 'as'),
(3, 'as', 'as'),
(4, 'a', 'a'),
(5, 'teste', '1'),
(6, 'a', '3'),
(7, 'a', '3'),
(8, 'w', 'w'),
(9, '', ''),
(10, '', ''),
(11, 'a', ''),
(12, 'a', ''),
(13, 'asd', ''),
(14, 'asd', 'asd'),
(15, 'asd', 'asd');

-- --------------------------------------------------------

--
-- Estrutura da tabela `event`
--

CREATE TABLE `event` (
  `id_event` int(11) NOT NULL,
  `name_event` varchar(100) NOT NULL,
  `description_event` varchar(500) NOT NULL,
  `date_event` varchar(20) NOT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_active` int(11) NOT NULL,
  `location` varchar(50) NOT NULL,
  `id_category` varchar(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_responsible` text NOT NULL,
  `coffe` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `event`
--

INSERT INTO `event` (`id_event`, `name_event`, `description_event`, `date_event`, `date_create`, `id_active`, `location`, `id_category`, `id_user`, `id_responsible`, `coffe`) VALUES
(1, 'React', 'Top', '2019-12-16', '2019-12-15 04:18:26', 1, 'asd', '1', 1, '1', 'sim'),
(2, 'Gabriella', 'as', '2019-12-10', '2019-12-17 23:48:50', 0, 'Escola senai de informatica', '1', 1, '0', 'sim'),
(3, 'Gabriel Moraes', 'asd', '2019-12-04', '2019-12-17 23:50:44', 0, 'Escola senai de informatica', '1', 1, '0', 'sim'),
(6, 'asd', 'asd', '2019-12-27', '2019-12-20 04:06:29', 0, 'Escola senai de informatica', '2', 23, 'oi', 'sim');

-- --------------------------------------------------------

--
-- Estrutura da tabela `id_type_user`
--

CREATE TABLE `id_type_user` (
  `id_type` int(11) NOT NULL,
  `name_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `id_type_user`
--

INSERT INTO `id_type_user` (`id_type`, `name_type`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(100) NOT NULL,
  `email_user` varchar(100) NOT NULL,
  `phone_user` varchar(20) NOT NULL,
  `password_user` varchar(100) NOT NULL,
  `id_type_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id_user`, `name_user`, `email_user`, `phone_user`, `password_user`, `id_type_user`) VALUES
(1, 'Gabriel', 'a@a.com', '123456', '1', 1),
(2, 'Gabriel Moraes', 'b@b.com', '123456', '1', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Índices para tabela `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`);

--
-- Índices para tabela `id_type_user`
--
ALTER TABLE `id_type_user`
  ADD PRIMARY KEY (`id_type`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `event`
--
ALTER TABLE `event`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `id_type_user`
--
ALTER TABLE `id_type_user`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
