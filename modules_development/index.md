---
layout: page
---

Desarrollo de Módulos
=====================



El objetivo de los módulos es la de contener los recursos necesarios que definan una funcionalidad, comportamiento o componente completo, de tal forma que sea un paquete coherente y cohesionado, pero a la vez, poco acoplado con respecto al resto de módulos, asegurando la escalabilidad y la mantenibilidad de la aplicación.

Para que un módulo pueda definir una funcionalidad completa se propone la siguiente estructura de módulo.

## Estructura del proyecto ##

```
src/main/webapp
├── css                             // Hojas de estilo transversales
├── res
│   └──config
│       ├──config.json              // Configuración de la webapp
│       └──externalModule.json      // Configuración del módulo externo 'externalModule'
└── scripts
    ├──define.js                    // definición de dependencias requirejs
    ├──main.js                      // Script principal de la webapp
    └──modules                      // directorios de módulos de la webapp
        ├──loader.js                // Declaración de móduloas a cargar
        └──myModule                 // Nombre del módulo
            ├── start.js            // Inicialización y carga de dependencias
            ├── css                 // Hojas de estilo del módulo
            │   └── *.scss
            ├── res
            │   ├──img
            │   │   └──*.{jpeg, jpg, png, ...)  // Configuración de la webapp
            │   ├── icons
            │   │   ├── xs
            │   │   │   └──*.png
            │   │   ├── xs-retina
            │   │   │   └──*.png
            │   │   ├── sm
            │   │   │   └──*.png
            │   │   ├── sm-retina
            │   │   │   └──*.png
            │   │   ├── md
            │   │   │   └──*.png
            │   │   ├── md-retina
            │   │   │   └──*.png
            │   │   ├── lg
            │   │   │   └──*.png
            │   │   └── lg-retina
            │   │   │   └──*.png
            │   └──config
            │       ├──config.json  // Configuración del módulo
            ├── collections         // Colecciones del módulo
            │   └── *.js
            ├── layouts             // Layouts del módulo
            │   └── *.js
            ├── models              // Modelos del módulo
            │   └── *.js
            ├── templates           // Templates "Handlebars" del módulo
            │   ├──*.html
            │   └── moreTemplates
            │       └── *.html
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

```javascript
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

```javascript
var MyModel = Backbone.Model.extend({});
myModel = new MyModel({
    foo: 'Hi',
    bar: 'Álvaro'
});
```

Un template válido para representar estos datos sería:

```html
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

```javascript
// Ruta hasta el template
scripts/modules/myModule/tempaltes/subTemplates/myTemplate.html

// Clave asociada en la estructura `jst`
app.jst['myModule/subTemplates/myTemplate'];
```

Para crear una vista de este tipo basta con seguir el siguiente esqueleto en el directorio de `views` del módulo:

```javascript
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

```javascript
app.addInitializer(function() {
  app.views.add('MyView', MyView);
});
```

Por último, para renderizar una vista, puede hacerse de 2 maneras principalmente.

* En una región

```javascript
app.regionName.show(app.factory.new('MyView'));
```

* De forma explícita

```javascript
var myView = app.factory.new('MyView');
$('body').html(myView.render().el);
```

**Mas info**

* [Marionette.ItemView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.itemview.md)

#### CollectionView ####

