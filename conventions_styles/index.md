---
layout: doc
---

# Convenciones y Estilos


Es importante establecer un estilo de código unificado para mantener un mínimo de calidad, mantenibilidad y legibilidad del código.

El objetivo es que el código parezca que ha sido desarrollado una única persona, sin importar el número de miembros en el equipo de desarrollo.
En los proyectos web nos centraremos en los siguientes lenguajes:

Los desarrolladores que usan [Sublime](http://www.sublimetext.com/), pueden beneficiarse del plugin [HTML-CSS-JS Prettify](https://github.com/victorporof/Sublime-HTMLPrettify), que ya se encarga de formatear el código siguiendo las convenciones más extendidas.

## HTML

> **Más info**

> * http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml#HTML_Style_Rules

## Hojas de Estilos

**Archivos**

```javascript
 _this-is-a-large-name-component.scss // componentes app
 this-is-a-large-name-app-styles.scss // estilos generales de la app
```

**Selectores**

```javascript
/*
 * BEM 
 * Stands for "Block", "Element", "Modifier"
 */
 
.nav                     // bloque
.nav__item {}            // elemento de bloque
.nav__item--selected {}  // modificador de elemento de bloque
.nav--secondary {}       // modificador de bloque
.nav--secondary__item {} // elemento de bloque con modificador
```

Ejemplo:

```javascript
.nav {}
    .nav__item {}
    .nav__item--selected {}
.nav--secondary {}
    .nav--vertical__item {}
```

> **Más info**

> * https://github.com/stubbornella/csslint/wiki
> * https://drupal.org/node/1887862
> * http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml#CSS_Validity
> * https://www.thinkup.com/docs/contribute/developers/writecode/styleguide/css.html
> * http://csslint.net/

## Imágenes

**Archivos**

```javascript
 this-is-a-large-name-folder    // folder img
 this-is-a-large-name-image.png // img
```

## JavaScript

La convención de código que seguiremos para el desarrollo de JavaScript será la definida en [IdiomaticJS](https://github.com/rwaldron/idiomatic.js/).

A grandes rasgos:

```javascript
// fileNameLikeThis.js

var CONSTANTS_LIKE_THIS = 3.14;

var variableNamesLikeThis = true;

var functionNamesLikeThis = function() { };

var ConstructorNamesLikeThis = function() { };

var objectNameLikeThis = new ConstructorNameLikeThis();

var objectNameLikethis.methodNamesLikeThis = function() { };
```

> **Más info**

> * [Resumen breve de IdiomaticJS (Slides)](http://slid.es/antai/js_con_estilo)

## Comentarios

El formato de los comentarios que se trata de seguir es la establecida por [JSDoc](http://usejsdoc.org/), ya que formará parte de la documentación **autogenerada**.

Un ejemplo de uso podría ser la siguiente documentación: http://davidshimjs.github.io/jaguarjs/doc/

Para el resto de comentarios internos:

* En línea:

	```javascript
	// Comentario
	```

* En bloque:

	```javascript
	/**
	 * Block comment
	 */
	```

> **Más Info**

> * https://github.com/b-studios/doc.js
> * http://net.tutsplus.com/tutorials/javascript-ajax/documenting-javascript-with-yuidoc/
> * http://en.wikipedia.org/wiki/JSDoc
> * http://usejsdoc.org/
> * http://smartcomments.github.io/
> * http://www.lsauer.com/2013/05/javascript-documentation-generator.html
> * http://jashkenas.github.io/docco/
