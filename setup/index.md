---
layout: doc
---


# Stack Tecnológico

Esta apartado describe todas las tecnologías usadas para el desarrollo de aplicaciones web y pará qué sirven cada una de ellas.

## Base
  * **[Backbone](http://backbonejs.org/)** 1.1.0: Librería arquitectural que provee elementos básicos para el desarrollo de aplicaciones web
  * **[Marionette](http://marionettejs.com/)** 1.4.1: Plugin para Backbone que ofrece funcionalidades neccesarias para el desarrollo de grandes aplicaciones web.
  * **[RequireJS](http://requirejs.org/)** 2.1.5: Librería para la carga de módulos asíncronos AMD.

  * **[JQuery](http://jquery.com/)** 1.9.1: Librería para manipulación del DOM y soporte AJAX.
  * **[Underscore](http://underscorejs.org/)** 1.5.2: Dependencia de Backbone. Librería de útiles para el manejo de estructuras de datos.
  * **[Handlebars](http://handlebarsjs.com/)** 1.3.0: Librería para la compilación y renderizado de plantillas.
  * **[Modernizr](http://modernizr.com/)** 2.6.2: Librería que ofrece soporte a la detección de funcionalidades del navegador del dispositivo.

## i18n
  * **[i18next](http://i18next.com/)** 1.7.3: Librería de internacionalización con soporte para textos, géneros y plurales.
  * **[numeral](http://numeraljs.com/)** 1.5.3: Librería para la internacionalización de unidades métricas.
  * **[momentJS](http://momentjs.com/)** 2.6.0: Librería para la manipulación de fechas.

## Testing
  * **[mocha](http://visionmedia.github.io/mocha/)** 1.16.2: Framework para el desarrollo de test unitarios en JS.
  * **[Chai](http://chaijs.com/)** 1.8.1: DSL de mocha, para el desarrollo de test con TDD o BDD.
  * **[SinonJS](http://sinonjs.org/)** 1.7.3: Librería para mocks y stubs en JS.
  * **[PhantomJS](http://phantomjs.org/)** 1.9.7: Navegador webkit headless para test de integración.
  * **[VirtualBox](https://www.virtualbox.org/)**: Gestión de máquinas virtuales, para poder probar la aplicación web en diferentes navegadores de diferentes SO.

## Construcción y desarrollo
  * **[curl](http://curl.haxx.se/)** 7.32.0: Lo utilizaremos principalmente para recuperar paquetes a instalar.
  * **[GIT](http://git-scm.com/)**: Dependencia de npm para instalar paquetes.
  * **[ruby](https://www.ruby-lang.org/es/)** 2.0.0-p353: Dependencia de [Compass](http://compass-style.org/).
  * **[PhantomJS](http://phantomjs.org/)** 1.9.7: Para ejecutar tests unitarios y como navegador del SEO-server.
  * **[Yeoman](http://yeoman.io/)** 1.1.0: Creación de arquitetipos y sus componentes
  * **[Grunt](http://gruntjs.com/)** 0.4.4 (grunt-cli 0.1.11): Definición del proceso de construcción del front o de cualquier tarea repetitiva automatizable de éste.
  * **[Bower](http://bower.io/)** 1.2.8: Gestión de dependencias de la aplicación web (JQuery, Backbone, Underscore, etc.)
  * **[node](http://nodejs.org/)** 0.10.24: Contenedor de aplicaciones web en JS.
    * En desarrollo lo usaremos para levantar la aplicación web.
    * En producción lo usaremos como proxy para que la aplicación web sea indexable.
    * En pruebas lo utilizaremos para arrancar las pruebas unitarias con mocha+phamtomJS
  * **[npm](https://npmjs.org/)** 1.3.21: Gestor de paquetes de node
  * **[compass](http://compass-style.org/)** 0.12.2: Framework para el desarrollo de hojas de estilos en **[SASS](http://sass-lang.com/)**. Lo usaremos principalmente para su compilación y generación de sprites.
  * **[Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)** 1.8: Para trabajar con Selenium WebDriver en local.

## Entorno de desarrollo
  * **[Sublime](http://www.sublimetext.com/)**: Se recomienda por su agilidad, versatilidad y por su capacidad de poder propagar fácilmente su configuración para asegurar que todos los desarrolladores trabajan bajo la misma configuración.
    * Plugins recomendados (instalables desde el [Package Manager]())
        * **[JSHint Gutter](https://github.com/victorporof/Sublime-JSHint)**
        * **[HTML-CSS-JS Prettify](https://github.com/victorporof/Sublime-HTMLPrettify)**
        * **[Emmet](https://github.com/sergeche/emmet-sublime)**
        * **[SASS](https://sublime.wbond.net/packages/Sass)**
        * **[SASSBeautify](https://github.com/badsyntax/SassBeautify)**
        * **[DocBlockr](https://github.com/spadgos/sublime-jsdocs)**
        * **[EditorConfig](https://sublime.wbond.net/packages/EditorConfig)**
        * ...
    * Snippets
        * [pendiente]
  * **[Netbeans](https://netbeans.org/)**: [Pendiente]
  * **[WebStorm](http://www.jetbrains.com/webstorm/)**: [Pendiente]




# Instalación

Esta apartado describe los pasos necesarios para configurar el entorno de desarrollo.

## OSX ##

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

* Instalar [node + npm](http://nodejs.org/) ([instalación sin sudo](https://gist.github.com/isaacs/579814#file-using-homebrew-sh))

    ```bash
    PREFIX=$(brew --prefix)
     
    sudo mkdir -p $PREFIX/{share/man,bin,lib/node,include/node}
    sudo chown -R $USER $PREFIX/{share/man,bin,lib/node,include/node}
     
    brew install node
     
    curl https://www.npmjs.org/install.sh | sh
    ```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)

    ```bash
    npm install -g mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
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

* Descargar e instalar [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

## Ubuntu ##

* Installar curl

    ```bash
    sudo apt-get install curl
    ```

* Instalar [GIT](http://git-scm.com/)

    ```bash
    sudo apt-get install git
    ```

* Instalar Java

    ```bash
    sudo add-apt-repository -y ppa:webupd8team/java
    sudo apt-get update
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
    sudo apt-get install -y oracle-java8-installer
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

* Instalar nodejs + npm ([instalación sin sudo](https://gist.github.com/isaacs/579814#file-node-and-npm-in-30-seconds-sh))

    ```bash
    sudo apt-get install python g++ make

    # .bashrc or .zshrc if you have oh-my-zsh
    echo 'export PATH=$HOME/.local/bin:$PATH' >> ~/.bashrc && source ~/.bashrc
    echo "export NODE_PATH=$NODE_PATH:$HOME/.local/lib/node_modules" >> ~/.bashrc && source ~/.bashrc
    
    mkdir ~/.local
    cd ~/.local
    
    # node
    git clone https://github.com/joyent/node.git
    cd node
    git checkout "v0.10.24"
    ./configure --prefix=~/.local
    make install
    
    # Expose bin to default nodejs bin for sublime plugins
    sudo ln -s ~/.local/bin/node  /usr/bin/nodejs
    sudo ln -s ~/.local/lib/node_modules /usr/local/lib/
    
    # npm

    cd ~/.local

    git clone git@github.com:npm/npm.git
    cd npm
    git checkout tags/v1.4.23
    make install 

    ```

* Instalar compass

    ```bash
    gem update --system
    gem install compass
    ```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)

    ```bash
    npm install -g mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
    ```

* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)

    ```bash
    npm install -g yo
    ```


## Windows ##

* Descargar e instalar [Git bash](http://git-scm.com/downloads)

    ![git1](/assets/images/git1.png)
    ![git2](/assets/images/git2.png)
    ![git3](/assets/images/git3.png)


* Descargar e instalar [NodeJS](http://nodejs.org/)

* Descargar e instalar [Ruby](http://rubyinstaller.org/)

    ![ruby1](/assets/images/ruby1.png)

* Descargar e instalar [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

* Ejecutar en Git Bash los siguientes comandos:

    ```bash
    npm install -g yo mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
    gem install compass
    ```

----------

## Notas

Si al arrancar el proyecto sale muchas veces el error `Waiting…Fatal error: watch ENOSPC`, ejecutar el siguiente comando:

* En linux: 

    ```bash
    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
    ```

* En Mac:

    ```bash
    ulimit -s 32768
    ```

Si Bower tiene problemas para descargar los paquetes, es probable que sea debido a que trate de obtener los paquetes por protocolo GIT en lugar de HTTPS, para cambiarlo basta con ejecutar el siguiente comando:

```bash
git config --global url."https://".insteadOf git://
```
