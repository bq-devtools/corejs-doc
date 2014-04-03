---
layout: page
---

Módulo: User
============

Este módulo es el responsable de encapsular toda la complejidad relacionada con los protocolos de autenticación, altas de usuarios y autorización de peticiones.

## Registro ##


### Silkroad

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

### Google+ | Facebook

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

## Autenticación ##


Para realizar una autenticación de un usuario en particular, en la vista responsable podemos realizar la siguiente llamada, tras recopilar los datos del usuario de un formulario de login típico:

### Silkroad
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

### Google+ | Facebook
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


**Mas Info**

* [Facebook app creation](https://developers.facebook.com/apps)

### Autorización ###

Una vez autenticado, el módulo mantiene de forma interna la información necesaria para identificarlo, además se encarga de construir las peticiones automáticamente con la autorización necesaria.

La aplicación deberá tener una clave que lo identifica como cliente autorizado `client_id`, y una clave secreta que le autoriza a realizar peticiones `secret`, ambos parámetros deberán estár definidos en la [configuración](core_base) de la aplicación, ya sea en tiempo de ejecución o en tiempo de despliegue.

Con dichos parámetros establecidos, la aplicación durante su inicialización, generará automáticamente una autorización de comunicación con SilkRoad ya sea como cliente anónimo, o como un usuario específico si decidió recordar su acceso. Todo ello de forma trasparente al desarrollador.

**Más info**

* [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)