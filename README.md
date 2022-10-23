# MicroServicio_BuscadorAsignaturas
 
 Para crear el contenedor :
 docker build -t dockerbuscador .
 
 Para correr el contenedor :
 docker run -d -p  3000:3000 dockerbuscadr
 
 Para verificar el estatus del contenedor:
 docker ps
##Requests desde el microservicio en google cloud
1.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app/sedes

2.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app/facultades

3.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app/programas

4.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app/asignaturas

5.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app/grupos

## Requests desde el aPI gateway

1.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app:443/programas

2.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app:443/Asignaturas

3.https://spp-buscador-ms-abkctkgj5q-uc.a.run.app:443/Grupos

##Para actaulizar el google cloud con el repositorio

https://console.cloud.google.com/cloud-build/triggers?hl=es-419&_ga=2.67281041.1221665524.1666474968-322163406.1665059365&_gac=1.209317158.1666474969.EAIaIQobChMI6OyfgOf0-gIVE8iGCh0p2QrREAAYASAAEgKBifD_BwE

Ejecutar los activadores
