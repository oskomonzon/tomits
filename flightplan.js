/**
 * Flightplan
 * Script de deployment mediante SSH
 */

// Variables
var plan = require('flightplan'),
    destino = '~/www/funksmith.com.ar/';

// Configuración de SSH para producción
plan.target('production', [
  {
    host: 'hostname.com',
    username: 'user',
    port: 22,
    agent: process.env.SSH_AUTH_SOCK
  },
]);

// Comandos en localhost
plan.local(function(local) {
  // Si hiciera falta ejecutar un build, por ejemplo en Metalsmith:
  // local.log('Ejecutando Metalsmith');
  // local.exec('node index');

  local.log('Ejecutando Flightplan');
  local.log('Realizando transferencia de archivos...');
  // Obtengo el listado de archivos en la carpeta build/
  var filesToCopy = local.exec('find build -type f', {silent: true});
  // rsync de origen a destino en hosts
  local.transfer(filesToCopy, destino);
});

// Comandos en host remoto
plan.remote(function(remote) {
  remote.log('Moviendo contenido de ' + destino + 'build/ a ' + destino);
  remote.exec('cp -R ' + destino + 'build/* ' + destino);
  remote.rm('-rf ' + destino + 'build/');
  remote.log('Flightplan exitoso.-')
});