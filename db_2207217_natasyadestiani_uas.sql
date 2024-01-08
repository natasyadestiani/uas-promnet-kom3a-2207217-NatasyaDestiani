-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2024 at 02:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2207217_natasyadestiani_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory_natasya`
--

CREATE TABLE `inventory_natasya` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(200) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `harga_satuan` int(11) NOT NULL,
  `lokasi` varchar(200) NOT NULL,
  `deskripsi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory_natasya`
--

INSERT INTO `inventory_natasya` (`id`, `nama_barang`, `jumlah`, `harga_satuan`, `lokasi`, `deskripsi`) VALUES
(1, 'Laptop', 20, 8500000, 'Bandung', 'Laptop Asus 14 inch, desain tipis dan ringan'),
(2, 'Tas', 50, 250000, 'Jakarta', 'Tas kualitas premium, fleksibel dan mudah dibawa'),
(3, 'Handphone', 35, 5000000, 'Denpasar', 'Mempermudah komunikasi dan interaksi sosial'),
(4, 'Sepatu', 100, 300000, 'Manokwari', 'Bahan berkualitas, dan nyaman untuk dipakai'),
(5, 'Printer', 70, 1800000, 'Bandung', 'Menghasilkan cetakan berkualitas tinggi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory_natasya`
--
ALTER TABLE `inventory_natasya`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory_natasya`
--
ALTER TABLE `inventory_natasya`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
