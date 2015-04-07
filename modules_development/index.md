---
layout: doc
---

# Desarrollo de Módulos


El objetivo de los módulos es la de contener los recursos necesarios que definan una funcionalidad, comportamiento o componente completo, de tal forma que sea un paquete coherente y cohesionado, pero a la vez, poco acoplado con respecto al resto de módulos, asegurando la escalabilidad y la mantenibilidad de la aplicación.

Para que un módulo pueda definir una funcionalidad completa se propone la siguiente estructura de módulo.

## Estructura del proyecto ##

```
app
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
            ├── controller.js       // Controlador del módulo
            ├── dispatcher.js       // dispatcher del módulo
            ├── config.js           // configuration del módulo
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
app/test
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
  app.factory.add('MyModel', MyModel);
});
```

> **Más info**

> * [Backbone.Model](http://backbonejs.org/#Model)


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

> **Más info**

> * [Handlebars](http://handlebarsjs.com/).

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

app.factory.add('MyView', MyView);

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

> **Mas info**

> * [Marionette.ItemView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.itemview.md)

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

> **Más info**

> * [Backbone.Collection](http://backbonejs.org/#Collection)
> * [Marionette.CollectionView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.collectionview.md)

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


> **Más info**

> * [Marionette.Region](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md)
> * [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md)




### Extender una Vista-Modelo-Colección

Es posible extender cualquier otro componente accesible desde la factoría a través del `app.factory.get()`, de la forma que se muestra a continuación:

```javascript
'use strict';
/* global define */
define([
    'corejs/app'
], function(app) {
    var MyExtendedView = app.factory.get('MyCustomView').extend({

        // Load the compiled template generated by
        // 'modules/myModule/templates/myTemplate.html'
        template: app.jst['myModule/myTemplate']

    });

    return MyExtendedView;
});
```

### Layout Manager


El Layout Manager nos permite definir una jerarquía de layouts en nuestra aplicación, de tal forma que cuándo querámos hacer uso de un layout,
tanto este cómo los layouts de los que depende, estén disponibles.

Para ello son necesarias tres cosas:

1. Definir el layout del que depende (su identificador en la factoría)
2. Dar de alta el propio layout en la factoría
3. Definir en la jerarquía de layouts un layout cuyo padre sea la región principal ( main ) de la aplicacion (app.main) (condición de parada)

Además podemos definir la región del layout padre sobre la que debe pintarse. En caso de no delcarar ninguna, se pintará en la región content.


**EJEMPLO**

```javascript
    var ParentLayout = Backbone.Marionette.Layout.extend({
        parentLayout: 'main',
        regions: {
            'content' : '.content'
        }
    });

    app.factory.add('ParentLayout', ParentLayout);

    var ChildLayout = Backbone.Marionette.Layout.extend({
        parentLayout: 'ParentLayout',
        parentRegion: 'content'
    });

    app.factory.add('ChildLayout',ChildLayout);

    var childLayout = app.layoutManager.setLayout('ChildLayout');

    childLayout.content.show(someView);
```


El LayoutManager se encarga de instanciar y pintar mi layout si aún no lo está y de instanciar y pintar mis layouts padres si tampoco lo están. En el caso de que mi layout o alguno de mis padres ya estén pintados, no se volveran a pintar.

#### Fixed Child Views

Cómo los layouts puede que se pinten sin tener un control real de ellos (un controller que los llame etc.), se dispone de un behavior llamado **fixedChildViews**
que, aplicado sobre un layout, nos permite definir vistas fijas que se van a pintar implicitamente en ciertas regiones de un layout cada vez que este se pinte.

Son necesarios seguir una serie de pasos para aplicar dicho behavior:

1. Definir la vista fija en la factoría
2. Aplicar al layout el behavior


Tenemos tres formas de especificar qué vistas fijas se desean y en qué regiones:

*EN LA INICIALIZACIÓN DEL BEHAVIOR:*

```javascript
     var ChildLayout = Backbone.Marionette.Layout.extend({
        parentLayout: 'ParentLayout',
        parentRegion: 'content',
        behaviors:{
            fixedChildViews: {
                defaults: {
                    content: { //nombre de la región
                        view: 'identificadorDeMiVista',
                        options: 'opciones opcionales a la hora de instanciar la vista',
                        singleton: true //Si queremos que la vista sea una única instancia Singleton
                    }
                }
            }
        }
    });
```


*EN EL SHOW DE LA VISTA SOBRE EL LAYOUT:*

```javascript
    childLayout.show(miView,{
            fixedChildViews: {
                left: { //nombre de la región
                    view: 'identificadorDeMiVista',
                    options: 'opciones opcionales a la hora de instanciar la vista',
                    singleton: true //Si queremos que la vista sea una única instancia Singleton
                }
           }
    });
```


*INVOCANDO EL MÉTODO setDefaultFixedView*

```javascript
    childLayout.setDefaultFixedView({
        right: {    //nombre de la región
                    view: 'identificadorDeMiVista',
                    options: 'opciones opcionales a la hora de instanciar la vista',
                    singleton: true //Si queremos que la vista sea una única instancia Singleton
                }
    });
```


Además el layout hace de proxy para los eventos que lancen sus vistas (tanto fijas cómo no fijas) mediante el prefijo childview:[eventname]

```javascript
    childLayout.listenTo(this,'childview:evento:vista',function(){});
```

Por si no tenemos una referencia directa a la vista que se está mostrando fijamente (aunque se podria acceder a ella a través de layout.nombreRegion.currentView)

#### Views survival

Marionette no permite la reutilización de vistas una vez que estas son cerradas (si se cierra una region, se cierra la vista que se estaba mostrando).
Sin embargo, se ha desarrollado esta funcionalidad, de forma que una vista (layout,itemView,collectionView,compositeVIew) se puede reutilizar una vez que ha sido cerrada:

```javascript

    var view = Marionette.ItemView({});

    region.show(view);
    region.close(view),
    region.show(view);
```

Sin perder los eventos a los que la habíamos ligado la vista(a través de listenTo, si se usa on no se recuperan ).

**IMPORTANTE** Para evitar memory leaks, se ha proporcionado el método destroy, quedando así la vista inservible. Si se sabe que esa vista no se va a volver a usar, llamar manualmente al método destroy para que no se ensucie la memoria.


### Behavior Validation

El Behavior Validation posee una serie de variables de configuración con el objetivo de adaptarse de la mejor manera a las necesidades de cada proyecto.

Nombre | Función | Tipo | Defecto
------------ | ------------- | ------------- | -------------
*hook* | Posición que va a ocupar el mensaje de error | String | "bottom"
*blur* | Mostrar errores al hacer *on blur* | Boolean  | false
*cleanOnFocusErrors* | Limpiar mensajes de error tras realizar *on focus* | String  | true
*templateGeneric* | Template por defecto para los errores genéricos | String | "validation/validation"
*templateInputs* | Template por defecto para los errores localizados en los inputs | String | "validation/validationInput"
*mobile* | Uso de diferentes templates para dispositivos móviles | Boolean | false
*wrapperClassInputError* | Wrapper para definir el css de los input con errores | String | "input-error"
*submit* | Evento de envío de formulario | String | "login"

Todas estos valores por defecto pueden sobrescribirse en el momento que se aplica el behavior en una vista determinada.

```javascript
var FormLoginView = Backbone.Marionette.ItemView.extend({
     
    ...
    behaviors: {
        validation: {
            hook: 'top',    //default bottom
            blur: true,     //default false
            templateInputs: 'formLogin/formErrors'  // Override template for input errors
        }
    },
    ...
});
```

Como se ve en el siguiente ejemplo, el template de cada vista contendrá una serie de *data-validation="attribute_model"* en su formulario.

```html
<form data-action="login" data-oauth-service="silkroad" novalidate>
    <fieldset>
    <legend class="invisible" data-i18n="login-subtitle"></legend>
     
    <div class="alert-container" role="alert" data-element="form-validation"></div>
     
    <div class="form-control" data-validation="username">
         <label for="username" class="invisible" data-i18n="login-email"></label>
         <span class="input">
             <input id="username" name="username" type="email" data-i18n="placeholderlogin-email" maxlength="50" autofocus>
         </span>
    </div>
 
    <div class="form-control" data-validation="password">
        <label for="password" class="invisible" data-i18n="login-password"></label>
            <span class="input">
                 <input id="password" name="password" type="password" data-i18n="placeholderlogin-password" data-element="login-password" autocomplete="off" maxlength="30">
            </span>
    </div>
 
    ...
</form>
```

Cada *data-validation* debe estar relacionado con un atributo del modelo datos que este validando, por ejemplo, un modelo de datos *User* que posee dos atributos: *username* y *password*.

```javascript
var User = Backbone.Model.extend({
        defaults: {
            username: undefined,
            password: '',
        },
        validation: {
            username: [
                {
                    required: true,
                    msg: 'Es necesario su nombre de usuario'
                }
            ],
            password: [
                {
                    required: true,
                    msg: 'Es necesaria su constraseña'
                }
            ]

        }
});
```



> **Más info**

> * [Marionette.Behavior](http://marionettejs.com/docs/marionette.behavior.html)
> * [Marionette.Behaviors](http://marionettejs.com/docs/marionette.behaviors.html)

## Creación de módulos ##

### Inicialización de un módulo ###

Uno de los pasos a la hora de desarrollar un módulo con diferentes componentes, es la de definir el 'punto de entrada' de nuestro módulo, para ello, definiremos un documento `start.js` para cada módulo implementado. Este será el encargado de instanciar nuestro dispatcher e inicializarlo.

Un ejemplo de `start.js` podría ser el siguiente:

```javascript
'use strict';
/* global define */
define([
    'corejs/app',
    'backbone',
    'modules/mymodule/dispatcher'
], function(app) {

    app.module('MyModuleName', function(Module) {
        var dispatcher = new Module.Dispatcher();

        app.on('before:start', function() {

            dispatcher.start();

        });

    });

});
```

Para guardar nuestras opciones de configuración a nivel de módulo necesitaremos definir nuestro fichero `config.js`
Podemos acceder a la siguiente configuración desde nuestro controller utilizando namespace MyModule.config, por ejemplo `MyModule.config.MainLayout`

```javascript
'use strict';
/* global define */
define([
    'corejs/app',
    'jquery',
    'underscore',
    'backbone.marionette',
], function(app, $, _, Backbone, Marionette) {

    var Module = app.module('MyModuleName', function(Module) {

        Module.Config = Marionette.Configuration.extend({

            ModelName: 'MyModelName',
            MainLayout: 'MainLayout',
            MyCollection: 'BooksCollection'
            ...

        });
    });
    return Module.Config;
});
```


Nuestros módulos estarán autocontenidos dentro del componente Module que nos ofrece Marionette.


> **Más info**

> * [Marionette.Module](http://marionettejs.com/docs/marionette.module.html)



### Dispatcher ###

El dispatcher es el componente encargado de comunicar los diferentes módulos de nuestra aplicación con el controller del propio módulo.

Para que nuestra aplicación pueda actuar en función de la ruta del usuario, usamos el componente `Router` de Backbone.

Generalmente, los manejadores de las rutas son los responsables de obtener todos los recursos necesarios e inyectarselo a las vistas para que lo representen correctamente.

Además de definir rutas para nuestro módulo, podemos escuchar eventos globales `app.vent | app.commands` con su correspondiente manejador definiendo los objetos events y commands.

Definiendo el objeto `factory` podremos agregar a nuestra factoría los objetos que necesitemos en nuestro módulo, generalmente modelos o colecciones.

Ejemplo de `dispatcher.js` implementado en nuestro módulo:

```javascript
// dispatcher.js
'use strict';
/* global define */
define([
    'corejs/app',
    'backbone.marionette',
    'modules/mymodule/model/myModel',
    'modules/mymodule/controller',
    'modules/mymodule/config'
], function(app, BookModel, Controller) {

    var Module = app.module('MyModuleName', function(Module) {

        Module.Dispatcher = Marionette.Dispatcher.extend({
            
            // Module Controller
            Controller: Controller,

            // Router handlers
            routes: {
                'book/:id': 'handlerBook',
                'book/:title/:id': ...
            },

            // listen global app.vent
            events: {
                'show:books:related': 'handlerListRelateds'
            },

            // listen global app.commands
            commands: {
                'some:action': 'handlerSomeAction'
            },

            // Add objects to factory
            factory: {
                'MyModelName': myModel
            },

            handlerBook: function(id){
                this.controller.showBook(id);
            },

            handlerListRelateds: function() {
                this.controller.showBookRelateds();
            },

            handlerSomeAction: function() {
                this.controller.SomeAction();
            }
        });

    });

    return Module.Dispatcher;
});
```

> **Más info**

> * [Backbone.Router](http://backbonejs.org/#Router)


Con esto conseguimos reutilizar otros componentes y añadir o modificar únicamente el comportamiento que nos haga falta.


### Controller ###

El controller.js implementará las funciones necesarias para crear nuestras vistas y mostrarlas, generalmente se encargará de instanciar modelos, collecciones y vistas para posteriormente mostrarlas además de realizar nuestra 'lógica de negocio' delegando en el dispatcher.js toda la lógica de comunicación entre módulos.

```javascript
// controller.js
'use strict';
/* global define */
define([
    'corejs/app',
    'backbone.marionette'
], function(app) {

    var Module = app.module('MyModuleName', function(Module) {

        Module.Controller = Marionette.Controller.extend({

            showBook: function(){
                var myModel = app.factory.new(Module.config.myModelName);
                
                app.myRegion.show(app.factory.new(Module.MyView, {
                    model: myModel
                }));
            },

            showBooksRelated: function(){
                // code here
            }

        });
    });

    return Module.Controller;
});
```


### Gestión de dependencias ###

Como se pude observar a continuación, lo primero que se define son las dependencias del módulo, que finalmente se mapean o exportan a variables que manejaremos dentro del módulo en el mismo orden en el que se declaran

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

Si es un módulo AMD, no es necesario hacer gran cosa, pero **si no está definido como AMD**, y dicho módulo exporta una variable, es necesario indicarlo en el documento `define.js`, tanto en `app/scripts/define.js`, como en `test/define.js` de la siguiente forma:

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
Llamamos módulos de aplicación a aquellos módulos específicos de la webapp. Estos se pueden configurar a través de los archivos `app/scripts/modules/[moduleName]/res/config.json`, donde cada módulo puede tener definida su configuracion por defecto.


### Módulo externos ###
Si queremos estableccer la configuración de un módulo ajeno a nuestro repositorio, por ejemplo, un módulo del core, es posible sobreescribir su configuración redefiniendo los archivos `app/res/config/[externalModuleName].json`. Esta configuración deberá definirse **con los mismos campos que la configuración original**.


**Cómo acceder**
Las configuraciones de todos los módulos se compilan en un único fichero en la ruta `target/dist/res/config/modules.json`. Desde el código se puede acceder de la siguiente forma:

```javascript
var config = app.modulesConfig.get('moduleName'[, modelName]);
```
> **Nota**: Es posible obtener directamente un tipo específico de `Backbone.Model`, si se establece el nombre del modelo en el parámetro `modelName` (debe de ser el mismo nombre con el que se dió de alta en la factoría).


## Comunicación entre Módulos ##

Para comunicar eventos, peticiones y órdenes entre módulos, Marionette ofrece los siguientes componentes para ello.

### EventAggregator ###

Este componente de Marionette nos permite lanzar un evento en cualquier punto de la aplicación para que en cualquier otro punto, cualquiera pueda suscribirse y actuar en consecuencia.

Para registrarse a un evento en particular es necesario seguir el siguiente esquema:

```javascript
// Inside views, layouts, models
this.listenTo(app.vent, 'event:name', function() {
  console.log('Event triggered');
});


// In other cases
app.vent.on('event:name', function() {
  console.log('Event triggered');
});

```

Entonces, desde cualquier otro punto de la aplicación, es posible lanzar el siguiente evento:

```javascript
app.vent.trigger('event:name');
```

Para lanzar eventos con parámetros es posible hacer lo siguiente:

```javascript
// Inside views, layouts, models
this.listenTo(app.vent, 'event:name', function(args) {
  console.log("foo event" + args.bar);
});


// In other cases
app.vent.on('event:name', function(args) {
  console.log("event:name" + args.bar);
});

app.vent.trigger('event:name', {bar: true});
```

> **Más info**

> * [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md)

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

> **Más info**

> * [Marionette.RequestResponse](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.requestresponse.md)

### Commands ###

Este componente nos permite solicitar una acción sin tener que esperar una respuesta de ello. Sólo puede haber uno esperando respuesta y siempre se responde al último que se registró.

```javascript
app.commands.setHandler("foo", function(bar){
  console.log(bar);
});

app.execute("foo", "baz");
```

> **Más info**

> * [Marionette.Commands](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.commands.md)
