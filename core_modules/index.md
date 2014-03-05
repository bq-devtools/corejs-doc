---
layout: page
---

coreJS Modules
==============

En esta sección describiremos los módulos del coreJS-Base más relevantes y de uso más frecuente.


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