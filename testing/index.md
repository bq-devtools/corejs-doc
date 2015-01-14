---
layout: doc
---


# Testing

Los test nos ayudan a asegurar la estabilidad de la aplicación.

## Unitarios e Integración


### Estructura del proyecto

```
.
└── test                    // Workspace de test
    ├── index.html          // Web para ejecutar los test unitarios
    ├── define.js           // Dependencias RequireJS
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

### Desarollo de Tests


#### Descripciones

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
            
            /**
             * Async test with chai-as-promised assertions
             */
            
            if('Async test', function(done) {

                // Async function that returns a fullfilled promise
                var promise = module.asyncMethod();
                expect(promise).to.be.fulfilled.and
                    .eventually.equal('ok')
                    .notify(done);

            });
            
            if('Async test', function(done) {

                // Async function that returns a rejected promise
                var promise = module.asyncMethod();
                expect(promise).to.eventually.be.rejected
                    .then(function(e) {
                        expect(e.jqXHR.status).to.be.equal(400);
                        expect(ajaxStub.calledOnce).to.be.equal(true);
                    })
                    .should.notify(done);
                
            });
            
            if('Async test', function(done) {
                
                // Async function that returns a rejected promise
                var promise = module.asyncMethod();
                expect(promise).to.eventually.be.rejectedWith(400)
                    .should.notify(done);

            });
        });
    });

});

```

Como se puede ver en el ejemplo anterior, la idea es que las descripciones de los tests, desde el mayor nivel hata el test específico, forme algo coherente, como si se contara una historia, de tal forma que sea entendible por cualquier miembro del equipo.

Además un buen conjunto de tests conprensibles, puede formar parte de la documentación de la aplicación.


#### Comprobaciones ###

