CREATE TABLE `documento` (
  `iddoc` int NOT NULL,
  `nome` varchar(150) NOT NULL,
  `tipo_doc` varchar(45) NOT NULL,
  PRIMARY KEY (`iddoc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tarefa` (
  `idtarefa` int NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `data_inic` date NOT NULL,
  `data_fim` date NOT NULL,
  `tipo_urgencia` varchar(45) NOT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `fk_idusuario` int DEFAULT NULL,
  `fk_idetapa` int DEFAULT NULL,
  `fk_idprojeto` int DEFAULT NULL,
  PRIMARY KEY (`idtarefa`),
  KEY `fk_usuario_idusuario` (`fk_idusuario`),
  KEY `fk_etapa_idetapa` (`fk_idetapa`),
  KEY `fk_projeto_idprojeto` (`fk_idprojeto`),
  CONSTRAINT `fk_etapa_idetapa` FOREIGN KEY (`fk_idetapa`) REFERENCES `etapa` (`idetapa`),
  CONSTRAINT `fk_projeto_idprojeto` FOREIGN KEY (`fk_idprojeto`) REFERENCES `projeto` (`idprojeto`),
  CONSTRAINT `fk_usuario_idusuario` FOREIGN KEY (`fk_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `documento` (
  `iddoc` int NOT NULL,
  `nome` varchar(150) NOT NULL,
  `tipo_doc` varchar(45) NOT NULL,
  PRIMARY KEY (`iddoc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `etapa` (
  `idetapa` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `desc` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idetapa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `etapa_pdca` (
  `idetapa_pdca` int NOT NULL,
  `etapa` varchar(45) NOT NULL,
  `desc` varchar(300) NOT NULL,
  `fk_idpdca` int DEFAULT NULL,
  PRIMARY KEY (`idetapa_pdca`),
  KEY `fk_pdca_idpdca_etapapdca` (`fk_idpdca`),
  CONSTRAINT `fk_pdca_idpdca_etapapdca` FOREIGN KEY (`fk_idpdca`) REFERENCES `pdca` (`idpdca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `pdca` (
  `idpdca` int NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `data_inic` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  `fk_idusuario` int DEFAULT NULL,
  PRIMARY KEY (`idpdca`),
  KEY `fk_usuario_idusuario_pdca` (`fk_idusuario`),
  CONSTRAINT `fk_usuario_idusuario_pdca` FOREIGN KEY (`fk_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `proj_pessoal` (
  `idproj_pessoal` int NOT NULL,
  `desc` varchar(100) DEFAULT NULL,
  `fk_idusuario` int DEFAULT NULL,
  PRIMARY KEY (`idproj_pessoal`),
  KEY `fk_usuario_idusuario_idx` (`fk_idusuario`),
  CONSTRAINT `fk_usuario_idusuario_pessoal` FOREIGN KEY (`fk_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `projeto` (
  `idprojeto` int NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `cliente` varchar(100) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `fk_idpdca` int DEFAULT NULL,
  `fk_iddoc` int DEFAULT NULL,
  `fk_pdca_idpdca` int DEFAULT NULL,
  `fk_documento_iddoc` int DEFAULT NULL,
  PRIMARY KEY (`idprojeto`),
  KEY `fk_PDCA_idpdca_idx` (`fk_pdca_idpdca`),
  KEY `fk_documento_iddoc_idx` (`fk_documento_iddoc`),
  KEY `fk_pdca_idpdca` (`fk_idpdca`),
  KEY `fk_documento_iddoc` (`fk_iddoc`),
  CONSTRAINT `fk_documento_iddoc` FOREIGN KEY (`fk_iddoc`) REFERENCES `documento` (`iddoc`),
  CONSTRAINT `fk_pdca_idpdca` FOREIGN KEY (`fk_idpdca`) REFERENCES `pdca` (`idpdca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tarefa` (
  `idtarefa` int NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `data_inic` date NOT NULL,
  `data_fim` date NOT NULL,
  `tipo_urgencia` varchar(45) NOT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `fk_idusuario` int DEFAULT NULL,
  `fk_idetapa` int DEFAULT NULL,
  `fk_idprojeto` int DEFAULT NULL,
  PRIMARY KEY (`idtarefa`),
  KEY `fk_usuario_idusuario` (`fk_idusuario`),
  KEY `fk_etapa_idetapa` (`fk_idetapa`),
  KEY `fk_projeto_idprojeto` (`fk_idprojeto`),
  CONSTRAINT `fk_etapa_idetapa` FOREIGN KEY (`fk_idetapa`) REFERENCES `etapa` (`idetapa`),
  CONSTRAINT `fk_projeto_idprojeto` FOREIGN KEY (`fk_idprojeto`) REFERENCES `projeto` (`idprojeto`),
  CONSTRAINT `fk_usuario_idusuario` FOREIGN KEY (`fk_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuario` (
  `idusuario` int NOT NULL,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `perfil` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
