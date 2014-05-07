---
layout: page
---


I18n
====

La aplicación tiene los recursos localizados en el directorio:

```
~/main/src/webapp/res/locales/[country]/locales.json
```

Donde `[country]` puede ser cualquiera de los siguientes ejemplos con el formato `languageCode-countryCode`:

```
es 		// Español
es-ES 	// Castellano
es-VE 	// Español Venezuela

en 		// Inglés
en-GB 	// Inglés Reino Unido
en-US 	// Inglés Estados Unidos
```

Normalmente con tener los recursos separados por idioma es suficiente, pero a veces es interesante también separarlo por país cuando el contenido internacionalizable es diferente entre los paises con un mismo idioma, por ejemplo, con los cambios de moneda, fechas y palabras/expresiones locales.

**Más Info**

* ['ISO countries codes'](http://es.wikipedia.org/wiki/ISO_3166-1)
* ['ISO languages codes'](http://www.loc.gov/standards/iso639-2/php/code_list.php)
* ['IANA languages codes'](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)


### Idioma por defecto

La aplicación al iniciarse, busca el idioma por defecto en el siguiente orden:

1. En `sessionStorage.lang | localStorage.lang`
2. En el navegador a través del objeto `navigator` (siempre y cuando sea un código de idioma-país soportado por la aplicación)
3. En la configuración por defecto de la aplicación en `config.json`


### Cambiar de Idioma

Para cambiar de idioma basta con hacer la siguiente llamada en cualquier parte del código:

```javascript
app.locale.setLang('es-ES');
```

Cuando la configuración del idioma cambia, por defecto refresca la aplicación, pero se puede cambiar su comportamiendo sobreescribiendo el método `app.locale.changed`:

```javascript
app.locale.changed = function() {
	// Locale config changed callback
}
```


### Formato para Textos

Para la localización de textos se propone la siguiente convención de pares clave-valor:

* Las claves irán en minúsculas, con las palabras separadas con el carácter `-`.

	```json
	{
		"key-with-multiple-words": "Locale string content"
	}
	```

* Textos con parámetros:

	```javascript
	// Given resources
	{
		"welcome_male": "Bienvenido __name__ __surnames__"
	}

	$.t('welcome_male', {name: 'Juan', surnames: 'Pérez'});
	```

* Las claves irán precedidas por el tipo de mensaje (error, alerta, acción) cuando proceda:

	```json
	{
		"error-field-required": "Error campo obligatorio",
		"info-value-too-high": "Valor demasiado alto",
		"action-save": "Guardar"
	}
	```


* Para textos que se vean afectados por la pluralización es necesaio definir 2 claves, uno de ellos con el sufijo `_plural`:

	```json
	{
		"info-message": "Tienes un mensaje",
		"info-message_plural": "Tienes __numMensajes__ mensajes"
	}
	```

	La selección del texto apropiado se decide en tiempo de ejecución en función de la cantidad.
	Es posible tener mayor control sobre los plurales siguiendo el siguiente formato:

	```json
	{
		"key_plural_0": "zero",
		"key_plural_2": "two",
		"key_plural_3": "few",
		"key_plural_11": "many",
		"key_plural_100": "plural"
	}
	```


* Para los textos que se vean afectados por un contexto (por ejemplo, el género), tendrán el siguiente formato:

	```javascript
	{
		"friend": "A friend",
		"friend_male": "A boyfriend",
		"friend_female": "A girlfriend"
	}

	$.t("friend"); // -> A friend
	$.t("friend", { context: 'male' }); // -> A boyfriend
	$.t("friend", { context: 'female' }); // -> A girlfriend
	```

	En este caso, el contexto es el género, y puede tomar los siguientes valores: '', 'male', 'female'.

* Si el valor lleva código html, será necesario poner el sufijo `HTML__` en las variables sin escapar:
Por ejemplo, si se quisiera poner:

	```javascript
	}
		"key1": "Not escaped __nameHTML__",
	    "key2": "Escaped __name__"
	}
	 
	i18n.t("key2", { name: '<tag>' }); // -> Escaped &lt;tag&gt;
	i18n.t("key1", { name: '<tag>' }); // -> Not escaped <tag>
	```

**Más Info**

* [i18Next](http://i18next.com/pages/doc_features.html)


#### Integración en Templates

* Reemplazar texto al contenido de un tag HTML

	```html
	<a id="btn1" href="#" data-i18n="localized-text-key"></a>
	```

	el contenido de `localized-text-key` aparecerá dentro de la etiqueta `<a></a>`;

* Añadir (al principio o final) del texto al contenido de un tag HTML

	```html
	<a id="btn1" href="#" data-i18n="[prepend]localized-text-key">Initial text</a>
	<a id="btn1" href="#" data-i18n="[append]localized-text-key">Initial text</a>
	```

* Reemplazar texto a un atributo de un tag HTML

	```html
	<a id="btn1" href="#" data-i18n="[title]localized-text-key-title;[html]localized-text-key-text;[data-attribute]localized-text-key-name"></a>
	```
	* El texto asociado a `[title]` aparecerá en el atributo `title`.
	* El texto asociado a `[html]` aparecerá dentro del tag asocuado.
	* El texto asociado a `[data-attribute]` aparecerá en el atributo `data-attribute`.

**Más Info**

* ['i18next'](http://i18next.com/pages/doc_jquery.html)

