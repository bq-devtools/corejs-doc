---
layout: page
---




Crossbrowser testing
====================


Los test que comprueban el correcto funcionamiento entre diferentes navegadores y sistemas operativos está desarrollado usando la tecnología de Selenium y testem.

## Unitarios/Integración ##

Los tests unitarios/integración que se ejecutan a través de `grunt test` y similares, pueden ejecutarse en multiples navegadores de forma automática con la sigueinte tarea:

```bash
grunt test:testem
```

Esta tarea ejecuta todos los test unitarios/integración automáticamente para todos los navegadores disponibles del sistema operativo, generando un informe unificado en `target/test_results.xml`.



## Selenium ##

Los test de Selenium se desarrollan en el siguiente proyecto:

```
src/test/selenium
├── testSuite.js 	// Declaración de todos los test a pasar
└── spec			// Directorio donde se implementan los tests
    └── *.js
```

### Ejemplo de test Selenium

```javascript
/* global describe, it, after, before */
'use strict';

var assert = require('assert'),
    common = require('grunt-corejs-build/lib/selenium/common.js');

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
        }, common.WAIT_TIMEOUT).then(function() {
            driver.findElement({name: 'q'}).getAttribute('value').then(function(value) {
                assert.equal(value, 'webdriver');
                done();
            });
        });

    });
});
```


Es posible configurar los tests a través del archivo opcional `.selenium`

```bash
{
	# Browsers to run: chrome|firefox|safari|opera|ie
	"browsers": ["ie", "chrome"],				
	# Reporter file format, same as mocha reporters
	"reporter": "xunit",							
	# IP of machine with Selenium-Server at 4444 port, by default, localhost
	"remote": "172.16.30.89"					
}
```

Una vez se tengan los test implementados y la configuración deseada, basta con ejecutar el siguiente comando:

```bash
grunt test:selenium
```

El informe generado está disponible en los siguientes recursos:

```
selenium-[browser].tap 	// Para el reporter TAP
selenium-[browser].xml 	// Para el reporter XUNIT
selenium-[browser].txt 	// Para el resto de reporters
```


### Ejecutar sobre una máquina virtual


La ejecución de los tests de Selenium en una máquina virtual nos permite probar nuestra aplicación en diferentes navegadores de diferentes sistemas operativos, sobre todo para el caso de Internet Explorer, que sólo está disponible en Windows.

Es por ello por lo que hemos preparado una imagen de [VirtualBox](https://www.virtualbox.org/) con todo el stack necesario instalado, para que con una mínima configuración, uno pueda probar fácilmente los tests de selenium en otra máquina con más navegadores.

Para ello hay que seguir los siguientes pasos:

1. Descargar e instalar [VirtualBox](https://www.virtualbox.org/).

2. Descargar la imagen de Windows [Pendiente]

3. Agregar la máquina virtual descargada desde VirtualBox->Máquina->Agregar

4. Arrancar la máquina virtual

5. Activar Windows, ejecutando el comando `slmgr /ato` **como adminsitrador**.
![Activate](/assets/images/win-activate.png)
   * **Nota**: Es importante recordar que estas licencias Windows son válidas hasta un período de 90 días.

6. Iniciar Git Bash

7. Arrancar el Selenium Server y anotar la IP.
	
	```bash
	cd code/corejs-app-boilerplate/corejs-app-boilerplate
	grunt server:selenium --keepalive
	```

	![SeleniumServer](/assets/images/selenium-server.png)

   * **Nota**: Esta IP sirve para establecerla como remote en el archivo `.selenium` en la maquina anfitriona, para que pueda arrancar los test en la VM.


**Notas**

* La máquina virtual tiene que tener el firewall desactivado.
* La máquina virtual debe tener una configuración de red de `Conexión Puente` o `Bridge`.
* Esta imagen a sido creada a partir de las imágenes proporcionadas por [modern.ie](http://loc.modern.ie/es-es/virtualization-tools), desde donde es posible descargar otras versiones de Windows/InternetExplorer para pruebas.


**Más info**

* [testem](https://github.com/airportyh/testem)
* [WebDriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs)
* [seleniumJS API](http://selenium.googlecode.com/git/docs/api/javascript/index.html)
* [modern.ie](http://loc.modern.ie/es-es/virtualization-tools)
* [InternetExplorerDriver](https://code.google.com/p/selenium/wiki/InternetExplorerDriver)
