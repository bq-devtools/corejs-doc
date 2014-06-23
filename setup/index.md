---
layout: page
---


Entorno de desarrollo
=====================

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

## Ubuntu ##

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


## Windows ##

* Descargar e instalar [Git bash](http://git-scm.com/downloads)

![git1](/assets/images/git1.png)
![git2](/assets/images/git2.png)
![git3](/assets/images/git3.png)


* Descargar e instalar [NodeJS](http://nodejs.org/)


* Descargar e instalar [Ruby](http://rubyinstaller.org/)

![ruby1](/assets/images/ruby1.png)

* Descargar e instalar [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

* Ejecutar en Git Bash los siguientes comandos:

```bash

npm install -g yo mocha-phantomjs@">=3.3.1" phantomjs@">=1.9.7-1"
gem install compass

```

----------

### Notas ###

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