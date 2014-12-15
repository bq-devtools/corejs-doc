---
layout: doc
---


# Primeros pasos

Poner a punto un proyecto coreJS para el desarrollo es realmente sencillo, simplemente basta con seguir las siguientes indicaciones:

## Crear un proyecto coreJS

* Instalar [las herramientas de desarrollo](/setup)

* Clonar esqueleto del proyecto

  ```bash
  mkdir -p ~/code/corejs
  git clone ssh://git@stash.bq.com:7999/swplat/corejs-app-boilerplate.git
  cd corejs-app-boilerplate
  ```

* Inicializar el entorno de desarrollo

  ```bash
  ./init-env.sh su
  ```

## Probar la aplicación

* Probar la aplicación en modo desarrollo.

  ```bash
  grunt server
  ```

* Probar la aplicación optimizada (compilada, concatenada, minimizada, optimizada, ...).

  ```bash
  grunt server:dist
  ```


## Testear la aplicación

* Lanzar los test unitarios por consola

    ```bash
    grunt test
    ```

* Lanzar los test unitarios por navegador

    ```bash
    grunt server:test
    ```



## Construir

```bash
grunt   # => grunt dist
```
Los recursos distribuibles se generarán en `target/dist`
