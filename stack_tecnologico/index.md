---
layout: page
---


Stack Tecnológico
=================

Esta apartado describe todas las tecnologías usadas para el desarrollo de aplicaciones web y pará qué sirven cada una de ellas.

## Core ##
  * **[Backbone](http://backbonejs.org/)** 1.1.0: Librería arquitectural que provee elementos básicos para el desarrollo de aplicaciones web
  * **[Marionette](http://marionettejs.com/)** 1.4.1: Plugin para Backbone que ofrece funcionalidades neccesarias para el desarrollo de grandes aplicaciones web.
  * **[RequireJS](http://requirejs.org/)** 2.1.5: Librería para la carga de módulos asíncronos AMD.

  * **[JQuery](http://jquery.com/)** 1.9.0: Librería para manipulación del DOM y soporte AJAX.
  * **[Underscore](http://underscorejs.org/)** 1.5.2: Dependencia de Backbone. Librería de útiles para el manejo de estructuras de datos.
  * **[Handlebars](http://handlebarsjs.com/)** 1.3.0: Librería para la compilación y renderizado de plantillas.
  * **[Modernizr](http://modernizr.com/)** 2.6.2: Librería que ofrece soporte a la detección de funcionalidades del navegador del dispositivo.

## i18n ##
  * **[i18next](http://i18next.com/)** 1.7.1: Librería de internacionalización con soporte para textos, géneros y plurales.
  * **[numeral](http://numeraljs.com/)** 1.5.3: Librería para la internacionalización de unidades métricas.
  * **[momentJS](http://momentjs.com/)** 2.5.0: Librería para la manipulación de fechas.

## Testing ##
  * **[mocha](http://visionmedia.github.io/mocha/)** 1.12.0: Framework para el desarrollo de test unitarios en JS.
  * **[Chai](http://chaijs.com/)** 1.8.1: DSL de mocha, para el desarrollo de test con TDD o BDD.
  * **[SinonJS](http://sinonjs.org/)** 1.7.3: Librería para mocks y stubs en JS.
  * **[PhantomJS](http://phantomjs.org/)** 1.9.7: Navegador webkit headless para test de integración.
  * **[VirtualBox](https://www.virtualbox.org/)**: Gestión de máquinas virtuales, para poder probar la aplicación web en diferentes navegadores de diferentes SO.

## Construcción y desarrollo ##
  * **[curl](http://curl.haxx.se/)** 7.32.0: Lo utilizaremos principalmente para recuperar paquetes a instalar.
  * **[GIT](http://git-scm.com/)**: Dependencia de npm para instalar paquetes.
  * **[ruby](https://www.ruby-lang.org/es/)** 2.0.0-p353: Dependencia de [Compass](http://compass-style.org/).
  * **[PhantomJS](http://phantomjs.org/)** 1.9.7: Para ejecutar tests unitarios y como navegador del SEO-server.
  * **[Yeoman](http://yeoman.io/)** 1.1.0: Creación de arquitetipos y sus componentes
  * **[Grunt](http://gruntjs.com/)** 0.4.2 (grunt-cli 0.1.11): Definición del proceso de construcción del front o de cualquier tarea repetitiva automatizable de éste.
  * **[Bower](http://bower.io/)** 1.2.8: Gestión de dependencias de la aplicación web (JQuery, Backbone, Underscore, etc.)
  * **[node](http://nodejs.org/)** 0.10.24: Contenedor de aplicaciones web en JS.
    * En desarrollo lo usaremos para levantar la aplicación web.
    * En producción lo usaremos como proxy para que la aplicación web sea indexable.
    * En pruebas lo utilizaremos para arrancar las pruebas unitarias con mocha+phamtomJS
  * **[npm](https://npmjs.org/)** 1.3.21: Gestor de paquetes de node
  * **[compass](http://compass-style.org/)** 0.12.2: Framework para el desarrollo de hojas de estilos en **[SASS](http://sass-lang.com/)**. Lo usaremos principalmente para su compilación y generación de sprites.

## Entorno de desarrollo ##
  * **[Sublime](http://www.sublimetext.com/)**: Se recomienda por su agilidad, versatilidad y por su capacidad de poder propagar fácilmente su configuración para asegurar que todos los desarrolladores trabajan bajo la misma configuración.
    * Plugins recomendados (instalables desde el [Package Manager]())
        * **[JSHint Gutter](https://github.com/victorporof/Sublime-JSHint)**
        * **[HTML-CSS-JS Prettify](https://github.com/victorporof/Sublime-HTMLPrettify)**
        * **[Emmet](https://github.com/sergeche/emmet-sublime)**
        * **[SASS](https://sublime.wbond.net/packages/Sass)**
        * **[SASSBeautify](https://github.com/badsyntax/SassBeautify)**
        * **[DockBlockr](https://github.com/spadgos/sublime-jsdocs)**
        * ...
    * Snippets
        * [pendiente]
  * **[Netbeans](https://netbeans.org/)**: [Pendiente]
  * **[WebStorm](http://www.jetbrains.com/webstorm/)**: [Pendiente]

## Instalación de las Herramientas de Desarrollo ##

### OSX ###

* Instalar Xcode + CommandLine Tools
* Instalar [Homebrew](http://brew.sh/):

```bash
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```

* Instalar [GIT](http://git-scm.com/)

```bash
brew install git
git config --global user.name "Your Full Name"
git config --global user.email "Your Email Address"
```

* Instalar [node + npm](http://nodejs.org/)

```bash
brew install node
```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)

```bash
sudo npm install -g mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
```

* Instalar [compass](http://compass-style.org/install/)

```bash
gem update --system
gem install compass
```


* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)

```bash
npm install -g yo
```

### Ubuntu 13.04 ###

* Installar curl

```bash
sudo apt-get install curl
```

* Instalar rvm + ruby

```bash
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
rvm install 2.0.0-p353
rvm use 2.0.0-p353 --default
ruby -v
```

Si se quiere evitar instalar la documentación de cada paquete de forma local, ejecutar el siguiente comando:

```bash
echo "gem: --no-ri --no-rdoc" > ~/.gemrc
```

* Instalar nodejs + npm

```bash
sudo apt-get install python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

* Instalar compass

```bash
gem update --system
gem install compass
```

* Instalar [GIT](http://git-scm.com/)

```bash
sudo apt-get install git
```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)

```bash
sudo npm install -g mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
```

* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)

```bash
npm install -g yo
```

**NOTA**: Si al arrancar el proyecto sale muchas veces el error `Waiting…Fatal error: watch ENOSPC`, ejecutar el siguiente comando:

* En linux: 

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

* En Mac:

```bash
sudo sysctl -w kern.maxfiles=524288
```

**NOTA**: Si Bower tiene problemas para descargar los paquetes, es probable que sea debido a que trate de obtener los paquetes por protocolo GIT en lugar de HTTPS, para cambiarlo basta con ejecutar el siguiente comando:

```bash
git config --global url."https://".insteadOf git://
```
