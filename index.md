---
layout: default
---

coreJS
======

Este proyecto tiene como objetivo el de ofrecer un framework para el desarrollo de webapps, resolviendo muchos de los problemas que surjen al desarrollar este tipo de software.



Índice
======

[TOC]

Repositorios
============

Este proyecto está alojado en los siguientes repositorios **[GIT](http://git-scm.com/)**:


* **coreJS Build**
En este repositorio define el proceso de construcción y otras tareas automatizadas a través de **[Grunt](http://gruntjs.com/)**.
```
git@bitbucket.org:mundoreader/corejs-build.git
```

* **coreJS Base**
En este repositorio se guarda los módulos principales de toda webapp (localización, integración con backend, factorías, configuración, ...)
```
git@bitbucket.org:mundoreader/corejs-base.git
```

* **coreJS [projectName] Modules**
En este repositorio almacena los módulos de la webapp específica en función del `[projectName]`:
```
git@bitbucket.org:mundoreader/[projectName]-corejs-app.git
git@bitbucket.org:mundoreader/bookland-corejs-app.git
git@bitbucket.org:mundoreader/mercurio-corejs-app.git
git@bitbucket.org:mundoreader/orpheus-corejs-app.git
```

* Los **desarrolladores de webapps** trabajarán principalmente con los repositorios de **coreJS [projectName] Modules**, creando módulos específicos.
* Los **desarrolladores del coreJS** trabajarán principalmente con el repsitorio de **coreJS Base**



----------

Navegadores Soportados [Pendiente]
======================


Stack Tecnológico
=================

Esta apartado describe todas las tecnologías usadas para el desarrollo de aplicaciones web y pará qué sirven cada una de ellas.

## Core ##
  * **[Backbone](http://backbonejs.org/)** 1.1.0: Librería arquitectural que provee elementos básicos para el desarrollo de aplicaciones web
  * **[Marionette](http://marionettejs.com/)** 1.4.1: Plugin para Backbone que ofrece funcionalidades neccesarias para el desarrollo de grandes aplicaciones web.
  * **[RequireJS](http://requirejs.org/)** 2.1.5: Librería para la carga de módulos asíncronos AMD.

  * **[JQuery](http://jquery.com/)** 1.9.0: Librería para manipulación del DOM y soporte AJAX.
  * **[Underscore](http://underscorejs.org/)** 1.5.2: Dependencia de Backbone. Librería de útiles para el manejo de estructuras de datos.
  * **[Handlebars](http://handlebarsjs.com/)** 1.3.0: Librería para la compilación y renderizado de plantillas.
  * **[Modernizr](http://modernizr.com/)** 2.6.2: Librería que ofrece soporte a la detección de funcionalidades del navegador del dispositivo.

## i18n ##
  * **[i18next](http://i18next.com/)** 1.7.1: Librería de internacionalización con soporte para textos, géneros y plurales.
  * **[numeral](http://numeraljs.com/)** 1.5.3: Librería para la internacionalización de unidades métricas.
  * **[momentJS](http://momentjs.com/)** 2.5.0: Librería para la manipulación de fechas.

## Testing ##
  * **[mocha](http://visionmedia.github.io/mocha/)** 1.12.0: Framework para el desarrollo de test unitarios en JS.
  * **[Chai](http://chaijs.com/)** 1.8.1: DSL de mocha, para el desarrollo de test con TDD o BDD.
  * **[SinonJS](http://sinonjs.org/)** 1.7.3: Librería para mocks y stubs en JS.
  * **[PhantomJS](http://phantomjs.org/)** 1.9.7: Navegador webkit headless para test de integración.
  * **[VirtualBox](https://www.virtualbox.org/)**: Gestión de máquinas virtuales, para poder probar la aplicación web en diferentes navegadores de diferentes SO.

## Construcción y desarrollo ##
  * **[curl](http://curl.haxx.se/)** 7.32.0: Lo utilizaremos principalmente para recuperar paquetes a instalar.
  * **[GIT](http://git-scm.com/)**: Dependencia de npm para instalar paquetes.
  * **[ruby](https://www.ruby-lang.org/es/)** 2.0.0-p353: Dependencia de [Compass](http://compass-style.org/).
  * **[PhantomJS](http://phantomjs.org/)** 1.9.7: Para ejecutar tests unitarios y como navegador del SEO-server.
  * **[Yeoman](http://yeoman.io/)** 1.1.0: Creación de arquitetipos y sus componentes
  * **[Grunt](http://gruntjs.com/)** 0.4.2 (grunt-cli 0.1.11): Definición del proceso de construcción del front o de cualquier tarea repetitiva automatizable de éste.
  * **[Bower](http://bower.io/)** 1.2.8: Gestión de dependencias de la aplicación web (JQuery, Backbone, Underscore, etc.)
  * **[node](http://nodejs.org/)** 0.10.24: Contenedor de aplicaciones web en JS.
    * En desarrollo lo usaremos para levantar la aplicación web.
    * En producción lo usaremos como proxy para que la aplicación web sea indexable.
    * En pruebas lo utilizaremos para arrancar las pruebas unitarias con mocha+phamtomJS
  * **[npm](https://npmjs.org/)** 1.3.21: Gestor de paquetes de node
  * **[compass](http://compass-style.org/)** 0.12.2: Framework para el desarrollo de hojas de estilos en **[SASS](http://sass-lang.com/)**. Lo usaremos principalmente para su compilación y generación de sprites.

## Entorno de desarrollo ##
  * **[Sublime](http://www.sublimetext.com/)**: Se recomienda por su agilidad, versatilidad y por su capacidad de poder propagar fácilmente su configuración para asegurar que todos los desarrolladores trabajan bajo la misma configuración.
    * Plugins recomendados (instalables desde el [Package Manager]())
        * **[JSHint Gutter](https://github.com/victorporof/Sublime-JSHint)**
        * **[HTML-CSS-JS Prettify](https://github.com/victorporof/Sublime-HTMLPrettify)**
        * **[Emmet](https://github.com/sergeche/emmet-sublime)**
        * **[SASS](https://sublime.wbond.net/packages/Sass)**
        * **[SASSBeautify](https://github.com/badsyntax/SassBeautify)**
        * **[DockBlockr](https://github.com/spadgos/sublime-jsdocs)**
        * ...
    * Snippets
        * [pendiente]
  * **[Netbeans](https://netbeans.org/)**: [Pendiente]
  * **[WebStorm](http://www.jetbrains.com/webstorm/)**: [Pendiente]

## Instalación de las Herramientas de Desarrollo ##

### OSX ###

* Instalar Xcode + CommandLine Tools
* Instalar [Homebrew](http://brew.sh/):
```
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```
* Instalar [GIT](http://git-scm.com/)
```
brew install git
git config --global user.name "Your Full Name"
git config --global user.email "Your Email Address"
```

* Instalar [node + npm](http://nodejs.org/)
```
brew install node
```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)
```
sudo npm install -g mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
```

* Instalar [compass](http://compass-style.org/install/)
```
gem update --system
gem install compass
```


* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)
```
npm install -g yo
```
### Ubuntu 13.04 ###

* Installar curl
```
sudo apt-get install curl
```

* Instalar rvm + ruby
```
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
rvm install 2.0.0-p353
rvm use 2.0.0-p353 --default
ruby -v
```

Si se quiere evitar instalar la documentación de cada paquete de forma local, ejecutar el siguiente comando:
```
echo "gem: --no-ri --no-rdoc" > ~/.gemrc
```
* Instalar nodejs + npm
```
sudo apt-get install python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```
* Instalar compass
```
gem update --system
gem install compass
```
* Instalar [GIT](http://git-scm.com/)
```
sudo apt-get install git
```
* Instalar [PhamtonJS](http://phantomjs.org/download.html)
```
sudo npm install -g mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
```
* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)
```
npm install -g yo
```
**NOTA**: Si al arrancar el proyecto sale muchas veces el error `Waiting…Fatal error: watch ENOSPC`, ejecutar el siguiente comando:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
**NOTA**: Si Bower tiene problemas para descargar los paquetes, es probable que sea debido a que trate de obtener los paquetes por protocolo GIT en lugar de HTTPS, para cambiarlo basta con ejecutar el siguiente comando:
```
git config --global url."https://".insteadOf git://
```


----------


Convenciones y Estilos
======================
Es importante establecer un estilo de código unificado para mantener un mínimo de calidad, mantenibilidad y legibilidad del código. El objetivo es que indepemdientemente de los miembros del equipo, el código tenga aspecto de haberlo desarrollado una única persona.
En los proyectos web nos centraremos en los siguientes lenguajes:

## HTML ##

**Más info**

* http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml#HTML_Style_Rules

## Hojas de Estilos ##

**Archivos**
```
 _this-is-a-large-name-component.scss // componentes app
 this-is-a-large-name-app-styles.scss // estilos generales de la app
```
**Selectores**
```
/*
 * BEM 
 * Stands for "Block", "Element", "Modifier"
 */
 
.nav                     // bloque
.nav__item {}            // elemento de bloque
.nav__item--selected {}  // modificador de elemento de bloque
.nav--secondary {}       // modificador de bloque
.nav--secondary__item {} // elemento de bloque con modificador
```
Ejemplo:
```
.nav {}
    .nav__item {}
    .nav__item--selected {}
.nav--secondary {}
    .nav--vertical__item {}
```

**Más info**

* https://github.com/stubbornella/csslint/wiki
* https://drupal.org/node/1887862
* http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml#CSS_Validity
* https://www.thinkup.com/docs/contribute/developers/writecode/styleguide/css.html
* http://csslint.net/

## Imágenes ##

**Archivos**
```
 this-is-a-large-name-folder    // folder img
 this-is-a-large-name-image.png // img
```

## JavaScript ##

La convención de código que seguiremos para el desarrollo de JavaScript será la definida en [IdiomaticJS](https://github.com/rwaldron/idiomatic.js/).

A grandes rasgos:
```
// fileNameLikeThis.js

var CONSTANTS_LIKE_THIS = 3.14;

var variableNamesLikeThis = true;

var functionNamesLikeThis = function() { };

var ConstructorNamesLikeThis = function() { };

var objectNameLikeThis = new ConstructorNameLikeThis();

var objectNameLikethis.methodNamesLikeThis = function() { };
```

**Más info**

* [Resumen breve de IdiomaticJS (Slides)](http://slid.es/antai/js_con_estilo)

## Comentarios ##

En línea:
```
// Comentario
```
En bloque:
```
/**
 * Nombre componente 
 * Use: 
 * Example:
 */
```

**Más Info**

* https://github.com/b-studios/doc.js
* http://net.tutsplus.com/tutorials/javascript-ajax/documenting-javascript-with-yuidoc/
* http://en.wikipedia.org/wiki/JSDoc
* http://usejsdoc.org/

* http://smartcomments.github.io/
* http://www.lsauer.com/2013/05/javascript-documentation-generator.html
* http://jashkenas.github.io/docco/

----------


Arquitectura de Aplicación
==========================

![Diagrama de aplicación básico](https://confluence.bq.com/download/attachments/27364784/backbone.jpg)
![Diagrama de aplicación modular](https://confluence.bq.com/download/attachments/27364784/modular.png)

coreJS Base
===========

Llamamos coreJS Base al conjunto de tecnologías y modulos necesarios que la mayoría de las webapps tienen.

## Estructura de archivos ##
```
.
├── init-env.sh             // Script de inicialización del proyecto
├── pom.xml                 // Maven stuff
├── package.json            // Dependencias de desarrollo (npm)
├── bower.json              // Dependencias con librerías externas
├── README.md               // Este documento
├── target                  // Workspace de temporales de Grunt
├── src/test                    // Workspace de test
└── src/main/webapp         // Workspace de desarollo de Grunt
    ├── stylesheets         // Hojas de estilo SASS
    └── scripts
        ├── app.js          // Contexto de aplicación
        ├── config.js       // Definición de las dependencias RequireJS
        ├── main.js         // Script que arranca la aplicación
        ├── engine          // Componentes internos de la aplicación
        │   ├── services.js // Comunicación con Backend
        │   ├── common.js   // Parámetros de la app
        │   ├── factory.js  // Factoría de objetos
        │   ├── locale.js   // Módulo de i18n
        │   ├── logger.js   // Módulo de log
        │   ├── polyfills.js// Polyfill varios
        │   ├── utils.js    // Funciones varias
        │   ├── user.js     // Autenticación y gestión de usuario
        │   ├── resource.js // Librería para realizar peticiones a backend
        │   ├── session.js  // Gestión d elos datos de sesión del usuario
        │   ├── router.js   // Enrutador de la webapp
        │   ├── ...
        │   └── start.js    // Inicializador de módulo
        └── vendor          // Librerías externas ajenas a Bower

```

## Configuración ##

La aplicación tiene un documento de parámetros y constantes por defecto en el repositorio de la aplicación con nombre`corejs-[projectName]-app`, en `src/main/webapp/res/config/config.json`, que permiten la configuración de la aplicación, así como su fácil acceso para el resto de los módulos.

A conitnuación se explican cada uno de los parámetros. 

mode
: Establece el entorno general de la aplicación, ofrece la oportunidad a los desarrolladores de cambiar el comportamiento de la aplicación dependiendo del entorno (formularios pre-cumplimentados, mocks, stubs, etc).

* Tipo: String
* Por defecto: undefined (producción)
* Obligatorio: no
* Acceso: `app.common.mode`

version
: Establece la versión pública de la aplicación. Nos permite enviar la versión con la que se están generando las trazas para el logToServer.

* Tipo: String
* Por defecto: `0.0`
* Obligatorio: si
* Acceso: `app.common.version`

appName
: Establece el nombre interno de la aplicación web. Nos permite identificar qué aplicación realiza qué operaciones.

* Tipo: String
* Por defecto: `WEBAPP`
* Obligatorio: no
* Acceso: `app.common.appName`

clientType
: Establece el tipo de cliente. Normalmente se usa para backends que ofrecen servicios a diferentes tipos de cliente y cada uno puede tener necesidades específicas.

* Tipo: String
* Por defecto: `WEB`
* Obligatorio: no
* Acceso: `app.common.clientType`

lang
: Establece el idioma por defecto

* Tipo: String
* Por defecto: `es-ES`
* Obligatorio: no
* Acceso: `app.common.lang`

logLevel
: Establece el nivel de log que se desea registrar
`0` - trace
`1` - debug
`2` - info
`3` - warn
`4` - error
`5` - silent

* Tipo: Integer
* Por defecto: `0`
* Obligatorio: no
* Acceso: `app.log.getLevel()`

logBuffer
: Establece la cantidad de logs a almacenar hasta que se envía al servidor

* Tipo: Integer
* Por defecto: `10`
* Obligatorio: no
* Depende de: `logToServer`

logToServer
: Establece si se desea enviar logs al servidor

* Tipo: Boolean
* Por defecto: `false`
* Obligatorio: no

logServerEndpoint
: Establece la ruta del servidor a donde enviar los logs

* Tipo: String
* Por defecto: `endpoint/`
* Obligatorio: no
* Depende de: `logToServer`

resourcesEndPoint
: Establece la ruta base hasta los recursos del backend.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

oauthEndPoint
: Establece la ruta base hasta el servidor de OAuth para la autenticación.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

oauthClientId
: ClientId proporcionado por el proveedor del servicio de OAuth correspondiente.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

oauthSecret
: SecretId proporcionado por el proveedor del servicio de OAuth correspondiente.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

oauthService
: Nombre del servicio de OAuth.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

iamEndPoint
: Establece la ruta base hasta el servidor de IAM.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

iamClientId
: ClientId proporcionado por el proveedor del servicio de IAM.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

iamSecret
: SecretId proporcionado por el proveedor del servicio de IAM correspondiente.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

claimAud
: Valor de la variable `aud` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).

* Tipo: String
* Por defecto: ---
* Obligatorio: si

claimGrantType
: Valor de la variable `grant-type` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).

* Tipo: String
* Por defecto: ---
* Obligatorio: si

claimScopes
: Valor de la variable `scopes` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para una sesión anónima.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

claimScopesUser
: Valor de la variable `scopes` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para usuarios autenticados.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

claimScopesRegister
: Valor de la variable `scopes` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para registrar usuarios nuevos **En formato Array!**.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

claimExp
: Valor de la variable `exp` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html).

* Tipo: Integer
* Por defecto: 3500 (segundos)
* Obligatorio: no

tokenRefreshtime
: Tiempo para volver a solicitar una nueva autenticación.

* Tipo: Integer
* Por defecto: 3000000
* Obligatorio: no

Además la aplicación se puede configurarse de varias formas, estableciendo los parámetros en el código a través de una variable global de configuración `CFG`, o en tiempo de ejecución a través del archivo `app/res/config/config.json`.


### Configuración en Variable Global ###

Se puede establecer la configuración de la aplicación definiendo los parámetros en una variable global que deberá llamarse **`CFG`**. Esta variable global debe de estar **disponible antes de que se cargue cualquier JavaScript** de la aplicación. Unos ejemplos:

**Producción (sin logToServer)**
```
var CFG = {
    "version": "0.1",
    "appName": "corejs-app",
    "resourcesEndPoint": "http://resources.int.bqws.io/v1.0/",
    "oauthEndPoint": "http://oauth.int.bqws.io/v1.0/",
    "oauthClientId": "temp-client",
    "oauthSecret": "temp-secret",
    "oauthService": "silkroad",
    "iamEndPoint": "http://iam.int.bqws.io/v1.0/",
    "iamClientId": "providedClientId",
    "iamSecret": "providedSecret",
    "claimAud": "http://iam.bqws.io",
    "claimGrantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
    "claimScopes": "resources:bookland:read_catalog iam:user:create iam:user:delete iam:user:read",
    "claimScopesUser": "resources:bookland:read_catalog iam:user:create",
    "claimsScopesRegister": ["resources:bookland:read_catalog", "iam:user:read"],
    "claimExp": "3500"
};
```

**Producción (con logToServer)**
```
var CFG = {
    "version": "0.1",
    "appName": "corejs-app",
    "logLevel": 0,
    "logBuffer": 20,
    "logToServer": true,
    "logServerEndpoint": "server/log/endpoint/",
    "resourcesEndPoint": "http://resources.int.bqws.io/v1.0/",
    "oauthEndPoint": "http://oauth.int.bqws.io/v1.0/",
    "oauthClientId": "temp-client",
    "oauthSecret": "temp-secret",
    "oauthService": "silkroad",
    "iamEndPoint": "http://iam.int.bqws.io/v1.0/",
    "iamClientId": "providedClientId",
    "iamSecret": "providedSecret",
    "claimAud": "http://iam.bqws.io",
    "claimGrantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
    "claimScopes": "resources:bookland:read_catalog iam:user:create iam:user:delete iam:user:read",
    "claimScopesUser": "resources:bookland:read_catalog iam:user:create",
    "claimsScopesRegister": ["resources:bookland:read_catalog", "iam:user:read"],
    "claimExp": "3500"
};
```

**Desarrollo**
```
var CFG = {
    "mode": "DEVELOPER",
    "version": "0.1",
    "lang": "es-ES",
    "resourcesEndPoint": "http://dev.resources.int.bqws.io/v1.0/",
    "oauthEndPoint": "http://dev.oauth.int.bqws.io/v1.0/",
    "oauthClientId": "temp-client",
    "oauthSecret": "temp-secret",
    "oauthService": "silkroad",
    "iamEndPoint": "http://dev.iam.int.bqws.io/v1.0/",
    "iamClientId": "providedClientId",
    "iamSecret": "providedSecret",
    "claimAud": "http://iam.bqws.io",
    "claimGrantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
    "claimScopes": "resources:bookland:read_catalog iam:user:create iam:user:delete iam:user:read",
    "claimScopesUser": "resources:bookland:read_catalog iam:user:create",
    "claimsScopesRegister": ["resources:bookland:read_catalog", "iam:user:read"],
    "claimExp": "3500"
};
```

### Configuración en Fichero Externo ###

Si no se define configuración por variable global como se ha mencionado antes, la aplicación tratará de bajarse la configuración definida en `src/main/webapp/res/config/config.json`.

los atributos del JSON son los mismos definidos antes para la variable `CFG`.



## Gestión de Dependencias ##

Las dependencias de la aplicación se gestiónan con [RequireJS](http://requirejs.org/), y el archivo donde se define el árbol de dependencias entre las librerías está definido en `webapp/scripts/define.js`.

**Más info**

* [RequireJS](http://requirejs.org/)

## Contexto de Aplicación ##

El contexto de aplicación hace referencia al concepto de aplicación y alberga todas las funcionalidades básicas para la gestión de una aplicación.
Este objeto está basado en el objeto `Application` que provee **Marionette**.
En particular:

* Nos ayuda a gestionar la inicialización de la aplicación.
* Establece las regiones principales (header, content, footer, ...).
* Facilita la integración de los diferentes módulos que componen la aplicación. (EventAggregator, RequestResponse, Commands)
* Tiene acceso a los parámetros que definen la configuración y comportamiento de la aplicación.
* Ofrece acceso al resto de módulos de la aplicación.

**Obtener el contexto**

Para tener acceso al contexto de la aplicación basta con encapsular nuestro código JavaScript en el siguiente esquema:
```
'use strict';
/* global define */
define([
    'corejs/app',   // coreJS component
], function(app) {
    // Code here!
});
```

## Inicialización de la aplicación ##

El proceso de inicialización de una aplicación web puede llegar a ser muy complejo, para ello, `app` provee mecanismos necesarios para poder definir este proceso de forma distribuída de tal forma que cada tarea especifica de inicialización pueda estar definido en el módulo que le corresponda.

Una aplicación Marionette se inicializa cuando se lanza la llamada `app.start()`, y con ello, todos sus manejadores definidos.

Para añadir nuetas tareas al proceso de inicialización basta con incluir el siguiente código donde sea pertinente.
```
  app.addInitializer(function() {
        // Initialization code here
  });
```

**Más info**

* [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md)

## Definir las Regiones Principales ##

El objeto `Application` de Marionette además permite definir las regiones principales de la región.
En Marionette, una región define cualquier elemento del DOM desde la cual, se mostrarán vistas.
Para definir regiónes principales de la aplicación basta con hacer lo siguiente:
```
app.addRegions({
    header: 'header',       // <header>
    main: 'main',           // <main>
    footer: 'footer'        // <footer>
});
```
Con las regiones definidas, en otra parte del código podemos mostrar vistas dentro de estas regiones:
```
app.header.show(new HeaderView());
app.main.show(new MainView());
app.footer.show(new FooterView());
```
Lo realmente interesante de las regiones es que se puede llamar al método `show()` repetidas veces, con la certeza de que Marionette llamará al método `close()` en la vista existente de la región para cerrar la vista con seguridad, liberando correctamente los recursos.

Es posible definir regiones anidadas con el componente `Layout` de Marionette, pero eso lo explicaremos con detalle más adelante.

**Más info**

* [Marionette.Region](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md)
* [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md)

## Comunicación entre Módulos ##

Para comunicar eventos, peticiones y órdenes entre módulos, Marionette ofrece los siguientes componentes para ello.

### EventAggregator ###

Este componente de Marionette nos permite lanzar un evento en cualquier punto de la aplicación para que en cualquier otro punto, cualquiera pueda suscribirse y actuar en consecuencia.

Para registrarse a un evento en particular es necesario seguir el siguiente esquema:
```
app.vent.on("foo", function(){
  console.log("foo event");
});
```
Entonces, desde cualquier otro punto de la aplicación, es posible lanzar el siguiente evento:
```
app.vent.trigger("foo");
```
Para lanzar eventos con parámetros es posible hacer lo siguiente:
```
app.vent.on("foo", function(args){
  console.log("foo event" + args.bar);
});

app.vent.trigger("foo", {bar: true});
```

**Más info**

* [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md)

### RequestResponse ###

Este componente nos permite solicitar una acción y esperar una respuesta de ello. Sólo puede haber uno esperando respuesta y siempre se responde al último que se registró.

```
app.reqres.setHandler("foo", function(){
  return "foo requested. this is the response";
});

var result = app.reqres.request("foo");
console.log(result);
```
Al igual que con `EventAggregator`, es posible pasar parámetros con la petición.

**Más info**

* [Marionette.RequestResponse](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.requestresponse.md)

### Commands ###

Este componente nos permite solicitar una acción sin tener que esperar una respuesta de ello. Sólo puede haber uno esperando respuesta y siempre se responde al último que se registró.

```
app.commands.setHandler("foo", function(bar){
  console.log(bar);
});

app.execute("foo", "baz");
```

**Más info**

* [Marionette.Commands](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.commands.md)

Módulo: Logger
------

El logger nos ayuda a registrar los mensajes por consola de la aplicación, establecer diferentes niveles de mensajes, y enviar información relevante a un servidor específico para posterior análisis.

Ejemplo de uso:
```
// config & params are objects
app.log.info('engine', 'Logger.setConfig', config, true, [3], 3.14);
app.log.debug('engine:config:loaded', config);
app.log.debug('api.request', params);
```
Se recomienda además seguir la siguiente convención con el fin de pder filtrar el log como explicaremos más adelante:
```
app.log.debug('moduleName', 'ClassName.methodName' [, ...]);
app.log.debug('moduleName:event:name' [, ...]);
app.log.debug('moduleName.method.message' [, ...]);
```

* **Niveles de Log**
Los errores ordenados de mayor a menor nivel son los siguientes:
  * `SILENT`: Este nivel sirve para anular el log 
  * `ERROR`: Muestra por consola los errores de la aplicación
  * `WARN`: Muestra las alertas de la aplicación y mensajes de mayor nivel
  * `INFO`: Muestra las trazas de información y mensajes de mayor nivel
  * `DEBUG`: Muestra mensajes de depuración y mensajes de mayor nivel
  * `TRACE`: Muestra trazas de desarrollo y mensajoes de mayor nivel
  * `ALL`: Muestra todos los mensajes

```
app.log.setLevel(app.log.level.INFO);
```

* **Filtrar Log**

A veces es necesario filtrar el log para que muestre únicamente las trazas de log que nos interesan. Para filtrar todos los logs que no sean de una sección en particular podemos hacer:
```
app.log.filter('engine');
```
Con ésto conseguimos que sólo se muestran las trazas que comiencen por la palabra `engine`.


* **Log To Server**

El log tiene la capacidad de enviar cierta inforamción a un servidor específico, para ello, primero hay que **configurarlo y habilitarlo**
```
var config = {
    logToServer: true,          // Para habilitar envío de datos al servidor
    logBuffer: 10,              // Nº de trazas antes de enviar al servidor
    logServerEndpoint: 'url'    // Ruta hasta el servidor que almacena logs
    logLevel: app.log.level.WARN// Nivel de log a enviar
}
app.log.setConfig(config);
```

* **Nota**: Ala hora de construir los mensajes de log, hay que tener en cuenta que si el mensaje que se construye es complejo, es una buena práctica detectar el nivel de log establecido para evitar tener que construir mensajes innecesarios, por ejemplo:

```
var complexLogMessageBuilder = function() {
    // Complex code here
    return logString;
}

if (app.log.getLevel() === app.log.level.INFO) {
    app.log.info(complexLogMessageBuilder());
}
```

## Módulo: User ##

Este módulo es el responsable de encapsular toda la complejidad relacionada con los protocolos de autenticación, altas de usuarios y autorización de peticiones.

### Registro ###

Si la aplicación puede registrar nuevos usuarios en la plataforma, es posible realizarse con la siguiente llamada:
```
var params = {
    username: 'username',
    email: 'email@domain.com',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName'
}
app.user.register(params).then(function(data) {
  // Always code
}).done(function(data) {
  // Success code
}).fail(function(jqxhr) {
  // Error code
});
```

### Autenticación ###


Para realizar una autenticación de un usuario en particular, en la vista responsable podemos realizar la siguiente llamada, tras recopilar los datos del usuario de un formulario de login típico:
```
var params : {
    username: 'username',
    password: 'password',
    remember: 1
}
app.api.login(params).then(function(data) {
  // Always code
}).done(function(data) {
  // Success code
}).fail(function(jqxhr) {
  // Error code
});
```


### Autorización ###

Una vez autenticado, el módulo mantiene de forma interna la información necesaria para identificarlo, además se encarga de construir las peticiones automáticamente con la autorización necesaria.

La aplicación deberá tener una clave que lo identifica como cliente autorizado `client_id`, y una clave secreta que le autoriza a realizar peticiones `secret`, ambos parámetros deberán estár definidos en la [configuración](#configuración) de la aplicación, ya sea en tiempo de ejecución o en tiempo de despliegue.

Con dichos parámetros establecidos, la aplicación durante su inicialización, generará automáticamente una autorización de comunicación con SilkRoad ya sea como cliente anónimo, o como un usuario específico si decidió recordar su acceso. Todo ello de forma trasparente al desarrollador.

**Más info**

* [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)

## Módulo: Resources ##

Este módulo es el responsable de solicitar los recursos del backend necesarios para mostrar la información necesaria, encapsulando toda la complejidad relacionada con los protocolos de autenticación, autorización de peticiones, las búsquedas avanzadas y el mapeo a los modelos de datos.

### Recursos ###

Existe un mecanismo para construir de forma intuiritva peticiones a recursos. A continuación varios ejemplos de recurso:

* `resource/books:Book`: Collección de recursos
* `resource/books:Book/id`: Recurso específico
* `resource/books:Book/id/author`: Recursos relacionados con otros.

```
app.api.setResource('resource/books:Book', app.api.method.GET).execute()
.then(function(data) {
  // Always code
}).done(function(data) {
  // Success code
}).fail(function(jqxhr) {
  // Error code
});
```

### Búsquedas ###

Es posible realizar búsquedas avanzadas añadiendo todos los filtros que sean necesarios:


**Manual**
```
var resource = app.api.setResource('resource/books:Book');

resource
  .sort('field1', api.order.ASC)          // Ordenar por campo
  .page(0, 5)                             // Selección de página
  .eq('field1', 50)                       // Igual a
  .eq('field2', true)                     // Repetición de operadores
  .gt('field3', 'value')                  // Mayor que
  .gte('field4', 'value')                 // Mayor o igual que
  .lt('field5', 'value')                  // Menor que
  .lte('field6', 'value')                 // Menor o igual que
  .ne('field7', 'value')                  // No igual a
  .in('field8', ['value1', 'value2'])     // Cualquiera de ellos aparece
  .all('field9', ['value1', 'value2'])    // Todos ellos aparecen
  .like('field10', 'value');              // Parecido a

resource.execute().then(function(data) {
  // Always code
}).done(function(data) {
  // Success code, for example, transform to Backbone.Model
  models = app.factory.new('ModelCollection', data);
}).fail(function(jqxhr) {
  // Error code
});
```

**Backbone.fetch**
```
var collection = app.factory.new('Collection');

var params = {
    resource: 'resource/books:Book',
    query: [
        {like: {field5: 'value'}},
        {all: {field5: ['pepe', 'juan']}},
        {in: {field2: ['pepe', 'juan']}},
        {ne: {field5: 'value'}},
        {lte: {field5: 'value'}},
        {lt: {field5: 'value'}},
        {gte: {field5: 'value'}},
        {gt: {field5: 'value'}},
        {eq: {field4: true}},
        {eq: {field3: true}},
        {page: {page: 0, size: 5}},
        {sort: {field1: resources.order.ASC}}
    ]
};

collection.fetch(params).done(function() {
  // Collection loaded
}).fail(function() {
  // Error handler
});
```

**Más info**

* [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)

## Módulo: Session ##

Gestiona los datos de la sesión del usuario, sus credenciales de sesión y el estado global de la aplicación.

```
// Storages data in user session
var data = {key: 'value'};
app.session.set('key', data);

// Retrieve data from user session
var data = app.session.get('key', data);
// data = {key: 'value'};

// Destroy session
app.session.destroy();

/**
 * Ask for user autorization
 * return boolean object
 */
app.session.gatekeeper(); 

/**
 * Set an application status
 * @param {string} status - Name of the status
 * @param {boolean} active - true if active, false id disabled
 */
app.session.setStatus('new-user', true); 

// Remove a specific status
app.session.removeStatus('new-user');
```

## Módulo: Cookies ##

Se encarga de obtener y establecer las cookies del documento actual.

```
// Writing a cookie
app.cookies.setItem(name, value[, end[, path[, domain[, secure]]]]);

// Getting a cookie
app.cookies.getItem(name);

// Removing a cookie
app.cookies.removeItem(name[, path],domain);

// Testing a cookie
app.cookies.hasItem(name);
```

**Más info**

* [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/document.cookie?redirectlocale=en-US&redirectslug=DOM%2Fdocument.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support)
 
## Módulo: Factory ##

Este módulo se encarga de gestionar los diferentes tipos de objetos de la aplicación (Model, Collection, Layout, View)

```
// Models
app.factory.add('CompontentNameModel', CompontentNameModel);
app.factory.new('CompontentNameModel', options);
app.factory.get('CompontentNameModel');

// Collections
app.factory.add('CompontentNameCollection', CompontentNameCollection);
app.factory.new('CompontentNameCollection', options);
app.factory.get('CompontentNameCollection');

// Views
app.factory.add('CompontentNameView', CompontentNameView);
app.factory.new('CompontentNameView', options);
app.factory.get('CompontentNameView');

// Layouts
app.factory.add('CompontentNameLayout', CompontentNameLayout);
app.factory.new('CompontentNameLayout', options);
app.factory.get('CompontentNameLayout');
```

**Nota**: Se debe tener en cuenta la convención de nombres para los diferentes componentes (Name + Type).

## Módulo: Polyfills ##

En este módulo se pueden definir polyfills necesarios para que la aplicación funcione con normalidad.

Por defecto incorpora los siguientes polyfills: `localStorage`, `sessionStorage` y `Date.toISOString`.

**Más info**

* [Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)

----------


coreJS Modules
==============



El objetivo de los módulos es la de contener los recursos necesarios que definan una funcionalidad, comportamiento o componente completo, de tal forma que sea un paquete coherente y cohesionado, pero a la vez, poco acoplado con respecto al resto de módulos, asegurando la escalabilidad y la mantenibilidad de la aplicación.

Para que un módulo pueda definir una funcionalidad completa se propone la siguiente estructura de módulo.

## Estructura del proyecto ##
```
src/main/webapp
├── css                             // Hojas de estilo transversales
├── res
│   └──config
│       ├──config.json              // Configuración de la webapp
│       └──myModule.json            // Configuración del módulo 'myModule'
└── scripts
    ├──define.js                    // definición de dependencias requirejs
    ├──main.js                      // Script principal de la webapp
    └──modules                      // directorios de módulos de la webapp
        ├──loader.js                // Declaración de móduloas a cargar
        └──myModule                 // Nombre del módulo
            ├── start.js            // Inicialización y carga de dependencias
            ├── css                 // Hojas de estilo
            ├── collections         // Colecciones del módulo
            │   └── *.js
            ├── layouts             // Layouts del módulo
            │   └── *.js
            ├── models              // Modelos del módulo
            │   └── *.js
            ├── templates           // Templates "Handlebars" del módulo
            │   ├──*.html
            │   └── moreTemplates
            │       └── *.html
            └── views               // Vistas del módulo (ItemView/CollectionView)
                └── *.js
src/test
├── define.js               // Definición de dependencias requirejs transversales
├── index.html              // Punto de partida de ejecución de tests
└── spec
    └──myModule
        └──*.js             // Test del módulo myModule
```



Desarrollo
----------

En esta sección se detalla toda la información necesria para poder empezar a desarrollar módulos.

### Creación de modelos ###

Los modelos representan los datos que se tienen que mostrar finalmente en la interfaz, y son las estructuras de datos que normalmente se manejan en la aplicación.

Para crear un modelo basta con seguir el siguiente esqueleto en el directorio de `models` del módulo:
```
'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette'
], function(app, $, _, Backbone) {
    var MyModel = Backbone.Model.extend({

    });

    return MyModel;
});
```
Ya sólo falta dar de alta el modelo en la factoría para que pueda ser instanciable. Para ello lo declaramos en el inicializador de módulo (`modules/myModule/start.js`):
```
app.addInitializer(function() {
  app.models.add('MyModel', MyModel);
});
```

**Más info**

* [Backbone.Model](http://backbonejs.org/#Model)


### Creación de vistas ###

Las vistas son los responsables de definir el comportamiento que tendrán los templates, también procesan los datos de los modelos y los inyectan en los templates.

#### Templates ####

Para renderizar una vista es necesario primero definir un template, para ello, nos apoyaremos en [Handlebars](http://handlebarsjs.com/) para implementarlos.

Idealmente, los templates renderizan modelos Backbone, de modo que si tenemos el siguiente modelo:
```
var MyModel = Backbone.Model.extend({});
myModel = new MyModel({
    foo: 'Hi',
    bar: 'Álvaro'
});
```
Un template válido para representar estos datos sería:
```
<div>
    <h1>{{foo}}</h2>
    <p>{{bar}}</p>
</div>
```

Los templates deben ubicarse en el directorio de `templates` de cada módulo, pudiendo anidarse en tantas carpetas como fuera necesario, por ejemplo, en `myModule/templates/myTemplate.html`.

Existen 2 tipos de vistas, `ItemView` y `CollectionView`, ambos incluidos en Marionette.

**Más info**

* [Handlebars](http://handlebarsjs.com/).

#### ItemView ####

Este componente de Marionette es un tipo específico de `View` que se encarga de renderizar una template específico en base a un modelo.

El template que se tiene que renderizar con la vista se define en la función `template()`. La convención para acceder a un template específico es la siguiente:
```
// Ruta hasta el template
scripts/modules/myModule/tempaltes/subTemplates/myTemplate.html

// Clave asociada en la estructura `jst`
app.jst['myModule/subTemplates/myTemplate'];
```

Para crear una vista de este tipo basta con seguir el siguiente esqueleto en el directorio de `views` del módulo:
```
'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette'
], function(app, $, _, Backbone) {
    var MyView = Backbone.Marionette.ItemView.extend({
        template: function(serializedModel) {
            // Load the compiled template generated by
            // 'modules/myModule/templates/myTemplate.html'
            return app.jst['myModule/myTemplate'](serializedModel);
        }
    });

    return MyView;
});
```

Para dar de alta la vista en la factoría para que pueda ser instanciable. Para ello lo declaramos en el inicializador de módulo (`modules/myModule/start.js`):
```
app.addInitializer(function() {
  app.views.add('MyView', MyView);
});
```
Por último, para renderizar una vista, puede hacerse de 2 maneras principalmente.

* En una región
```
app.regionName.show(app.factory.new('MyView'));
```
* De forma explícita
```
var myView = app.factory.new('MyView');
$('body').html(myView.render().el);
```

**Mas info**

* [Marionette.ItemView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.itemview.md)

#### CollectionView ####

Este componente se encarga de renderizar una [collección de modelos](http://backbonejs.org/#Collection) en base a un `ItemView` y un `Collection` de Backbone.

La vista que renderiza se especifica en el atributo `itemView` del `CollectionView`
```
// Ruta hasta el template
scripts/modules/myModule/tempaltes/subTemplates/myTemplate.html

// Clave asociada en la estructura `jst`
app.jst['myModule/subTemplates/myTemplate'];
```

Para crear un `CollectionView` basta con seguir el siguiente esqueleto en el directorio de `views` del módulo:
```
'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette'
], function(app, $, _, Backbone) {
    var MyCollectionView = Backbone.Marionette.CollectionView.extend({
        // Reference to the ItemView specification
        getItemView: function(attrs, options) {
          attrs.options = options;
          return app.factory.get('MyView', attrs);
        }
    });

    return MyCollectionView;
});
```
Este tipo de vistas se dan de alta en la factoría y se renderizan exactamente igual que en `ItemView`, salvo que en vez de pasarle un `Backbone.Model` en el parámetro `model`, se le pasa un `Backbone.Collection` en el parámetro `collection`.

Este tipo de componente conviene utilizarlo cuando se desea renderizar un componente repetidas veces, pero que además, queramos implementar funcionalidades que afecten a la colección completa.

**Más info**

* [Backbone.Collection](http://backbonejs.org/#Collection)
* [Marionette.CollectionView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.collectionview.md)

### Creación de Layouts ###

Un componente `Layout` es una mezcla entre un `ItemView` y un `Region`, de tal forma que se pueden definir regiones del template que renderiza este Layout. Por ejemplo:

Teneiendo como template:
```
<!-- myModule/templates/myLayout.html -->
<section>
    <header></header>
    <div class="content"></div>
    <div id="actions"></div>
</section>
```
Podemos definir un Layout como el siguiente:
```
var MyLayout = Backbone.Marionette.Layout.extend({
    template: function(serializedModel) {
        app.jst['myModule/myLayout'](serializedModel);
    },
    
    regions: {
        header: 'header',
        content: '.content',
        actions: '#actions'
    }
});

app.layout.add('MyLayout', MyLayout);
```
Y rednderizarlo en la aplicación:
```
var myLayout = app.factory.new('MyLayout');

app.main.show(myLayout);

myLayout.content.show(app.factory.new('MyView'));
```

Se pueden anidar tantos layouts como sean necesarios.


**Más info**

* [Marionette.Region](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md)
* [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md)

### Rutas y manejadores (Router) ###

Para que nuestra aplicación pueda actuar en función de la ruta del usuario, usamos el componente `Router` de Backbone.

Generalmente, los manejadores de las rutas son los responsables de obtener todos los recursos necesarios e injectarselo a las vistas para que lo rendericen correctamente.

Para definir una ruta con su manejador basta definirlo en el `start.js` del módulo en cuestión:
```
    var myHandler = function(isbn) {
        var myModel = app.factory.new('MyModel');
        app.myRegion.show(app.factory.new('MyView', {
            model: myModel
        }));
    };

  app.addInitializer(function() {

    // Add models to factory
    app.factory.add('MyModel', MyModel);

    // Add views to factory
    app.factory.add('MyView', MyView);

    // Define router paths
    app.router.route('myroute', 'trigger:this:event', myHandler);

  });
```

**Más info**

* [Backbone.Router](http://backbonejs.org/#Router)

### Inicialización de un módulo ###

Uno de los pasos a la hora de desarrollar un módulo con diferentes componentes, es la de definir el lugar donde declarar e integrar todos esos componentes en la aplicación, para ello, definiremos un documento `start.js` para cada módulo implementado.

Un ejemplo de `start.js` podría ser el siguiente:
```
'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    
    // app models
    'modules/myModule/models/myModel',
    
    // app collecctions
    'modules/myModule/collections/myCollection',

    // app views
    'modules/myModule/views/myView'
    'modules/myModule/views/myCollectionView'
], function(app, $, _, Backbone, Marionette, MyModel, MyCollection, MyView, MyCollectionView) {
    var myHandler = function() {
        var myModel = app.factory.new('MyModel');
        app.myRegion.show(app.factory.new('MyView', {
            model: myModel
        }));
    };

  app.addInitializer(function() {
    // Add models to factory
    app.factory.add('MyModel', MyModel);

    // Add views to factory
    app.factory.add('MyView', MyView);

    // Define router paths (url, event, handlerFunction)
    app.router.route('myroute', 'router:route:myroute', myHandler);
  });
  
  app.on('initialize:after', function() {
      // Code after initialization here
      app.myRegion.show(app.factory.new('MyCollectionView'));
  });
  
});
```

### Gestión de dependencias ###

Como se puede observar del ejemplo anterior lo primero que se define son las dependencias del módulo, que finalmente se mapean o exportan a variables que manejaremos dentro del módulo en el mismo orden en el que se declaran.
Observando con detalle la anterior cabecera:
```

'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    
    // app models
    'modules/myModule/models/myModel',
    
    // app collecctions
    'modules/myModule/collections/myCollection',

    // app views
    'modules/myModule/views/myView'
    'modules/myModule/views/myCollectionView'
], function(app, $, _, Backbone, Marionette, MyModel, MyCollection, MyView, MyCollectionView) {
    // Code here
});
```

### Integrar un nuevo módulo ###

Una vez tengamos nuestro módulo implementado, tendremos que decirle a nuestra aplicación que la carge como dependencia en el archivo `scripts/modules/loader.js` de la siguiente forma:
```
'use strict';
/* global define */
define([
    'corejs/app',

    // Modules here!!!
    'modules/myModule/start' // <== Module declaration
], function() { });
```

## Integrar una librería de terceros ##

Para integrar una librería de terceros tenemos que evaluar antes varias cosas:

* Si ese paquete está disponible como paquete [Bower](http://bower.io/search/)
* Si el paquete es compatible con [AMD](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailamd)
* Si es un plugin que extiende a otra librería.

Si es un paquete **Bower**, hay que dar de alta dicha dependencia con su versión en `bower.json`.

Si es un módulo AMD, no es necesario hacer gran cosa, pero **si no está definido como AMD**, y dicho módulo exporta una variable, es necesario indicarlo en el documento `define.js`, tanto en `webapp/scripts/define.js`, como en `test/define.js` de la siguiente forma:
```
// define.js
/* global require, mochaPhantomJS, mocha */
require.config({
    deps: [...],
    paths: {...},
    shim: {
        // underscore is not an AMD module that
        // needs to be exported to '_' namespace
        underscore: {
            exports: '_'
        },
        ...
    }
});
```

Si es un plugin que extiende a otra librería, cuando sea necesario requerir esta dependencia, es recomendable que vayan al final, pues estas no suelen exportar ninguna variable, por ejemplo `backbone.marionette`.
```
'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone',

    'backbone.marionette',  // No namespace export
    'jquery-validation'     // No namespace export
], function(app, $, _, Backbone) {...});
```

## Configuración ##

Los módulos pueden tener un documento donde defina su configuración, comportamiento e incluso su contenido, a través del mecanismo de configuración de módulos.

### Módulos de aplicación ##
Llamamos módulos de aplicación a aquellos módulos específicos de la webapp. Estos se pueden configurar a través de los archivos `src/main/webapp/scripts/modules/[moduleName]/res/config.json`, donde cada módulo puede tener definida su configuracion por defecto.


### Módulo externos ###
Si queremos estableccer la configuración de un módulo ajeno a nuestro repositorio, por ejemplo, un módulo del core, es posible sobreescribir su configuración redefiniendo los archivos `src/main/webapp/res/config/[externalModuleName].json`. Esta configuración deberá definirse **con los mismos campos que la configuración original**.


**Cómo acceder**
Las configuraciones de todos los módulos se compilan en un único fichero en la ruta `target/dist/res/config/modules.json`. Desde el código se puede acceder de la siguiente forma:
```
var config = app.modulesConfig.get('moduleName'[, modelName]);
```
* **Nota**: Es posible obtener directamente un tipo específico de `Backbone.Model`, si se establece el nombre del modelo en el parámetro `modelName` (debe de ser el mismo nombre con el que se dió de alta en la factoría).

----------


Estructura de las Hojas de Estilo
=============================

Se propone el siguiente esquema de proyecto [SASS](http://sass-lang.com/):

```
└── src/main/webapp
    ├── css
    │   ├── global
    │   │   ├── _fonts.scss         // importación de tipografías externas
    │   │   ├── _mixins.scss        // librería de utilidades sass
    │   │   ├── _print.scss         // estilos para hojas impresión
    │   │   ├── _reset.scss         // reset de estilos para navegadores
    │   │   ├── _responsive.scss    // gestión RWD (Responsive Web Design)
    │   │   ├── _sprites.scss       // generación de sprites
    │   │   ├── _scaffolding.scss   // configuración inicial
    │   │   ├── _utils.scss         // clases útiles para la maquetación
    │   │   └── _variables.scss     // definición de variables del proyecto
    │   └── main.scss               // importación de todos los estilos
    └── img
        └── common                  // imágenes genéricas
            └── logo.png
        ├── modules                 // imágenes de los módulos de la app
        └── sprites                 // sprites generados por compass desde _sprites.scss
            └── icons
                ├── xs
                ├── xs-retina
                ├── sm
                ├── sm-retina
                ├── md
                ├── md-retina
                ├── lg
                └── lg-retina
```
## Sprites ##
Con la ayuda de **compass** se generarán automáticamente los *sprites* para los diferentes tamaños de iconos ordenados en carpetas:

> Sprite Tutorial
> http://compass-style.org/help/tutorials/spriting/

Se definirán carpetas para los diferentes puntos de ruptura ([break points RWD](http://mobile.smashingmagazine.com/2013/03/18/retrofit-a-website-to-be-responsive-with-rwd-retrofit/)), se aplicará lo mismo para las imagenes retina generadas a partir de dichos iconos.

Para los nombres de carpetas de las imágenes se utilizarán tallas, añadiendo retina para aquellas imagenes en dicho formato:
```
└── sprites                 
    └── icons
        ├── xs
        ├── xs-retina
        ├── sm
        ├── sm-retina
        ├── md
        ├── md-retina
        ├── lg
        └── lg-retina
```

**Más info**

* http://www.jc-designs.net/pdf/sassCheat.pdf

I18n [Pendiente]
================



Tests
=====

Los test nos ayudan a asegurar la estabilidad de la aplicación.
En este apartado describiremos cómo se desarrollan los tests unitarios.

Estructura del proyecto
-----------------------
```
.
└── test                    // Workspace de test
    ├── index.html          // Web para ejecutar los test unitarios
    └── spec                // Tests
        ├── collections 
            └── *.js
        ├── engine
            └── *.js        
        ├── models
            └── *.js
        ├── modules
            └── namemodule
                └── *.js
        └── *.js
```

Desarollo de Tests
------------------

### Descripciones ###

Usaremos el framework [mocha](http://visionmedia.github.io/mocha/) para el desarrollo de tests.
Este framework permite estructurar los test de la siguiente forma:
```
'use strict';
/* global define */
define([
    // Load component as dependency
    'modules/user/models/user'
], function(myModel) {

    describe('With user data', function() {
    
        var model = new myModel();
        var sandbox = sinon.sandbox.create();

        beforeEach(function() {
            // Before test code here
        });

        afterEach(function() {
            // After test code here, for example, sinon sandbox restoration:
            sandbox.restore();
        });
        
        describe('When getPrettyName() is called', function() {
            it('The full name returns correctly', function() {
                // Checks here
            });
            it('Works with undefined surnames', function() {
                // Checks here
            });
            it('Returns special chars', function() {
                // Checks here
            });
        });
        
        describe('Example tests', function() {
            if('Test with promise mock (Register example)', function() {
                registerView.ui.firstName.val('firstName');
                registerView.ui.lastName.val('lastName');
                registerView.ui.email.val('user@email.com');
                registerView.ui.password.val('1234');
                registerView.ui.newsletter.prop('checked', true);

                var d = $.Deferred();
                // module.method() returns a promise
                sandbox.stub(app.user, 'register').returns(d.reject());
                // Spies some function to check later
                sandbox.spy(router, 'navigate');
                // Trigger an action
                registerView.register();
                expect(router.navigate.callCount).to.be.equal(0);
            });
            
            if('Async test', function(done) {
                // Async function that returns a promise
                module.execute().done(function() {
                    // Checks here
                    done();
                });
            });
        });
    });

});

```
Como se puede ver en el ejemplo anterior, la idea es que las descripciones de los tests, desde el mayor nivel hata el test específico, forme algo coherente, como si se contara una historia, de tal forma que sea entendible por cualquier miembro del equipo.

Además un buen conjunto de tests conprensibles, puede formar parte de la documentación de la aplicación.

**Más info**

* [mocha](http://visionmedia.github.io/mocha/)

### Comprobaciones ###

Para realizar las comprobaciones pertinentes usaremos [chai](http://chaijs.com/), haciendo uso del verbo `expect` para tener un estilo orientado a TDD o BDD.

**Más info**

* [chai](http://chaijs.com/api/bdd/)

Propuesta de Integración con QA
-------------------------------

Esta propuesta trata de ofrecer una serie de convenciones por las cuales QA pueda conocer y acceder a los elementos interactuables de la aplicación, todo esto sin que afecte a la evolución de la capa de presentación.

Para ello dejaremos las clases de HTML para los desarrollos de las hojas de estilos y definiremos una serie de etiquetas `data-*` de HTML5 para que QA conozca que partes de la interfaz le afectan en su trabajo.

En particular se proponen los siguientes atributos:

* `data-action`: El elemento reacciona a una acción específica, por ejemplo `toggle`, `hide`, `save`, ...
* `data-target`: Es un elemento afectado en una acción en concreto, con el mismo nombre del action que lo provocó.
* `data-rel`: Es un elemento/componente con significado propio, ayuda a establecer un contexto. Por ejemplo `modal`, `dropdown`.
* `data-rel-id`: Es un elemento/componente único, con el fin de diferenciarse de los elementos o componentes comunes con un mismo data-rel.

* **Ejemplo**
```
<button data-action="toggle"></button>
<div data-rel="modal" data-target="toggle">...</div>
```

SEO [Pendiente]
===

Habilitar el SEO en una WebApp
------------------------------

Integración con Google Analytics
--------------------------------


Construcción
============

Instalación de dependencias
---------------------------

```
./init-env.sh
```
* **Nota**: Si Node está instalado con `sudo`, sustituir el comando anterior por este otro:
```
./init-env.sh su
```


Desarrollo
----------

Existe una tarea definida en grunt específica que arranca la aplicación en modo desarrollo, esto es, levanta un servidor que apunta a los recursos de la aplicación sin optimizar, para que sea más facil su depuración. Además se auto-actualiza a cada cambio guardado desde el editor.
Para lanzarlo basta con usar el siguiente comando:
```
grunt server
```

Test
----

Existen varias tareas en grunt que arranacan los test unitarios, todo depende de dónde queramos obtener los resultados.

* Test por línea de comandos:
```
grunt test
```
El resultado de los tests aparecerán por consola y generará un informe en formato `xunit` en `dist/tests.xml`.

* Test por navegador [pendiente]
```
grunt server:test
```
Los resultados de los tests se podrán visualizar'en un navegador desde `http://localhost:9001`.


Producción
----------

```
grunt
```
Esta tarea construye el proyecto listo para desplegar en el directorio `target/dist`.


Propuesta de integración con Jenkins
------------------------------------

### XUnit ###

### Cobertura de tests ###


FAQ
---

Estaremos encantados de resolver todas vuestras dudas acerca del coreJS en el [Confluence del coreJS](https://confluence.bq.com/display/coreJS/Espacio+de+preguntas).
