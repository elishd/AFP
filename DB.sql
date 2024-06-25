USE MASTER
GO

--====================================================================================
--						ESTRUCTURA DE BASE DE DATOS 
--====================================================================================

CREATE DATABASE MiEmpresa
GO


USE MiEmpresa
GO


CREATE TABLE Empresa (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL,
    RazonSocial NVARCHAR(100) NOT NULL,
	Documento NVARCHAR(20) NOT NULL,
	tipoDocumento NVARCHAR(3) NOT NULL,
	TipoPersona CHAR(1) NOT NULL,

    FechaRegistro DATETIME NOT NULL,	
	UsuarioRegistra NVARCHAR(50) NOT NULL,
	UsuarioModifica NVARCHAR(50)  NULL,
    FechaModificacion DATETIME  NULL,

	CONSTRAINT Chk_Empresa_TipoPersona CHECK (TipoPersona='N' OR TipoPersona='J'),
	CONSTRAINT Chk_Empresa_tipoDocumento CHECK (tipoDocumento='NIT' OR tipoDocumento='DUI')
);
GO

CREATE TABLE Departamento (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL,
	Nivel INT NOT NULL,
    IdEMpresa INT NOT NULL,
    FOREIGN KEY (IdEMpresa) REFERENCES Empresa(Id)
);
GO

CREATE TABLE Empleado (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100) NOT NULL,
	IdDepartamento INT NOT NULL,
    IdEMpresa INT NOT NULL,
    FOREIGN KEY (IdEMpresa) REFERENCES Empresa(Id),
	FOREIGN KEY (IdDepartamento) REFERENCES Departamento(Id)
);
GO


 
CREATE PROCEDURE ConsultarEmpresa
    @IdEmpresa INT
AS
BEGIN

    SELECT 
	   Id
      ,Nombre
      ,RazonSocial
      ,Documento
      ,tipoDocumento
      ,TipoPersona
      ,FechaRegistro
      ,UsuarioRegistra
      ,UsuarioModifica
      ,FechaModificacion
    FROM Empresa
    WHERE Id = case when @IdEmpresa>0 then @IdEmpresa else Id end;
END;
GO



CREATE PROCEDURE ConsultarDepartamentoPorEmpresa
    @IdEmpresa INT
AS
BEGIN
    SELECT 
	   d.Nombre,d.Nivel,
	   (select COUNT(e.id) from Empleado e where e.IdDepartamento=d.Id)as totalEmpleados
    FROM Departamento d
    WHERE d.IDEMpresa = @IdEmpresa;
END;
GO



--====================================================================================
--						DATOS INICIALES - TEST
--====================================================================================
INSERT INTO [dbo].[Empresa]
        ([Nombre],[RazonSocial],[Documento],[tipoDocumento],[TipoPersona],[FechaRegistro],[UsuarioRegistra],[UsuarioModifica],[FechaModificacion])
 VALUES ('EMPRESA 1 ','RONALD ELISH DURAN RAMIREZ','123212123','DUI','N','25-06-2024','ElISH.DURAN','JUAN.LOPEZ','27-06-2024')
GO

INSERT INTO [dbo].[Empresa]
        ([Nombre],[RazonSocial],[Documento],[tipoDocumento],[TipoPersona],[FechaRegistro],[UsuarioRegistra],[UsuarioModifica],[FechaModificacion])
 VALUES ('EMPRESA 2 ','EMPRESA 2 DE S.A DE S.V','12321212354321','NIT','J','25-06-2024','ElISH.DURAN','JUAN.LOPEZ','27-06-2024')
GO

INSERT INTO [dbo].[Empresa]
        ([Nombre],[RazonSocial],[Documento],[tipoDocumento],[TipoPersona],[FechaRegistro],[UsuarioRegistra],[UsuarioModifica],[FechaModificacion])
 VALUES ('EMPRESA 3 ','LUIS ANTONIO CAMPOS DIAS','543762596','DUI','N','25-06-2024','ElISH.DURAN','JUAN.LOPEZ','27-06-2024')
GO

INSERT INTO [dbo].[Empresa]
        ([Nombre],[RazonSocial],[Documento],[tipoDocumento],[TipoPersona],[FechaRegistro],[UsuarioRegistra],[UsuarioModifica],[FechaModificacion])
 VALUES ('EMPRESA 4 ','EMPRESA 4 DE S.A DE S.V','948473625334556','NIT','J','25-06-2024','ElISH.DURAN','JUAN.LOPEZ','27-06-2024')
GO




INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('OPERACIONES',1,1)
GO

INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('TECNOLOGIA DE LA INFORMACION',2,1)
GO

INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('COBROS',3,1)
GO
INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('RECURSOS HUMANOS',4,1)
GO

--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('OPERACIONES',1,2)
GO

INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('TECNOLOGIA DE LA INFORMACION',2,2)
GO

INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('COBROS',3,2)
GO
INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('RECURSOS HUMANOS',4,2)
GO
--+++++++++++++++++++++++++++++++++++++++++


INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('OPERACIONES',1,3)
GO

INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('TECNOLOGIA DE LA INFORMACION',2,3)
GO
--++++++++++++++++++++++++++++++++++++++++++++++++++++



INSERT INTO [dbo].[Departamento]
           ([Nombre],[Nivel],[IDEMpresa])
     VALUES
           ('TECNOLOGIA DE LA INFORMACION',2,4)
GO

--**************************************************************************


INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('JUAN LOPEZ' ,1 ,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('PEDRO DURAN' ,1 ,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('LUIS GARCIA' ,1 ,1)
GO

--********************************************************
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('JUAN SOLIS' ,2 ,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('PEDRO DURAN' ,2 ,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('GILMA PEREZ' ,2,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('NOE FLORES' ,2 ,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('SAUL AYALA' ,2,1)
GO
--***********************************************

INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('RICARDO RODRIGUEZ' ,3 ,1)
GO
INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('MIGUEL RAMIREZ' ,3 ,1)
GO
---******************
--***********************************************

INSERT INTO [dbo].[Empleado]
           ([Nombre],[IdDepartamento],[IdEMpresa])
     VALUES
           ('SANDRA GALEANO' ,4 ,1)
GO
