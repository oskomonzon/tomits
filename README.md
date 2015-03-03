# Funksmith v1.0.0
Estructura de proyecto básica para generar sitios estáticos en Metalsmith.

## Prerequisitos

* Git
* node.js
* Flightplan

## Instalación

Para hacer uso de este repositorio en un nuevo proyecto es necesario clonarlo y reconfigurar el origen:
```
git clone https://github.com/oskomonzon/funksmith.git
git remote rename origin upstream
git remote add origin URL_A_NUEVO_REPOSITORIO
```

Instalar dependencias:
```
npm install
```

## Uso
### Building
El proceso de building está declarado en el archivo **index.js**, se ejecuta con el comando:
```
node index
```

### Deployment
Para la distribución se utiliza el módulo *Flightplan* de *node.js* a través de **SSH**, la configuración se encuentra en el archivo **flightplan.js**.
Es recomendable tener acceso al servidor mediante una clave privada sin contraseña para poder ejecutar el proceso sin interrupciones.
Tanto el equipo local como el servidor remoto deben soportar ***rsync***.

Se lleva a cabo con el comando:
```
fly production
```
-------------------------------------------------------------------------
