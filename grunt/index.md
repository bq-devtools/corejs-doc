---
layout: page
---


Grunt: Tareas automatizadas
===========================

Construcción
------------

Instalación de dependencias
---------------------------

```bash
./init-env.sh
```

* **Nota**: Si Node está instalado con `sudo`, sustituir el comando anterior por este otro:

```bash
./init-env.sh su
```


Desarrollo
----------

Existe una tarea definida en grunt específica que arranca la aplicación en modo desarrollo, esto es, levanta un servidor que apunta a los recursos de la aplicación sin optimizar, para que sea más facil su depuración. Además se auto-actualiza a cada cambio guardado desde el editor.
Para lanzarlo basta con usar el siguiente comando:

```bash
grunt server
```

Producción
----------

```bash
grunt
```
Esta tarea construye el proyecto listo para desplegar en el directorio `target/dist`.


Test
----

Existen varias tareas en grunt que arranacan los test unitarios, todo depende de dónde queramos obtener los resultados.

* Test por línea de comandos:

```bash
grunt test
```

El resultado de los tests aparecerán por consola y generará un informe en formato `xunit` en `dist/tests.xml`.

* Test por navegador

```bash
grunt server:test
```

Los resultados de los tests se podrán visualizar'en un navegador desde `http://localhost:9001`.


### TAP ###

### Cobertura de tests ###

JSDoc
-----

JSDoc es una herramienta para generar documentación de forma automática en base a los bloues de comentarios que aparecen en el código.

La documentación se genera en el directorio `doc` con cualquiera de los siguientes comandos:

* Levantando un navegador

```bash
grunt server:jsdoc
```

* Sólo generar documentación

```bash
grunt jsdoc
```
