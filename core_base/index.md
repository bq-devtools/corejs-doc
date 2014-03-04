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
        ├── config.js       // Definición de las dependencias RequireJS
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

```javascript
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

```javascript
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

```javascript
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
    header: 'header',       // <header>
    main: 'main',           // <main>
    footer: 'footer'        // <footer>
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

## Comunicación entre Módulos ##

Para comunicar eventos, peticiones y órdenes entre módulos, Marionette ofrece los siguientes componentes para ello.

### EventAggregator ###

Este componente de Marionette nos permite lanzar un evento en cualquier punto de la aplicación para que en cualquier otro punto, cualquiera pueda suscribirse y actuar en consecuencia.

Para registrarse a un evento en particular es necesario seguir el siguiente esquema:

```javascript
app.vent.on("foo", function(){
  console.log("foo event");
});
```

Entonces, desde cualquier otro punto de la aplicación, es posible lanzar el siguiente evento:

```javascript
app.vent.trigger("foo");
```

Para lanzar eventos con parámetros es posible hacer lo siguiente:

```javascript
app.vent.on("foo", function(args){
  console.log("foo event" + args.bar);
});

app.vent.trigger("foo", {bar: true});
```

**Más info**

* [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md)

### RequestResponse ###

Este componente nos permite solicitar una acción y esperar una respuesta de ello. Sólo puede haber uno esperando respuesta y siempre se responde al último que se registró.

```javascript
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

```javascript
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

```javascript
// config & params are objects
app.log.info('engine', 'Logger.setConfig', config, true, [3], 3.14);
app.log.debug('engine:config:loaded', config);
app.log.debug('api.request', params);
```

Se recomienda además seguir la siguiente convención con el fin de pder filtrar el log como explicaremos más adelante:

```javascript
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

```javascript
app.log.setLevel(app.log.level.INFO);
```

* **Filtrar Log**

A veces es necesario filtrar el log para que muestre únicamente las trazas de log que nos interesan. Para filtrar todos los logs que no sean de una sección en particular podemos hacer:

```javascript
app.log.filter('engine');
```

Con ésto conseguimos que sólo se muestran las trazas que comiencen por la palabra `engine`.


* **Log To Server**

El log tiene la capacidad de enviar cierta inforamción a un servidor específico, para ello, primero hay que **configurarlo y habilitarlo**

```javascript
var config = {
    logToServer: true,          // Para habilitar envío de datos al servidor
    logBuffer: 10,              // Nº de trazas antes de enviar al servidor
    logServerEndpoint: 'url'    // Ruta hasta el servidor que almacena logs
    logLevel: app.log.level.WARN// Nivel de log a enviar
}
app.log.setConfig(config);
```

* **Nota**: Ala hora de construir los mensajes de log, hay que tener en cuenta que si el mensaje que se construye es complejo, es una buena práctica detectar el nivel de log establecido para evitar tener que construir mensajes innecesarios, por ejemplo:

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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