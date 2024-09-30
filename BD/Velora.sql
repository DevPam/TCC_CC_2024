/* DER_logico: */

CREATE TABLE Projeto (
    id_proj INTEGER PRIMARY KEY,
    titulo VARCHAR,
    status VARCHAR,
    desc VARCHAR,
    cliente NCHAR,
    imagem VARCHAR,
    fk_PDCA_id_pdca INTEGER,
    fk_Documento_id_doc INTEGER
);

CREATE TABLE Usuario (
    rm INTEGER PRIMARY KEY,
    Nome VARCHAR,
    email VARCHAR,
    perfil VARCHAR,
    senha VARCHAR,
    foto VARCHAR
);

CREATE TABLE Documento (
    id_doc INTEGER PRIMARY KEY,
    nome VARCHAR,
    tipo_doc VARCHAR
);

CREATE TABLE Tarefa (
    id_tarefa INTEGER PRIMARY KEY,
    titulo VARCHAR,
    data_inic DATE,
    data_fim DATE,
    tipo_urgencia VARCHAR,
    desc VARCHAR,
    fk_Usuario_rm INTEGER,
    fk_etapa_id_etapa INTEGER,
    fk_Projeto_id_proj INTEGER
);

CREATE TABLE PDCA (
    id_pdca INTEGER PRIMARY KEY,
    titulo VARCHAR,
    desc VARCHAR,
    data_inic DATE,
    data_fim DATE,
    FK_Usuario_rm INTEGER
);

CREATE TABLE etapa (
    id_etapa INTEGER PRIMARY KEY,
    nome VARCHAR,
    desc VARCHAR
);

CREATE TABLE Etapa_PDCA (
    id_etapa_pdca INTEGER PRIMARY KEY,
    etapa VARCHAR,
    desc VARCHAR,
    fk_PDCA_id_pdca INTEGER
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
    FOREIGN KEY (fk_Usuario_rm)
    REFERENCES Usuario (rm)
    ON DELETE CASCADE;
 
ALTER TABLE Tarefa ADD CONSTRAINT FK_Tarefa_3
    FOREIGN KEY (fk_etapa_id_etapa)
    REFERENCES etapa (id_etapa)
    ON DELETE RESTRICT;
 
ALTER TABLE Tarefa ADD CONSTRAINT FK_Tarefa_4
    FOREIGN KEY (fk_Projeto_id_proj)
    REFERENCES Projeto (id_proj)
    ON DELETE CASCADE;
 
ALTER TABLE PDCA ADD CONSTRAINT FK_PDCA_2
    FOREIGN KEY (FK_Usuario_rm)
    REFERENCES Usuario (rm)
    ON DELETE CASCADE;
 
ALTER TABLE Etapa_PDCA ADD CONSTRAINT FK_Etapa_PDCA_2
    FOREIGN KEY (fk_PDCA_id_pdca)
    REFERENCES PDCA (id_pdca)
    ON DELETE RESTRICT;