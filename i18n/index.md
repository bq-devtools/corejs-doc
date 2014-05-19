---
layout: page
---


I18n
====

La aplicación tiene los recursos localizados en el directorio:

```bash
~/main/src/webapp/res/locales/[country]/locales.json
~/main/src/webapp/res/locales/[country]/moment.js
~/main/src/webapp/res/locales/[country]/numeral.js
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

* [ISO countries codes](http://en.wikipedia.org/wiki/ISO_3166-1)
* [ISO languages codes](http://www.loc.gov/standards/iso639-2/php/code_list.php)
* [IANA languages codes](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)


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

* **locales.json**

Los recursos donde se definen las claves para los textos siguen un formato `JSON` y deben de estar en el siguiente directorio:

```
~/main/src/webapp/res/locales/[country]/locales.json
```

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
	```javascript
	$.t("info-message", { numMensajes:   0 }); // -> zero
	$.t("info-message", { numMensajes:   1 }); // -> singular
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
	 
	$.t("key2", { name: '<tag>' }); // -> Escaped &lt;tag&gt;
	$.t("key1", { name: '<tag>' }); // -> Not escaped <tag></tag>
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

* [i18Next](http://i18next.com/pages/doc_jquery.html)


### Formato para Números

Para formatear y operar con números, ya sean enteros, con decimales o con unidades métricas usaremos [Numeral.js](http://numeraljs.com/).

* **numeral.js**

Los recursos donde se definen las reglas para los formatos de números:

```bash
~/main/src/webapp/res/locales/[country]/numeral.js
```

Y debe seguir el siguiente formato de ejemplo para su correcta compilación:

```javascript
(function() {
    'use strict';
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '£'
        }
    };
    // same name as forlder lang-country code
    numeral.language('en-GB', language);
}());
```

Existen numerosos idiomas ya implementados dentro del componente numeral que se descarga bower.


**Más Info**

* [Numeral.js](http://numeraljs.com/)


### Formato para Fechas

Para formatear y operar con fechas y unidades de tiempo usaremos [Moment.js](http://momentjs.com/docs/#/displaying/).


* **moment.js**

Los recursos donde se definen las reglas para los formatos de números:

```bash
~/main/src/webapp/res/locales/[country]/moment.js
```

Y debe seguir el siguiente formato de ejemplo para su correcta compilación:

```javascript
(function() {

    'use strict';
    moment.lang('en-GB', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY LT',
            LLLL: 'dddd, D MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        ordinal: function(number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

}());
```

Existen numerosos idiomas ya implementados dentro del componente moment que se descarga bower.


**Más Info**

* [Moment.js](http://momentjs.com/docs/#/displaying/)
