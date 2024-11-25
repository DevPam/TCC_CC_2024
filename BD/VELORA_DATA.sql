CREATE DATABASE VELORA_DATA;
Use VELORA_DATA;

CREATE TABLE Projeto (
    id_proj INTEGER PRIMARY KEY IDENTITY,
    titulo VARCHAR(100),
    status VARCHAR(100),
    descr VARCHAR(300),
    cliente VARCHAR(100),
    imagem VARCHAR(100),
    fk_PDCA_id_pdca INTEGER,
    fk_Documento_id_doc INTEGER
);

CREATE TABLE Usuario (
    id_usuario INTEGER PRIMARY KEY,
    Nome VARCHAR(100),
    email VARCHAR(100),
    perfil VARCHAR(100),
    senha VARCHAR(10),
    foto VARCHAR(100)
);


CREATE TABLE Documento (
    id_doc INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    tipo_doc VARCHAR(10)
);

CREATE TABLE Tarefa (
    id_tarefa INTEGER PRIMARY KEY,
    titulo VARCHAR(100),
    data_inic DATE,
    data_fim DATE,
    tipo_urgencia VARCHAR(100),
    descr VARCHAR(300),
    etapa VARCHAR(100),
    pessoal BIT,
    fk_Usuario_id_usuario INTEGER,
    fk_Projeto_id_proj INTEGER
);

CREATE TABLE PDCA (
    id_pdca INTEGER PRIMARY KEY,
    titulo VARCHAR(100),
    descr VARCHAR(300),
    data_inic DATE,
    data_fim DATE,
    etapa VARCHAR(100),
    FK_Usuario_id_usuario INTEGER
);
 
ALTER TABLE Projeto ADD CONSTRAINT FK_Projeto_2
    FOREIGN KEY (fk_PDCA_id_pdca)
    REFERENCES PDCA (id_pdca)
    ON DELETE CASCADE;
 
ALTER TABLE Projeto ADD CONSTRAINT FK_Projeto_3
    FOREIGN KEY (fk_Documento_id_doc)
    REFERENCES Documento (id_doc)
    ON DELETE CASCADE;
 
ALTER TABLE Tarefa ADD CONSTRAINT FK_Tarefa_2
    FOREIGN KEY (fk_Usuario_id_usuario)
    REFERENCES Usuario (id_usuario)
    ON DELETE CASCADE;
 
ALTER TABLE Tarefa ADD CONSTRAINT FK_Tarefa_3
    FOREIGN KEY (fk_Projeto_id_proj)
    REFERENCES Projeto (id_proj)
    ON DELETE CASCADE;
 
ALTER TABLE PDCA ADD CONSTRAINT FK_PDCA_2
    FOREIGN KEY (FK_Usuario_id_usuario)
    REFERENCES Usuario (id_usuario)
    ON DELETE NO ACTION;