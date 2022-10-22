# MicroServicio_BuscadorAsignaturas
 
 Para crear el contenedor :
 docker build -t dockerbuscador .
 
 Para correr el contenedor :
 docker run -d -p  3000:3000 dockerbuscadr
 
 Para verificar el estatus del contenedor:
 docker ps
 
## Requests

1.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app:443/programas

2.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app:443/Asignaturas

3.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app:443/Grupos
