---
layout: page
---

Módulo: User
============

Este módulo es el responsable de encapsular toda la complejidad relacionada con los protocolos de autenticación, altas de usuarios y autorización de peticiones.

## Registro ##

Si la aplicación puede registrar nuevos usuarios en la plataforma, es posible realizarse con la siguiente llamada:

```javascript
var params = {
    username: 'username',
    email: 'email@domain.com',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    oauthService: 'silkroad'    // silkroad|facebook|google
};

app.user.register(params).then(function(data) {
  // Success code
}).fail(function(silkRoadError) {
  // Error code
});
```

### Parámetros de configuración

* `iamEndpoint`: Endpoint hasta la API de IAM de Silkroad.
* `oauthEndpoint`: Endpoint hasta la API de Oauth de Silkroad.
* `grantType`: El valor de `grantType` para generar el JWT.
* `jwtAlgorithm`: Algoritmo usado para el JWT.
* `clientSecret`: Clave de cliente proporcionada por Silkroad para comunicarse con él.

## Autenticación ##


Para realizar una autenticación de un usuario en particular, en la vista responsable podemos realizar la siguiente llamada, tras recopilar los datos del usuario de un formulario de login típico:

### Silkroad
```javascript
var params : {
    username: 'username',
    password: 'password',
    oauthService: 'silkroad',    // silkroad|facebook|google
    remember: 1
};
app.api.login(params).then(function(data) {
  // Success code
}).fail(function(jqxhr) {
  // Error code
});
```

### Parámetros de configuración

* `iamEndpoint`: Endpoint hasta la API de IAM de Silkroad.
* `oauthEndpoint`: Endpoint hasta la API de Oauth de Silkroad.
* `grantType`: El valor de `grantType` para generar el JWT.
* `jwtAlgorithm`: Algoritmo usado para el JWT.
* `clientSecret`: Clave de cliente proporcionada por Silkroad para comunicarse con él.

### Facebook
```javascript
var params : {
    oauthService: 'facebook',
    remember: 1
};
app.api.login(params).then(function(data) {
  // Success code
}).fail(function(jqxhr) {
  // Error code
});
```

### Parámetros de configuración

* `facebookClientId`: Id cliente de la aplicación creada en Facebook.

**Mas Info**

* [Facebook app creation](https://developers.facebook.com/apps)


### Google+
```javascript
var params : {
    oauthService: 'google',
    remember: 1
};
app.api.login(params).then(function(data) {
  // Success code
}).fail(function(jqxhr) {
  // Error code
});
```

### Parámetros de configuración

* `googleClientId`: Id cliente de la aplicación creada en Google para webapps.

### Autorización ###

Una vez autenticado, el módulo mantiene de forma interna la información necesaria para identificarlo, además se encarga de construir las peticiones automáticamente con la autorización necesaria.

La aplicación deberá tener una clave que lo identifica como cliente autorizado `client_id`, y una clave secreta que le autoriza a realizar peticiones `secret`, ambos parámetros deberán estár definidos en la [configuración](core_base) de la aplicación, ya sea en tiempo de ejecución o en tiempo de despliegue.

Con dichos parámetros establecidos, la aplicación durante su inicialización, generará automáticamente una autorización de comunicación con SilkRoad ya sea como cliente anónimo, o como un usuario específico si decidió recordar su acceso. Todo ello de forma trasparente al desarrollador.

**Más info**

* [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)