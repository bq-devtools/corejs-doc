---
layout: doc
---

# coreJS Base

Llamamos coreJS Base al conjunto de tecnologías y modulos necesarios que la mayoría de las webapps tienen.

## Componentes Principales

Los elementos básicos de una aplicación basada en Backbone son los siguientes:
    ![Diagrama de aplicación básico](/assets/images/backbone.jpg)

## Arquitectura de aplicación

Que en coreJS se distribuyen de la siguiente forma:
    ![Diagrama de aplicación modular](/assets/images/modular.png)



## Repositorios

Este proyecto está alojado en los siguientes repositorios **[GIT](http://git-scm.com/)**:

* **[coreJS Doc](https://github.com/bq-devtools/corejs-doc)**
El repositorio de esta misma documentación

    ```bash
    git@github.com:bq-devtools/corejs-doc.git
    ```

* **coreJS Boilerplate**
Esqueleto de proyecto coreJS listo para el desarrollo.

    ```bash
    git@bitbucket.org:mundoreader/corejs-app-boilerplate.git
    ```

* **coreJS Build**
En este repositorio define el proceso de construcción y otras tareas automatizadas a través de **[Grunt](http://gruntjs.com/)**.

    ```bash
    git@bitbucket.org:mundoreader/corejs-build.git
    ```

* **coreJS Base**
En este repositorio se guarda los módulos principales de toda webapp (localización, integración con backend, factorías, configuración, ...), así como módulos reutilizables entre aplicaciones.

    ```bash
    git@bitbucket.org:mundoreader/corejs-base.git
    ```

* **coreJS Components Boilerplate**
En este repositorio define un arquetipo que almacena los módulos de coreJS que pueden reutilizar|extender otros proyectos.

    ```bash
    git@bitbucket.org:mundoreader/corejs-component-boilerplate.git
    ```

* **coreJS [projectName] Modules**
En este repositorio almacena los módulos de la webapp específica en función del `[projectName]`:

    ```bash
    git@bitbucket.org:mundoreader/[projectName]-corejs-app.git
    git@bitbucket.org:mundoreader/bookland-corejs-app.git
    git@bitbucket.org:mundoreader/mercurio-corejs-app.git
    git@bitbucket.org:mundoreader/orpheus-corejs-app.git
    ```

* Los **desarrolladores de webapps** trabajarán principalmente con los repositorios de **coreJS [projectName] Modules**, creando módulos específicos.
* Los **desarrolladores del coreJS** trabajarán principalmente con el repsitorio de **coreJS Base**


## Estructura de archivos

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

## Configuración

La aplicación tiene un documento de parámetros y constantes por defecto en el repositorio de la aplicación con nombre`corejs-[projectName]-app`, en `src/main/webapp/res/config/config.json`, que permiten la configuración de la aplicación, así como su fácil acceso para el resto de los módulos.

A conitnuación se explican cada uno de los parámetros. 

| Clave | Descripción | Tipo | Obligatorio |
|-------|-------------|------|-------------|
| `mode` | Establece el entorno general de la aplicación, ofrece la oportunidad a los desarrolladoresde cambiar el comportamiento de la aplicación dependiendo del entorno (formularios pre-cumplimentados, mocks, stubs, etc). | `String` | no |
| `version` | Establece la versión pública de la aplicación. Nos permite enviar la versión con la que se están generando las trazas para el logToServer. Debería seguir las convenciones establecidas en [semver.org](http://semver.org/). | `String` (`0.0.1`) | **sí** |
| `appName` | Establece el nombre interno de la aplicación web. Nos permite identificar qué aplicación realiza qué operaciones. | `String` (`corejs-app`) | no |
| `clientType` | Establece el tipo de cliente. Normalmente se usa para backends que ofrecen servicios a diferentes tipos de cliente y cada uno puede tener necesidades específicas. | `String` (`WEB`) | no |
| `lang` | Establece el idioma por defecto | `String` (`es-ES`) | no |
| `logLevel` | Establece el nivel de log que se desea registrar: `0`: trace, `1`: debug, `2`: info, `3`: warn, `4`: error, `5`: silent | `Integer` (`0`) | no |
| `logBuffer` | Establece la cantidad de logs a almacenar hasta que se envía al servidor | `Integer` (`10`) | no |
| `logToServer` | Establece el nivel de log que se desea **enviar al servidor**: `0`: trace, `1`: debug, `2`: info, `3`: warn, `4`: error, `5`: silent | `Integer` (`2`) | no |
| `logServerEndpoint` | Establece la ruta del servidor a donde enviar los logs | `String` (`endpoint/`) | no |
| `resourcesEndpoint` | Establece la ruta base hasta los recursos del backend. | `String` | **sí** |
| `evciEndPoint` | Establece la ruta base hasta el registro de eventos del backend. | `String` | **sí** |
| `ecEndpoint` | Establece la ruta base hasta la gestión del E-Comerce del backend. | `String` | **sí** |
| `oauthEndpoint` | Establece la ruta base hasta el servidor de OAuth para la autenticación. | `String` | **sí** |
| `oauthClientId` | ClientId proporcionado por el proveedor del servicio de OAuth correspondiente. | `String` | **sí** |
| `oauthSecret` | SecretId proporcionado por el proveedor del servicio de OAuth correspondiente. | `String` | **sí** |
| `oauthService` | Nombre del servicio de OAuth. | `String` | **sí** |
| `iamEndpoint` | Establece la ruta base hasta el servidor de IAM. | `String` | **sí** |
| `clientId` | ClientId proporcionado por el proveedor del servicio de IAM. | `String` | **sí** |
| `clientSecret` | SecretId proporcionado por el proveedor del servicio de IAM correspondiente. | `String` | **sí** |
| `claimAud` | Valor de la variable `aud` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html). | `String` | **sí** |
| `claimGrantType` | Valor de la variable `grant-type` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html). | `String` | **sí** |
| `claimScopes` | Valor de la variable `scopes` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para una se**sión** anónima. | `String` | **sí** |
| `claimScopesUser` | Valor de la variable `scopes` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para usuarios autenticados. | `String` | **sí** |
| `claimScopesRegister` | Valor de la variable `scopes` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para registrar usuarios nuevos **En formato Array!**. | `String` | **sí** |
| `claimExp` | Valor de la variable `exp` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html). | `Integer` (3500 (segundos)) | no |
| `grantType` | Valor de la variable `grant-type` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para registrar usuarios nuevos. | `String` | **sí** |
| `jwtAlgorithm` | Valor de la variable `alg` para la generación del [JWT](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) para registrar usuarios nuevos. | `String` | **sí** |
| `autoTokenRefresh` | Activa el autorefresco de token cuando una petición que requiere autenticación falla por `401`. | `Boolean` (false) | no |

Además la aplicación se puede configurarse de varias formas, estableciendo los parámetros en el código a través de una variable global de configuración `CFG`, o en tiempo de ejecución a través del archivo `app/res/config/config.json`.


### window.CFG

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

### config.json

Si no se define configuración por variable global como se ha mencionado antes, la aplicación tratará de bajarse la configuración definida en `src/main/webapp/res/config/config.json`.

los atributos del JSON son los mismos definidos antes para la variable `CFG`.



## Gestión de Dependencias

Las dependencias de la aplicación se gestiónan con [RequireJS](http://requirejs.org/), y el archivo donde se define el árbol de dependencias entre las librerías está definido en:

* Aplicación: `src/main/webapp/scripts/define.js`
* Tests: `src/test/scripts/define.js`

> **Más info**

> * [RequireJS](http://requirejs.org/)

## Contexto de Aplicación

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

## Inicialización de la aplicación

El proceso de inicialización de una aplicación web puede llegar a ser muy complejo, para ello, `app` provee mecanismos necesarios para poder definir este proceso de forma distribuída de tal forma que cada tarea especifica de inicialización pueda estar definido en el módulo que le corresponda.

Una aplicación Marionette se inicializa cuando se lanza la llamada `app.start()`, y con ello, todos sus manejadores definidos.

Para añadir nuevas tareas al proceso de inicialización basta con incluir el siguiente código donde sea pertinente.

* En el instante que se lanza `app.start()`:

    ```javascript
        app.addInitializer(function() {
            // Initialization code here
        });
    ```

* Despues de que se ejecuten todos los inicializadores:

    ```javascript
        app.on('initialize:after', function() {
            // Post initialization code here
        });
    ```

> **Más info**

> * [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md)

## Definir las Regiones Principales

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

> **Más info**

> * [Marionette.Region](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md)
> * [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md)

## Módulos base

Los módulos base son aquellos que vienen incluidos en coreJS base por defecto.

### Logger

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

#### Niveles de Log
Los errores ordenados de mayor a menor nivel son los siguientes:
  * `SILENT`(`5`): Este nivel sirve para anular el log 
  * `ERROR`(`4`): Muestra por consola los errores de la aplicación
  * `WARN`(`3`): Muestra las alertas de la aplicación y mensajes de mayor nivel
  * `INFO`(`2`): Muestra las trazas de información y mensajes de mayor nivel
  * `DEBUG`(`1`): Muestra mensajes de depuración y mensajes de mayor nivel
  * `TRACE`(`0`): Muestra trazas de desarrollo y mensajoes de mayor nivel
  * `ALL`(`0`): Muestra todos los mensajes

```javascript
app.log.setLevel(app.log.level.INFO);
```

#### Filtrar Log

A veces es necesario filtrar el log para que muestre únicamente las trazas de log que nos interesan. Para filtrar todos los logs que no sean de una sección en particular podemos hacer:

```javascript
app.log.filter('engine');
```

Con ésto conseguimos que sólo se muestran las trazas que comiencen por la palabra `engine`.


#### Log To Server

El log tiene la capacidad de enviar cierta inforamción a un servidor específico, para ello, primero hay que **configurarlo y habilitarlo**

```javascript
var config = {
    logToServer: app.log.level.INFO,  // Nivel de log mínimo a enviar al servidor
    logBuffer: 10,                    // Nº de trazas antes de enviar al servidor
    logServerEndpoint: 'url'          // Ruta hasta el servidor que almacena logs
    logLevel: app.log.level.WARN      // Nivel de log mínimo a mostrar en cliente
}
app.log.setConfig(config);
```

#### Integración con Silkroad

Si se integra con Silkroad, éste automáticamente sobreescribe el comportamiento para subir logs para que haga uso del módulo de `EVCI`, para ello, es necesario establecer en la configuración de la aplicación `res/config/config.json` la clave `evciEndpoint`.

Opcionalmente, se puede definir un namespace donde estará disponible el log en `EVCI` estableciendo la variable de configuración `loggerNamespace` en `res/config/config.json`, en su defecto, `EVCI` usara el valor del campo `app.common.get('appName')`.

#### Recomendaciones

Ala hora de construir los mensajes de log, hay que tener en cuenta que si el mensaje que se construye es complejo, es una buena práctica detectar el nivel de log establecido para evitar tener que construir mensajes innecesarios, por ejemplo:

```javascript
var complexLogMessageBuilder = function() {
    // Complex code here
    return logString;
}

if (app.log.getLevel() === app.log.level.INFO) {
    app.log.info(complexLogMessageBuilder());
}
```


### Factory

Este módulo se encarga de gestionar los diferentes tipos de objetos de la aplicación (Model, Collection, Layout, View, ...)

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

> **Nota**: Se debe tener en cuenta la convención de nombres para los diferentes componentes (Name + Type).


### Cookies

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

> **Más info**

> * [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/document.cookie?redirectlocale=en-US&redirectslug=DOM%2Fdocument.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support)



### User

Este módulo es el responsable de encapsular toda la complejidad relacionada con los protocolos de autenticación, altas de usuarios y autorización de peticiones a recursos.


#### Registro con Silkroad

Si la aplicación puede registrar nuevos usuarios en la plataforma, es posible realizarse con la siguiente llamada:

```javascript
var params = {
    username: 'username',
    email: 'email@domain.com',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    oauthService: 'silkroad'
};

app.user.register(params).then(function(data) {
  // Success code
}).fail(function(silkRoadError) {
  // Error code
});
```

**Parámetros de configuración**

* `iamEndpoint`: Endpoint hasta la API de IAM de Silkroad.
* `oauthEndpoint`: Endpoint hasta la API de Oauth de Silkroad.
* `grantType`: El valor de `grantType` para generar el JWT.
* `jwtAlgorithm`: Algoritmo usado para el JWT.
* `clientSecret`: Clave de cliente proporcionada por Silkroad para comunicarse con él.


#### Registro con Google+ | Facebook

Para registrar a través de Google+|Facebook, existen 2 métodos:

* **1 Click Register**: Este método obtiene los datos de perfil necesario de Google+|Facebook para registrarlo automáticamente en IAM.

    ```javascript
    var params : {
        oauthService: 'google'    // facebook|google
    };
    app.api.register(params).then(function(data) {
      // Success code
    }).fail(function(error) {
      // Error code
    });
    ```

* **2 Step register**: Este método devuelve los datos de perfil necesario de Google+|Facebook para registrar en un paso posterior en IAM.

    ```javascript
    var params : {
        oauthService: 'google'    // facebook|google
    };
    app.api.me(params).then(function(oauthUser) {
      // Refresh form with oauthUser data
    }).fail(function(error) {
      // Error code
    });
    ```


#### Autenticación con Silkroad

```javascript
var params : {
    username: 'username',
    password: 'password',
    oauthService: 'silkroad',
    remember: 1
};
app.api.login(params).then(function(data) {
  // Success code
}).fail(function(error) {
  // Error code
});
```

**Parámetros de configuración**

* `iamEndpoint`: Endpoint hasta la API de IAM de Silkroad.
* `oauthEndpoint`: Endpoint hasta la API de Oauth de Silkroad.
* `grantType`: El valor de `grantType` para generar el JWT.
* `jwtAlgorithm`: Algoritmo usado para el JWT.
* `clientSecret`: Clave de cliente proporcionada por Silkroad para comunicarse con él.

#### Autenticación con Google+ | Facebook

```javascript
var params : {
    oauthService: 'google',    // facebook|google
    remember: 1
};
app.api.login(params).then(function(data) {
  // Success code
}).fail(function(error) {
  // Error code
});
```

**Parámetros de configuración**

* `googleClientId`: Id cliente de la aplicación creada en Google para webapps.
* `facebookClientId`: Id cliente de la aplicación creada en Facebook.


> **Mas Info**

> * [Facebook app creation](https://developers.facebook.com/apps)

#### Autorización

Una vez autenticado, el módulo mantiene de forma interna la información necesaria para identificarlo, además se encarga de construir las peticiones automáticamente con la autorización necesaria.

La aplicación deberá tener una clave que lo identifica como cliente autorizado `client_id`, y una clave secreta que le autoriza a realizar peticiones `secret`, ambos parámetros deberán estár definidos en la [configuración](core_base) de la aplicación, ya sea en tiempo de ejecución o en tiempo de despliegue.

Con dichos parámetros establecidos, la aplicación durante su inicialización, generará automáticamente una autorización de comunicación con SilkRoad ya sea como cliente anónimo, o como un usuario específico si decidió recordar su acceso. Todo ello de forma trasparente al desarrollador.

> **Más info**

> * [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)


### Session


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

// Create a logged session, this method are called
// automatically with app.user.login success
app.session.logged({
    access:token: 'token',
    oauthService: 'silkroad',   // silkroad|facebook|google
    user: user                  // user object
    persistent: false           // persistent session (login with remember)
});
```


### Resources


Este módulo es el responsable de solicitar los recursos del backend necesarios para mostrar la información necesaria, encapsulando toda la complejidad relacionada con los protocolos de autenticación, autorización de peticiones, las búsquedas avanzadas y el mapeo a los modelos de datos.

En Silkroad se pueden obtener 3 tipos de recursos:

#### Recurso específico

```javascript
app.resources.resource('books:Book', 'id').get().then(function(data) {

}).fail(function(silkRoadError) {

});
```

* **Con Backbone**

    ```javascript
    var book = app.factory.new('BookModel');

    book.fetch({
        resourceType: 'books:Book',
        id: '9788467040203'
    }).then(function(data) {

    }).fail(function(silkRoadError) {

    });
    ```


#### Búsquedas de entidades

```javascript
var params = {
    query: [
        { '$eq': {field3: true} },
        { '$eq': {field4: true} },
        { '$gt': {field5: 'value'} },
        { '$gte': {field5: 'value'} },
        { '$lt': {field5: 'value'} },
        { '$lte': {field5: 'value'} },
        { '$ne': {field5: 'value'} },
        { '$in': {field2: ['pepe', 'juan']} },
        { '$all': {field5: ['pepe', 'juan']} },
        { '$like': {field5: 'value'} }
    ],
    page: {page: 1, size: 5},
    sort: {field1: resources.sort.ASC}
};

app.resources.collection('books:Book').get(params).then(function(data) {

}).fail(function(silkRoadError) {

});
```

* **Con Backbone**

    ```javascript
    var books = new Backbone.Collection([], {
            model: Backbone.Model,
        }),
        params = {
            resourceType: 'books:Book',
            query: [
                { '$eq': {field3: true} },
                { '$eq': {field4: true} },
                { '$gt': {field5: 'value'} },
                { '$gte': {field5: 'value'} },
                { '$lt': {field5: 'value'} },
                { '$lte': {field5: 'value'} },
                { '$ne': {field5: 'value'} },
                { '$in': {field2: ['pepe', 'juan']} },
                { '$all': {field5: ['pepe', 'juan']} },
                { '$like': {field5: 'value'} }
            ],
        page: {page: 1, size: 5},
        sort: {field1: resources.sort.ASC}
    };

    books.fetch(params).then(function(data) {

    }).fail(function(silkRoadError) {

    });
    ```



#### Búsquedas de entidades en base a una relación

Este tipo de búsquedas permiten listar entidades en base a larelación con otra entidad existente. Por ejemplo buscar 'los autores de un libro específico'.

```javascript
var params = {
    query: [
        { '$eq': {field3: true} },
        { '$eq': {field4: true} },
        { '$gt': {field5: 'value'} },
        { '$gte': {field5: 'value'} },
        { '$lt': {field5: 'value'} },
        { '$lte': {field5: 'value'} },
        { '$ne': {field5: 'value'} },
        { '$in': {field2: ['pepe', 'juan']} },
        { '$all': {field5: ['pepe', 'juan']} },
        { '$like': {field5: 'value'} }
    ],
    page: {page: 1, size: 5},
    sort: {field1: resources.sort.ASC}
};

app.resources.relation('books:Book', 'id', 'author').get(params).then(function(data) {

}).fail(function(silkRoadError) {

});
```

* **Con Backbone**

    ```javascript
    var books = new Backbone.Collection([], {
            model: Backbone.Model,
        }),
        params = {
            resourceType: 'books:Book',
            id: 'id',
            rel: 'author',
            query: [
                { '$eq': {field3: true} },
                { '$eq': {field4: true} },
                { '$gt': {field5: 'value'} },
                { '$gte': {field5: 'value'} },
                { '$lt': {field5: 'value'} },
                { '$lte': {field5: 'value'} },
                { '$ne': {field5: 'value'} },
                { '$in': {field2: ['pepe', 'juan']} },
                { '$all': {field5: ['pepe', 'juan']} },
                { '$like': {field5: 'value'} }
            ],
        page: {page: 1, size: 5},
        sort: {field1: resources.sort.ASC}
    };

    books.fetch(params).then(function(data) {

    }).fail(function(silkRoadError) {

    });
    ```

**Parámetros de configuración**

* `resourcesEndpoint`: Endpoint hasta la API de recursos de Silkroad.


> **Más info**

> * [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)



### Polyfills

En este módulo se pueden definir polyfills necesarios para que la aplicación funcione como se espera para los navegadores soportados.

Por defecto incorpora los siguientes polyfills: `localStorage`, `sessionStorage` y `Date.toISOString` entre otros.

> **Más info**

> * [Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)




## Navegadores Soportados


coreJS y sus módulos tienen como objetivo dar soporte a los siguientes navegadores:

* IE10+
* Chrome 35+
* Firefox 29+
* Safari 7+
* Opera 20+

> **Más Info**

> * http://www.w3schools.com/browsers/browsers_stats.asp
> * http://www.w3schools.com/browsers/browsers_os.asp
> * [Crossbrowser tests](/testing)
