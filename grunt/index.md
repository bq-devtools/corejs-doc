---
layout: doc
---


# Línea de comandos

En este apartado se describen las tareas grunt definidas así como otros comandos útiles que simplifican la el trabajo del desarrollador.


## Bootstrap

### Inicialización

Estas tareas instalan las dependencias necesarias y configuran el proyecto coreJS para su funcionamiento.

```bash
./init-env.sh
```

> **Nota**: Si Node está instalado con `sudo`, sustituir el comando anterior por `./init-env.sh su`


### Limpiar dependencias

```bash
npm cache clean
bower cache clean
npm run clean
```


## Construcción


### Desarrollo

Existe una tarea definida en grunt específica que arranca la aplicación en modo desarrollo, esto es, levanta un servidor que apunta a los recursos de la aplicación sin optimizar, para que sea más facil su depuración. Además se auto-actualiza a cada cambio guardado desde el editor.
Para lanzarlo basta con usar el siguiente comando:

```bash
grunt server
```

### Producción

Esta tarea construye el proyecto listo para desplegar en el directorio `target/dist`, realizando todas las teareas de optimización necesarias, entre ellas:

* Compilar configuración de módulos.
* Comprobar estilo de código JS.
* Concatenar los JS.
* Pre-compilar los templates.
* Compilar los SASS.
* Concatenar los CSS.
* Optimizar las imágenes.
* Generar los Sprites.
* Minimizar JS, CSS, HTML.
* Versionar JS, CSS e imágenes.
* Hacer uso de las versiones versionadas.
* Pasar los test unitarios.

```bash
grunt # => grunt dist
```


## Testing


Existen varias tareas en grunt que arranacan los test unitarios, todo depende de dónde queramos obtener los resultados.

* Test por línea de comandos:

	El resultado de los tests aparecerán por consola.

	```
	grunt test
	```

* Test unitarios con informe de resultados en [TAP](http://en.wikipedia.org/wiki/Test_Anything_Protocol)

	El resultado de los tests aparecerán por consola y generará un informe en formato `xunit` en `target/test_results.tap`.

	```
	grunt maven-test
	```

* Test unitarios por navegador

	Los resultados de los tests se podrán visualizar en un navegador desde `http://localhost:9001`.

	```
	grunt server:test
	```

* Test unitarios crossbrowser

	El resultado de los tests aparecerán por consola y generará un informe en formato `xunit` en `target/test_results.xml`.

	```
	grunt test:testem
	```

* Test funcionales crossbrowser

	El resultado de los tests aparecerán por consola y generará un informe en formato `xunit` en `target/selenium-[launcher_name].xml`.

	```
	grunt test:selenium
	```

* Levantar Selenium Server

	Al principio de la llamada aparecerá todas las interfaces de red y sus ips desde la que se puede acceder al Selenium Server.

	Por defecto estará en el puerto `4444`.

	```
	grunt server:selenium --keepalive
	```

> **Más Info**

> * [Testing](/testing)



## Otros 

### JSDoc

JSDoc es una herramienta para generar documentación de forma automática en base a los dockblocks de comentarios que aparecen en el código.

La documentación se genera en el directorio `doc` con cualquiera de los siguientes comandos:

* Levantando un navegador

	```bash
	grunt server:jsdoc
	```

* Sólo generar documentación

	```bash
	grunt jsdoc
	```

> **Más Info**

> * https://github.com/jsdoc3/jsdoc
> * http://usejsdoc.org/

