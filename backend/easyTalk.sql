-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 19-Dez-2019 às 20:13
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
  `id_responsible` int(11) NOT NULL,
  `coffe` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `event`
--

INSERT INTO `event` (`id_event`, `name_event`, `description_event`, `date_event`, `date_create`, `id_active`, `location`, `id_category`, `id_user`, `id_responsible`, `coffe`) VALUES
(1, 'React', 'Top', '2019-12-16', '2019-12-15 04:18:26', 1, 'asd', '1', 1, 1, 'sim'),
(2, 'Gabriella', 'as', '2019-12-10', '2019-12-17 23:48:50', 0, 'Escola senai de informatica', '1', 1, 0, 'sim'),
(3, 'Gabriel Moraes', 'asd', '2019-12-04', '2019-12-17 23:50:44', 0, 'Escola senai de informatica', '1', 1, 0, 'sim');

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
(2, 'User'),
(3, 'Employee');

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
(1, 'Gabriel', 'gmmartins06@gmail.com', '11994010204', '123456', 1),
(2, 'Lucas', 'l@l.com', '123456', '123', 2),
(3, 'Gabriella', 'gabi@gmail.com', '11123132', '123', 3),
(4, 'Gabriel Moraes', 'a@a.com', '994010204', '123', 3),
(5, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '1', 3),
(6, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '1', 3),
(7, 'Gabriella', 'gabi@gmail.com', '11123132', '1', 3),
(8, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '1', 3),
(9, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '123', 3),
(10, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '2', 3),
(11, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '45', 3),
(12, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '4', 3),
(13, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '2', 3),
(14, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '123', 3),
(15, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '12', 3),
(16, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '3', 3),
(17, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '3', 3),
(18, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '3', 3),
(19, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '3', 3),
(20, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '2', 3),
(21, 'Gabriel Moraes', 'gmmartins06@gmail.com', '994010204', '3', 3),
(22, 'Gabriella', 'gabi@gmail.com', '11123132', '3', 3),
(23, 'Gabriel Moraes', 'g@g.com', '994010204', '1', 3),
(24, 'Leonardo', 'leo@leo.com', '1195808807', '123', 3);

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
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `id_type_user`
--
ALTER TABLE `id_type_user`
  MODIFY `id_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