Para realizar las comprobaciones pertinentes usaremos [chai](http://chaijs.com/) y [chai-as-promised](https://github.com/domenic/chai-as-promised/), haciendo uso del verbo `expect` para tener un estilo orientado a TDD o BDD.

> **Más info**

> * [mocha](http://visionmedia.github.io/mocha/)
> * [chai](http://chaijs.com/api/bdd/)
> * [chai-as-promised](https://github.com/domenic/chai-as-promised/)





## Crossbrowser testing


Los test que comprueban el correcto funcionamiento entre diferentes navegadores y sistemas operativos está desarrollado usando la tecnología de Selenium y testem.

### Unitarios/Integración

Los tests unitarios/integración que se ejecutan a través de `grunt test` y similares, pueden ejecutarse en multiples navegadores de forma automática con la sigueinte tarea:

```bash
grunt test:testem
```

Esta tarea ejecuta todos los test unitarios/integración automáticamente para todos los navegadores disponibles del sistema operativo, generando un informe unificado en `target/test_results.xml`.



### Selenium

Los test de Selenium se desarrollan en el siguiente proyecto:

```
src/test/selenium
├── testSuite.js            // Declaración de todos los test a pasar
├── paths                   // Directorio donde se especifican los caminos funcionales
    └── paths.js
├── src                     // Directorio donde se implementan los test
    └── myPage              // Directorio que contiene la especificación de un Page Object
        ├── myPage.js       // Implementación del Page Object
        └── myPageModel.js  // Implementación del modelo del Page Object
├──
└── spec                    // Directorio donde se especifican los tests
    └── *.js
```

#### Ejemplo básico

```javascript
/* global describe, it, after, before */
'use strict';

var assert = require('assert'),
    common = require('grunt-corejs-build/lib/selenium/common.js'),
    WAIT_TIMEOUT = 5000;

describe('Google Search', function() {

    this.timeout(30000);
    this.slow(5000);

    var driver;

    before(function() {
        driver = common.getDriver();
    });

    after(function() {
        driver.close();
        driver.quit();
    });

    it('should work', function(done) {

        driver.get('http://www.google.com');
        driver.findElement({name: 'q'}).sendKeys('webdriver');
        driver.findElement({name: 'btnG'}).click();
        driver.wait(function() {
            return driver.getTitle().then(function(title) {
                return title.indexOf('webdriver') !== -1;
            });
        }, WAIT_TIMEOUT).then(function() {
            driver.findElement({name: 'q'}).getAttribute('value').then(function(value) {
                assert.equal(value, 'webdriver');
                done();
            });
        });

    });
});
```

#### SeleniumUtils

coreJS extiende la API del webdriverJS con los `mixines` implementados en [corejs-build](https://bitbucket.org/mundoreader/corejs-build/src/8c036cd9e2d09bbe8ed8ced4b3ed2c05a64705f5/src/main/js/lib/selenium/mixins/?at=master)

#### Ejemplo con SeleniumUtils

```javascript
/* global describe, it, after, before */
'use strict';

var assert = require('assert'),
    seleniumUtils = require('grunt-corejs-build/lib/selenium/common.js'),
    WAIT_TIMEOUT = 5000;

describe('[' + seleniumUtils.getDriverString() + '] Google Search', function() {

    this.timeout(30000);
    this.slow(5000);

    var driver;

    beforeEach(function() {
        driver = seleniumUtils.getDriver();
        driver.setDefaultTimeout(WAIT_TIMEOUT);
    });

    afterEach(function(done) {
        driver.quit().then(done);
    });

    it('should work', function(done) {
        
        driver.getAndWaitFor(seleniumUtils.getWebRoot() + '/#/login', {id: 'username'}).then(function(webElement) {
            webElement.clear().sendKeys('webdriver');
            driver.findElement({id: 'remember'}).click();

            return driver.waitForElementPresent({id: 'login-button'});
        }).then(function() {
            return driver.waitForEnabled({id: 'login-button'});
        }).then(function() {
            return driver.assertValueEqual({id: 'login-response'}, 'ok');
        }).then(function() {
            return driver.assertAttributeEqual({id: 'login-button'}, 'data-action', 'login');
        }).then(function() {
            return driver.assertInnerHtmlEqual({id: 'login-button'}, 'Login');
        }).then(function() {
            return;
        }).thenFinally(done.bind(this));

    });
});
```

Es posible configurar los tests a través del archivo opcional `.selenium`

```bash
{
    # Browsers to run: chrome|firefox|safari|opera|internet explorer
    "browsers": {
        "W7-chrome-34": {
            "browserName": "chrome",
            "platform": "Windows 7",
            "version": "34"
        },
        "W7-firefox-19": {
            "browserName": "firefox",
            "platform": "Windows 7",
            "version": "19"
        }
    },
    # Reporter file format, same as mocha reporters
    "reporter": "xunit",
    # IP of the machine with Selenium-Server at 4444 port, by default, localhost
    "remote": "172.16.30.89",
    # Port of the machine with Selenium-Server, by default, 4444
    "port": 4444
}
```

Una vez se tengan los test implementados y la configuración deseada, basta con ejecutar el siguiente comando:

```bash
grunt test:selenium
```

Como se puede observar en el ejemplo de **test con SeleniumUtils**, si hacemos uso del método `driver.getWebRoot()` para navegar por la web, podremos aprovecharnos de la siguiente ejecución parametrizada:

```bash
grunt test:selenium --www-root=http://some-domain.com:8000/
```

Esto nos permite que un mismo conjunto de test puedan lanzarse contra cualquier otra web.

#### Informe de resultados

El informe generado está disponible en los siguientes recursos:

```
target/surefire-reports/selenium-[browser].tap  // Para el reporter TAP
target/surefire-reports/selenium-[browser].xml  // Para el reporter XUNIT
target/surefire-reports/selenium-[browser].txt  // Para el resto de reporters
```


#### Integración con VirtualBox


La ejecución de los tests de Selenium en una máquina virtual nos permite probar nuestra aplicación en diferentes navegadores de diferentes sistemas operativos, sobre todo para el caso de Internet Explorer, que sólo está disponible en Windows.

Es por ello por lo que hemos preparado una imagen de [VirtualBox](https://www.virtualbox.org/) con todo el stack necesario instalado, para que con una mínima configuración, uno pueda probar fácilmente los tests de selenium en otra máquina con más navegadores.

Para ello hay que seguir los siguientes pasos:

1. Descargar e instalar [VirtualBox](https://www.virtualbox.org/).

2. Descargar la imagen de Windows
    
        https://s3-eu-west-1.amazonaws.com/selenium-vms/win7_ie11/W7_IE11.part01.rar
        https://s3-eu-west-1.amazonaws.com/selenium-vms/win7_ie11/W7_IE11.part02.rar
        https://s3-eu-west-1.amazonaws.com/selenium-vms/win7_ie11/W7_IE11.part03.rar
        https://s3-eu-west-1.amazonaws.com/selenium-vms/win7_ie11/W7_IE11.part04.rar
        https://s3-eu-west-1.amazonaws.com/selenium-vms/win7_ie11/W7_IE11.part05.rar

3. Descomprimir archivos, en linux:
    
    ```bash
    sudo apt-get install unrar
    unrar x W7_IE11.part01.rar
    ```

3. Agregar la máquina virtual descargada desde VirtualBox->Máquina->Agregar

4. Arrancar la máquina virtual

5. Activar Windows, ejecutando el comando `slmgr /ato` **como adminsitrador**.

    ![Activate](/assets/images/win-activate.png)
    > * **Nota**: Es importante recordar que estas licencias Windows son válidas **hasta un período de 90 días**.

6. Iniciar Git Bash

7. Arrancar el Selenium Server y anotar la IP.
    
    ```bash
    cd code/corejs-app-boilerplate/corejs-app-boilerplate
    grunt server:selenium --keepalive
    ```

    ![SeleniumServer](/assets/images/selenium-server.png)

   > **Nota**: Esta IP sirve para establecerla como remote en el archivo `.selenium` en la maquina anfitriona, para que pueda arrancar los test en la VM.

-----

> **Notas**

> * La máquina virtual tiene que tener el firewall desactivado.
> * La máquina virtual debe tener una configuración de red de `Conexión Puente` o `Bridge`.
> * Esta imagen a sido creada a partir de las imágenes proporcionadas por [modern.ie](http://loc.modern.ie/es-es/virtualization-tools), desde donde es posible descargar otras versiones de Windows/InternetExplorer para pruebas.


#### Integración con SauceLabs

SauceLabs es un servicio que permite ejecutar tests de Selnium de forma automática con numerosas combinaciones de SO-Navegador-Versión.

Para hacer uso del servicio tendremos que tener una cuenta activa, y establecer los datos de acceso en el archivo de configuración `.selenium`:

```bash
{
    "browsers": {
        "W7-chrome-34": {
            "browserName": "chrome",
            "platform": "Windows 7",
            "version": "34"
        },
        "W7-firefox-19": {
            "browserName": "firefox",
            "platform": "Windows 7",
            "version": "19"
        }
    },
    "remote": "ondemand.saucelabs.com",
    "port": 80,
    "reporter": "xunit",
    "user": "SAUCELABS_USERNAME",
    "key": "SAUCELABS_KEY"
}
```

> **Más info**

> * [coreJS Selenium Testing workshop resources](https://github.com/anthanh/corejs_selenium_workshop)
> * [testem](https://github.com/airportyh/testem)
> * [WebDriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs)
> * [seleniumJS API](http://selenium.googlecode.com/git/docs/api/javascript/index.html)
> * [modern.ie](http://loc.modern.ie/es-es/virtualization-tools)
> * [InternetExplorerDriver](https://code.google.com/p/selenium/wiki/InternetExplorerDriver)
> * [SauceLabs available platforms](https://saucelabs.com/platforms)
> * [Saucelabs Getting Started](https://saucelabs.com/docs/onboarding)
> * [Sauce Connect](https://docs.saucelabs.com/reference/sauce-connect/)
> * [Saucelabs testing configuration](https://docs.saucelabs.com/reference/test-configuration/)



## Integración con QA

Esta propuesta trata de ofrecer una serie de convenciones por las cuales QA pueda conocer y acceder a los elementos interactuables de la aplicación, todo esto sin que afecte a la evolución de la capa de presentación.

Para ello dejaremos las clases de HTML para los desarrollos de las hojas de estilos y definiremos una serie de etiquetas `data-*` de HTML5 para que QA conozca que partes de la interfaz le afectan en su trabajo.

En particular se proponen los siguientes atributos:

* `data-action`: El elemento reacciona a una acción específica, por ejemplo `toggle`, `hide`, `save`, ...
* `data-target`: Es un elemento afectado en una acción en concreto, con el mismo nombre del action que lo provocó.
* `data-rel`: Es un elemento/componente con significado propio, ayuda a establecer un contexto. Por ejemplo `modal`, `dropdown`.
* `data-rel-id`: Es un elemento/componente único, con el fin de diferenciarse de los elementos o componentes comunes con un mismo data-rel.
* `data-element`: Identifica cualquier otro elemento necesario para los tests.

* **Ejemplo**

    ```html
    <button data-action="toggle"></button>
    <div data-rel="modal" data-target="toggle">...</div>
    ```
