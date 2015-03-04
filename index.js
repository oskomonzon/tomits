/**
 * Funksmith v1.0
 * Estructura de proyecto básica en Metalsmith.
 */

// Dependencias
var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    prefixer    = require('metalsmith-autoprefixer'),
    sass        = require('metalsmith-sass'),
    imagemin    = require('metalsmith-imagemin'),
    handlebars  = require('handlebars'),
    fs          = require('fs'),
    concat      = require('metalsmith-concat'),
    uglifly     = require('metalsmith-uglify'),
    sitemap     = require('metalsmith-sitemap'),
    watch       = require('metalsmith-watch'),
    serve       = require('metalsmith-serve');

// Registro de Partials
handlebars.registerPartial('head', fs.readFileSync(__dirname + '/templates/partials/head.hbt').toString());
handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

// Build Process
Metalsmith(__dirname)
  .use(collections({
    pages: {
      pattern: 'content/pages/*.md' // Colección de páginas
    },
    posts: {
      pattern: 'content/posts/*.md', // Colección de posts
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(sass({
    outputStyle: 'compressed'
  }))
  .use(prefixer())  // Agrega los vendor prefix a las hojas de estilo
  .use(imagemin())  // Optimiza las imágenes
  .use(concat({
    files: 'scripts/*.js',  // Concatenar los archivos de la carpeta 'scripts' en un archivo 'main.js'
    output: 'scripts/main.js'
  }))
  .use(uglifly({
    filter: ['scripts/main.js']  // Minimizar 'main.js' en 'main.min.js'
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title' // Generar permalinks: nombreDeColeccion/titulo.
  }))
  .use(templates('handlebars'))
  .use(sitemap({
    output: 'sitemap.xml', // Ubicación del sitemap
    hostname: 'http://www.example.com.ar', // Hostname para las URL (opcional)
    modifiedProperty: 'modified', // Clave para la propiedad de última modificación
    defaults: { // Propiedades para asignar por defecto
      priority: 0.5,
      changefreq: 'daily'
    }
  }))
  .destination('./build')
  .use(watch())
  .use(serve())
  .build(function(err) {
    if (err) { console.log(err); } // Por algún motivo Metalsmith no hace el build sin el error handler.-
  });
