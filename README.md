# SistemaInmobiliaria

## Integrantes

- Juan Pablo Forno
- Daniel Pisa
- Facundo Pradells
- Gonzalo Migliore
- Diego Mingonette

## .ENV

- MONGODB=mongodb+srv://admin:yfcmgEKp76PQpJM@cluster0.ouhnn.mongodb.net/test
- CLAVESECRETA: proyecto_tp2

## Descripción

el proyecto consta de un aplicacion web sobre una inmobiliaria , el detalle de las funcionalidades son :

- Login
- Registro(con validaciones)
- Cambio de roles(administrador/usuario) y eliminación de usuarios
- CRUD de propiedades(con permiso solo administrador)
- Coleccion de propiedades
- Filtro de vista (alquiler/venta)
- Calculo de promedio filtrando por tipo de operacion y barrio de la propiedad

## Listado de endpoint

- GET PROPIEDADES /propiedades/

- GET PROPIEDAD POR ID /propiedades/:[ID]

- POST PROPIEDADES /propiedades/

- PUT PROPIEDADES /propiedades/

- DELETE PROPIEDADES /propiedades/

- FILTRAR POR VENTA/ALQUILER /propiedades/filtrar/tipo

- OBTENER PROMEDIO VENTA O ALQUILER /propiedades/filtrar/promedio

- POST REGISTRO USUARIO /usuarios/

- POST LOGIN USUARIO /usuarios/login

- PUT USUARIO /usuarios/

- GET USUARIO /usuarios/

- DELETE USUARIO. /usuarios/:[ID]