Este componente se encarga de renderizar una [collección de modelos](http://backbonejs.org/#Collection) en base a un `ItemView` y un `Collection` de Backbone.

La vista que renderiza se especifica en el atributo `itemView` del `CollectionView`

```javascript
// Ruta hasta el template
scripts/modules/myModule/tempaltes/subTemplates/myTemplate.html

// Clave asociada en la estructura `jst`
app.jst['myModule/subTemplates/myTemplate'];
```

Para crear un `CollectionView` basta con seguir el siguiente esqueleto en el directorio de `views` del módulo:

```javascript
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

```html
<!-- myModule/templates/myLayout.html -->
<section>
    <header data-region="header"></header>
    <div data-region="content"></div>
    <div data-region="actions"></div>
</section>
```

Podemos definir un Layout como el siguiente:

```javascript
var MyLayout = Backbone.Marionette.Layout.extend({
    template: function(serializedModel) {
        app.jst['myModule/myLayout'](serializedModel);
    },
    
    regions: {
        header: '[data-region="header"]',
        content: '[data-region="content"]',
        actions: '[data-region="actions"]'
    }
});

app.layout.add('MyLayout', MyLayout);
```

Y rednderizarlo en la aplicación:

```javascript
var myLayout = app.factory.new('MyLayout');

app.main.show(myLayout);

myLayout.content.show(app.factory.new('MyView'));
```

Se pueden anidar tantos layouts como sean necesarios.


**Más info**

* [Marionette.Region](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md)
* [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md)

### Controllers ###

Para que nuestra aplicación pueda actuar en función de la ruta del usuario, usamos el componente `Router` de Backbone.

Generalmente, los manejadores de las rutas son los responsables de obtener todos los recursos necesarios e injectarselo a las vistas para que lo representen correctamente.

Para definir una ruta con su manejador hay que implementar `controller.js` en el módulo en cuestión:

```javascript
// controller.js
'use strict';
/* global define */
define([
    'corejs/app'
], function(app) {
    var controller = {
        myHandler: function(isbn) {
            var myModel = app.factory.new('MyModel');
            app.myRegion.show(app.factory.new('MyView', {
                model: myModel
            }));
        }
    };

    return controller;
});
```

Para luego incorporarlo en el `start.js`:

```javascript
'use strict';
/* global define */
define([
    'corejs/app',
    'modules/myModule/models/myModel',
    'modules/myModule/views/myView',
    'modules/myModule/controller'
], function(app, MyModel, MyView, controller) {
  // Add models to factory
  app.factory.add('MyModel', MyModel);

  // Add views to factory
  app.factory.add('MyView', MyView);

  app.addInitializer(function() {
    // Define router paths
    app.router.route('myroute', 'trigger:this:event', controller.myHandler);
  });

});
```

**Más info**

* [Backbone.Router](http://backbonejs.org/#Router)

### Extender una Vista|Modelo|Colección

Es posible extender cualquier otro componente accesible desde la factoría a través del `app.factory.get()`, de la forma que se muestra a continuación:

```javascript
'use strict';
/* global define */
define([
    'corejs/app'
], function(app) {
    var MyExtendedView = app.factory.get('MyCustomView').extend({
        template: function(serializedModel) {
            // Load the compiled template generated by
            // 'modules/myModule/templates/myTemplate.html'
            return app.jst['myModule/myTemplate'](serializedModel);
        }
    });

    return MyExtendedView;
});
```

Con esto conseguimos reutilizar otros componentes y añadir o modificar únicamente el comportamiento que nos haga falta.

### Inicialización de un módulo ###

Uno de los pasos a la hora de desarrollar un módulo con diferentes componentes, es la de definir el lugar donde declarar e integrar todos esos componentes en la aplicación, para ello, definiremos un documento `start.js` para cada módulo implementado.

Un ejemplo de `start.js` podría ser el siguiente:

```javascript
'use strict';
/* global define */
define([
    'corejs/app',
    
    'modules/myModule/controller',

    // app models
    'modules/myModule/models/myModel',
    
    // app collecctions
    'modules/myModule/collections/myCollection',

    // app views
    'modules/myModule/views/myView'
    'modules/myModule/views/myCollectionView'
], function(app, controller, MyModel, MyCollection, MyView, MyCollectionView) {

  // Add models to factory
  app.factory.add('MyModel', MyModel);
  // Add views to factory
  app.factory.add('MyView', MyView);

  app.addInitializer(function() {
    // Define router paths (url, event, handlerFunction)
    app.router.route('myroute', 'router:route:myroute', controller.myHandler);
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
var config = app.modulesConfig.get('moduleName'[, modelName]);
```
* **Nota**: Es posible obtener directamente un tipo específico de `Backbone.Model`, si se establece el nombre del modelo en el parámetro `modelName` (debe de ser el mismo nombre con el que se dió de alta en la factoría).


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