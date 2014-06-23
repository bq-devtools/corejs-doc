---
layout: page
---



Testing
=======

Los test nos ayudan a asegurar la estabilidad de la aplicación.
En este apartado describiremos cómo se desarrollan los tests unitarios e incluso los de integración

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

```javascript
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

Para realizar las comprobaciones pertinentes usaremos [chai](http://chaijs.com/) y [chai-as-promised](https://github.com/domenic/chai-as-promised/), haciendo uso del verbo `expect` para tener un estilo orientado a TDD o BDD.

**Más info**

* [chai](http://chaijs.com/api/bdd/)
* [chai-as-promised](https://github.com/domenic/chai-as-promised/)

