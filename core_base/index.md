---
layout: page
---

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
        ├── main.js         // Script que arranca la aplicación
        ├── engine          // Componentes internos de la aplicación
        │   ├── services.js // Comunicación con Backend
        │   ├── common.js   // Parámetros de la app
        │   ├── factory.js  // Factoría de objetos
        │   ├── locale.js   // Módulo de i18n
        │   ├── logger.js   // Módulo de log
        │   ├── polyfills.js// Polyfill varios
        │   ├── utils.js    // Funciones varias
        │   ├── user.js     // Autenticación y gestión de usuario
        │   ├── resource.js // Librería para realizar peticiones a backend
        │   ├── session.js  // Gestión d elos datos de sesión del usuario
        │   ├── router.js   // Enrutador de la webapp
        │   ├── ...
        │   └── start.js    // Inicializador de módulo
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
: Establece la versión pública de la aplicación. Nos permite enviar la versión con la que se están generando las trazas para el logToServer. Debería seguir las convenciones establecidas en [semver.org](http://semver.org/)

* Tipo: String
* Por defecto: `0.0.1`
* Obligatorio: si
* Acceso: `app.common.version`

appName
: Establece el nombre interno de la aplicación web. Nos permite identificar qué aplicación realiza qué operaciones.

* Tipo: String
* Por defecto: `corejs-app`
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
: Establece el nivel de log que se desea **enviar al servidor**
`0` - trace
`1` - debug
`2` - info
`3` - warn
`4` - error
`5` - silent

* Tipo: Integer
* Por defecto: `2`
* Obligatorio: no

logServerEndpoint
: Establece la ruta del servidor a donde enviar los logs

* Tipo: String
* Por defecto: `endpoint/`
* Obligatorio: no
* Depende de: `logToServer`

resourcesEndpoint
: Establece la ruta base hasta los recursos del backend.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

evciEndPoint
: Establece la ruta base hasta el registro de eventos del backend.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

ecEndpoint
: Establece la ruta base hasta la gestión del E-Comerce del backend.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

oauthEndpoint
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

iamEndpoint
: Establece la ruta base hasta el servidor de IAM.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

clientId
: ClientId proporcionado por el proveedor del servicio de IAM.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

clientSecret
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

grantType
: Valor de la variable `grant-type` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para registrar usuarios nuevos.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

jwtAlgorithm
: Valor de la variable `alg` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para registrar usuarios nuevos.

* Tipo: String
* Por defecto: ---
* Obligatorio: si

autoTokenRefresh
: Activa el autorefresco de token cuando una petición que requiere autenticación falla por `401`.

* Tipo: Boolean
* Por defecto: false
* Obligatorio: no

Además la aplicación se puede configurarse de varias formas, estableciendo los parámetros en el código a través de una variable global de configuración `CFG`, o en tiempo de ejecución a través del archivo `app/res/config/config.json`.


### Configuración en Variable Global ###

Se puede establecer la configuración de la aplicación definiendo los parámetros en una variable global que deberá llamarse **`CFG`**. Esta variable global debe de estar **disponible antes de que se cargue cualquier JavaScript** de la aplicación. Unos ejemplos:

**Producción (sin logToServer)**

```javascript
var CFG = {
    "version": "0.1.0",
    "appName": "corejs-app",

    "evciEndpoint": "http://evci-int.bqws.io/v1.0/",

    "resourcesEndpoint": "http://resources.int.bqws.io/v1.0/",

    "oauthEndpoint": "http://oauth.int.bqws.io/v1.0/",
    "oauthClientId": "temp-client",
    "oauthSecret": "temp-secret",
    "oauthService": "silkroad",
    "oauthGrantType": "authorization_code",

    "iamEndpoint": "http://iam.int.bqws.io/v1.0/",
    "clientId": "providedClientId",
    "clientSecret": "providedSecret",

    "claimAud": "http://iam.bqws.io",
    "claimGrantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
    "claimScopes": "resources:bookland:read_catalog iam:user:create iam:user:delete iam:user:read evci:event:publish",
    "claimScopesUser": "resources:bookland:read_catalog iam:user:delete iam:user:read iam:user:me evci:event:publish",
    "claimScopesRegister": ["resources:bookland:read_catalog", "iam:user:read", "iam:user:me", "iam:user:delete", "evci:event:publish"],
    "claimExp": "3500",

    "jwtAlgorithm": "HS256",
    "grantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",

    "autoTokenRefresh": true
};


```

**Producción (con logToServer)**

```javascript
var CFG = {
    "version": "0.1.0",
    "appName": "corejs-app",

    "logLevel": 0,
    "logBuffer": 20,
    "logToServer": 2,

    "evciEndpoint": "http://evci-int.bqws.io/v1.0/",

    "resourcesEndpoint": "http://resources.int.bqws.io/v1.0/",

    "oauthEndpoint": "http://oauth.int.bqws.io/v1.0/",
    "oauthClientId": "temp-client",
    "oauthSecret": "temp-secret",
    "oauthService": "silkroad",
    "oauthGrantType": "authorization_code",

    "iamEndpoint": "http://iam.int.bqws.io/v1.0/",
    "clientId": "providedClientId",
    "clientSecret": "providedSecret",

    "claimAud": "http://iam.bqws.io",
    "claimGrantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
    "claimScopes": "resources:bookland:read_catalog iam:user:create iam:user:delete iam:user:read evci:event:publish",
    "claimScopesUser": "resources:bookland:read_catalog iam:user:delete iam:user:read iam:user:me evci:event:publish",
    "claimScopesRegister": ["resources:bookland:read_catalog", "iam:user:read", "iam:user:me", "iam:user:delete", "evci:event:publish"],
    "claimExp": "3500",

    "jwtAlgorithm": "HS256",
    "grantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",

    "autoTokenRefresh": true
};
```

**Desarrollo**

```javascript
var CFG = {
    "mode": "DEVELOPER",
    "version": "0.1.0",
    "lang": "es-ES",

    "evciEndpoint": "http://evci-int.bqws.io/v1.0/",

    "resourcesEndpoint": "http://dev.resources.int.bqws.io/v1.0/",

    "oauthEndpoint": "http://dev.oauth.int.bqws.io/v1.0/",
    "oauthClientId": "temp-client",
    "oauthSecret": "temp-secret",
    "oauthService": "silkroad",
    "oauthGrantType": "authorization_code",

    "iamEndpoint": "http://dev.iam.int.bqws.io/v1.0/",
    "clientId": "providedClientId",
    "clientSecret": "providedSecret",
    
    "claimAud": "http://iam.bqws.io",
    "claimGrantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",
    "claimScopes": "resources:bookland:read_catalog iam:user:create iam:user:delete iam:user:read evci:event:publish",
    "claimScopesUser": "resources:bookland:read_catalog iam:user:delete iam:user:read iam:user:me evci:event:publish",
    "claimScopesRegister": ["resources:bookland:read_catalog", "iam:user:read", "iam:user:me", "iam:user:delete", "evci:event:publish"],
    "claimExp": "3500",

    "jwtAlgorithm": "HS256",
    "grantType": "urn:ietf:params:oauth:grant-type:jwt-bearer",

    "autoTokenRefresh": true
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

```javascript
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

```javascript
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

```javascript
app.addRegions({
    header: '[data-region="header"]',   // <header>
    main: '[data-region="main"]',       // <main>
    footer: '[data-region="footer"]'    // <footer>
});
```

Con las regiones definidas, en otra parte del código podemos mostrar vistas dentro de estas regiones:

```javascript
app.header.show(new HeaderView());
app.main.show(new MainView());
app.footer.show(new FooterView());
```

Lo realmente interesante de las regiones es que se puede llamar al método `show()` repetidas veces, con la certeza de que Marionette llamará al método `close()` en la vista existente de la región para cerrar la vista con seguridad, liberando correctamente los recursos.

Es posible definir regiones anidadas con el componente `Layout` de Marionette, pero eso lo explicaremos con detalle más adelante.

**Más info**

* [Marionette.Region](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md)
* [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md)
