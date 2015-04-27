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
  * **[Sass](http://sass-lang.com/)** 3.4.12 (Selective Steve): Preprocesador CSS, un superset de CSS que permite desarrollar hojas de estilo más estructurados y reutilizables.

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
  * **[compass](http://compass-style.org/)** 1.0.3 (Polaris): Framework para el desarrollo de hojas de estilos en **[SASS](http://sass-lang.com/)**. Lo usaremos principalmente para su compilación y generación de sprites.
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
  * **[Atom](https://atom.io/)**: Practicamente igual que Sublime pero opensource.
    * [Plugins recomendados](https://atom.io/users/anthanh/stars) (instalar con `apm stars --user anthanh --install`)
  * **[Netbeans](https://netbeans.org/)**: [Pendiente]
  * **[WebStorm](http://www.jetbrains.com/webstorm/)**: [Pendiente]




# Instalación

Esta apartado describe los pasos necesarios para configurar el entorno de desarrollo.

## OSX ##

* Instalar Xcode + CommandLine Tools
* Instalar [Homebrew](http://brew.sh/):

    ```bash
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
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

    curl -L https://npmjs.com/install.sh | sh
    ```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)

    ```bash
    npm install -g mocha-phantomjs phantomjs
    ```

* Instalar [compass](http://compass-style.org/install/)

    ```bash
    gem update --system
    gem install compass
    gem install scss-lint
    ```

* Instalar Linters

    ```bash
    npm install -g jshint csslint
    ```

* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)

    ```bash
    npm install -g yo grunt-cli bower
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
    curl -sSL https://rvm.io/mpapis.asc | gpg --import
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

* Instalar nodejs + npm sin sudo ([fuente original](https://gist.github.com/isaacs/579814#file-node-and-npm-in-30-seconds-sh))

    ```bash
    sudo apt-get install python g++ make

    # .bashrc or .zshrc if you have oh-my-zsh
    echo 'export PATH=$HOME/.local/bin:$PATH' >> ~/.bashrc && source ~/.bashrc
    echo "export NODE_PATH=$NODE_PATH:$HOME/.local/lib/node_modules" >> ~/.bashrc && source ~/.bashrc

    mkdir ~/.local
    cd .local
    mkdir ~/node
    cd ~/node

    # node
    curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1

    ./configure --prefix=~/.local
    make install

    # Expose bin to default nodejs bin for sublime plugins
    sudo ln -s ~/.local/bin/node  /usr/bin/nodejs
    sudo ln -s ~/.local/lib/node_modules /usr/local/lib/

    # npm
    curl -L https://npmjs.com/install.sh | sh

    ```

* Instalar compass

    ```bash
    gem update --system
    gem install compass
    gem install scss-lint
    ```

* Instalar [PhamtonJS](http://phantomjs.org/download.html)

    ```bash
    npm install -g mocha-phantomjs phantomjs
    ```

* Instalar Linters

    ```bash
    npm install -g jshint csslint
    ```

* Instalar [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)

    ```bash
    npm install -g yo grunt-cli bower
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
    npm install -g mocha-phantomjs phantomjs
    npm install -g jshint csslint
    npm install -g yo grunt-cli bower
    gem install compass
    gem install scss-lint
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
git config --global url."https://github".insteadOf git://github
```

> **Más info**

> * [Use https:// protocol instead of git:// when a proxy is set](https://github.com/bower/bower/issues/731)
> * [Docs - git:// blocked workaround](https://github.com/bower/bower/issues/250)



# npm privado

* Instalar [node+npm](http://corejs.docs.bqws.io/setup/)

* Instalar sinopia+forever `npm install -g sinopia forever`

* Crear el script `/etc/init.d/sinopia` con el siguiente contenido:
  
  ```
  #!/bin/bash
  #
  # Run sinopia using Forever as the process monitor.
  #
  ### BEGIN INIT INFO
  # Provides:             sinopia
  # Required-Start:       $syslog $remote_fs
  # Required-Stop:        $syslog $remote_fs
  # Should-Start:         $local_fs
  # Should-Stop:          $local_fs
  # Default-Start:        2 3 4 5
  # Default-Stop:         0 1 6
  # Short-Description:    Sinopia - private npm repository server
  # Description:          Sinopia - private npm repository server
  ### END INIT INFO
  #
  # Based on:
  # https://gist.github.com/3748766
  # https://github.com/hectorcorrea/hectorcorrea.com/blob/master/etc/forever-initd-hectorcorrea.sh
  # https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/

  # Source function library. Note that this isn't used here, but remains to be
  # uncommented by those who want to edit this script to add more functionality.
  # Note that this is Ubuntu-specific. The scripts and script location are different on
  # RPM-based distributions.
  # . /lib/lsb/init-functions

  NAME="sinopia"
  NODE_BIN_DIR=/home/anthanh/local/bin
  NODE_PATH=/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript:/home/anthanh/local/lib/node_modules
  CONFIG_PATH=/home/anthanh/.config/sinopia/config.yaml
  APPLICATION_DIRECTORY=/home/anthanh/local/bin/
  APPLICATION_START=sinopia
  APPLICATION_OPTIONS="--config $CONFIG_PATH --listen localhost:4873"
  PIDFILE=/var/run/sinopia.pid
  LOGFILE=/var/log/sinopia.log

  # Add node to the path for situations in which the environment is passed.
  PATH=$NODE_BIN_DIR:$PATH
  # Export all environment variables that must be visible for the Node.js
  # application process forked by Forever. It will not see any of the other
  # variables defined in this script.
  export NODE_PATH=$NODE_PATH

  start() {
      echo "Starting $NAME"
      # We're calling forever directly without using start-stop-daemon for the
      # sake of simplicity when it comes to environment, and because this way
      # the script will work whether it is executed directly or via the service
      # utility.
      #
      # The minUptime and spinSleepTime settings stop Forever from thrashing if
      # the application fails immediately on launch. This is generally necessary to
      # avoid loading development servers to the point of failure every time
      # someone makes an error in application initialization code, or bringing down
      # production servers the same way if a database or other critical service
      # suddenly becomes inaccessible.
      #
      # The pidfile contains the child process pid, not the forever process pid.
      # We're only using it as a marker for whether or not the process is
      # running.
      forever --pidFile $PIDFILE --sourceDir $APPLICATION_DIRECTORY \
          -a -l $LOGFILE --minUptime 5000 --spinSleepTime 2000 \
          start $APPLICATION_START $APPLICATION_OPTIONS &
      RETVAL=$?
  }

  stop() {
      if [ -f $PIDFILE ]; then
          echo "Shutting down $NAME"
          # Tell Forever to stop the process. Note that doing it this way means
          # that each application that runs as a service must have a different
          # start file name, regardless of which directory it is in.
          forever stop $APPLICATION_DIRECTORY$APPLICATION_START
          # Get rid of the pidfile, since Forever won't do that.
          rm -f $PIDFILE
          RETVAL=$?
      else
          echo "$NAME is not running."
          RETVAL=0
      fi
  }

  restart() {
      echo "Restarting $NAME"
      stop
      start
  }

  status() {
      echo "Status for $NAME:"
      # This is taking the lazy way out on status, as it will return a list of
      # all running Forever processes. You get to figure out what you want to
      # know from that information.
      #
      # On Ubuntu, this isn't even necessary. To find out whether the service is
      # running, use "service my-application status" which bypasses this script
      # entirely provided you used the service utility to start the process.
      forever list
      RETVAL=$?
  }

  case "$1" in
      start)
          start
          ;;
      stop)
          stop
          ;;
      status)
          status
          ;;
      restart)
          restart
          ;;
      *)
          echo "Usage: {start|stop|status|restart}"
          exit 1
          ;;
  esac
  exit $RETVAL

  ```

* Dar permisos de ejecución `sudo chmod +x /etc/init.d/sinopia`
* Buscar todas las rutas que usa `sinopia` `sudo find / -name "sinopia" -type d`
* Obtener `NODE_BIN_DIR` desde `which node`
* Obtener `NODE_PATH` desde `~/.bashrc`
* Obtener `CONFIG_PATH` desde `.config` sinopia path
* Obtener `APPLICATION_DIRECTORY` desde `which sinopia`

* Arrancar el servicio manualmente

```
sudo /etc/init.d/sinopia start
```

* Arrancar el servicio al iniciar el sistema (Ubuntu)

```
sudo update-rc.d sinopia defaults
```
* Quitar el arranque del servicio al iniciar el sistema (Ubuntu)

```
sudo update-rc.d -f sinopia remove
```

* Arrancar el servicio al iniciar el sistema(CentOS/RedHat/AmazonLinux)

```
sudo chkconfig --add sinopia
sudo chkconfig sinopia on
```

* Log (server)

```
tail -f /var/log/sinopia.log
```


* Cambiar al registro npm privado

```
npm set registry http://yourPrivateBowerRepo:4873/
```



# bower privado

* Instalar [node+npm](http://corejs.docs.bqws.io/setup/)

* Instalar private-bower+forever `npm install -g private-bower forever`

* Crear el script `/etc/init.d/private-bower` con el siguiente contenido:

  ```
  #!/bin/bash
  #
  # Run private-bower using Forever as the process monitor.
  #
  ### BEGIN INIT INFO
  # Provides:             private-bower
  # Required-Start:       $syslog $remote_fs
  # Required-Stop:        $syslog $remote_fs
  # Should-Start:         $local_fs
  # Should-Stop:          $local_fs
  # Default-Start:        2 3 4 5
  # Default-Stop:         0 1 6
  # Short-Description:    private bower repository server
  # Description:          private bower repository server
  ### END INIT INFO
  #
  # Based on:
  # https://gist.github.com/3748766
  # https://github.com/hectorcorrea/hectorcorrea.com/blob/master/etc/forever-initd-hectorcorrea.sh
  # https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/

  # Source function library. Note that this isn't used here, but remains to be
  # uncommented by those who want to edit this script to add more functionality.
  # Note that this is Ubuntu-specific. The scripts and script location are different on
  # RPM-based distributions.
  # . /lib/lsb/init-functions

  NAME="private-bower"
  NODE_BIN_DIR=/home/anthanh/local/bin
  NODE_PATH=/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript:/home/anthanh/local/lib/node_modules
  CONFIG_PATH=/home/anthanh/.config/private-bower/config.json
  APPLICATION_DIRECTORY=/home/anthanh/local/bin/
  APPLICATION_START=private-bower
  # Run with options private-bower config
  # APPLICATION_OPTIONS="--config $CONFIG_PATH"
  PIDFILE=/var/run/private-bower.pid
  LOGFILE=/var/log/private-bower.log

  # Add node to the path for situations in which the environment is passed.
  PATH=$NODE_BIN_DIR:$PATH
  # Export all environment variables that must be visible for the Node.js
  # application process forked by Forever. It will not see any of the other
  # variables defined in this script.
  export NODE_PATH=$NODE_PATH

  start() {
      echo "Starting $NAME"
      # We're calling forever directly without using start-stop-daemon for the
      # sake of simplicity when it comes to environment, and because this way
      # the script will work whether it is executed directly or via the service
      # utility.
      #
      # The minUptime and spinSleepTime settings stop Forever from thrashing if
      # the application fails immediately on launch. This is generally necessary to
      # avoid loading development servers to the point of failure every time
      # someone makes an error in application initialization code, or bringing down
      # production servers the same way if a database or other critical service
      # suddenly becomes inaccessible.
      #
      # The pidfile contains the child process pid, not the forever process pid.
      # We're only using it as a marker for whether or not the process is
      # running.
      forever --pidFile $PIDFILE --sourceDir $APPLICATION_DIRECTORY \
          -a -l $LOGFILE --minUptime 5000 --spinSleepTime 2000 \
          start $APPLICATION_START $APPLICATION_OPTIONS &
      RETVAL=$?
  }

  stop() {
      if [ -f $PIDFILE ]; then
          echo "Shutting down $NAME"
          # Tell Forever to stop the process. Note that doing it this way means
          # that each application that runs as a service must have a different
          # start file name, regardless of which directory it is in.
          forever stop $APPLICATION_DIRECTORY$APPLICATION_START
          # Get rid of the pidfile, since Forever won't do that.
          rm -f $PIDFILE
          RETVAL=$?
      else
          echo "$NAME is not running."
          RETVAL=0
      fi
  }

  restart() {
      echo "Restarting $NAME"
      stop
      start
  }

  status() {
      echo "Status for $NAME:"
      # This is taking the lazy way out on status, as it will return a list of
      # all running Forever processes. You get to figure out what you want to
      # know from that information.
      #
      # On Ubuntu, this isn't even necessary. To find out whether the service is
      # running, use "service my-application status" which bypasses this script
      # entirely provided you used the service utility to start the process.
      forever list
      RETVAL=$?
  }

  case "$1" in
      start)
          start
          ;;
      stop)
          stop
          ;;
      status)
          status
          ;;
      restart)
          restart
          ;;
      *)
          echo "Usage: {start|stop|status|restart}"
          exit 1
          ;;
  esac
  exit $RETVAL

  ```

* Dar permisos de ejecución `sudo chmod +x /etc/init.d/private-bower`
* Buscar todas las rutas que usa `private-bower` `sudo find / -name "private-bower" -type d`
* Obtener `NODE_BIN_DIR` desde `which node`
* Obtener `NODE_PATH` desde `~/.bashrc`
* Obtener `CONFIG_PATH` desde `.config` private-bower path
* Obtener `APPLICATION_DIRECTORY` desde `which private-bower`

* Add +x permissions `sudo chmod +x /etc/init.d/private-bower`
* show all private-bower paths with `sudo find / -name "private-bower" -type d`
* `NODE_BIN_DIR` from `which node`
* `NODE_PATH` from `~/.bashrc`
* copy `private-bower-config.json` to `~/.config/private-bower/config.json`
* `CONFIG_PATH` from `config.json` private-bower path
* `APPLICATION_DIRECTORY` from `which private-bower`
* `APPLICATION_START=private-bower`

* Arrancar el servicio manualmente

```
sudo /etc/init.d/sinopia start
```

* Arrancar el servicio al iniciar el sistema (Ubuntu)

```
sudo update-rc.d sinopia defaults
```
* Quitar el arranque del servicio al iniciar el sistema (Ubuntu)

```
sudo update-rc.d -f sinopia remove
```

* Arrancar el servicio al iniciar el sistema(CentOS/RedHat/AmazonLinux)

```
sudo chkconfig --add sinopia
sudo chkconfig sinopia on
```

* Log (server)

```
tail -f /var/log/sinopia.log
```


* Cambiar al registro bower privado
  Para cada proyecto, añadir el siguiente atributo al fichero `.bowerrc`.

  ```
  { "registry": "http://yourPrivateBowerRepo:5678" }
  ```


## Más info

* https://www.debian-administration.org/article/28/Making_scripts_run_at_boot_time_with_Debian
* https://github.com/ramiel/sinopia-scripts
* http://www.snip2code.com/Snippet/104241/init-d-config-for-sinopia
* https://github.com/Hacklone/private-bower
