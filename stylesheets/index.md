---
layout: page
---


Hojas de Estilo
===============

Se propone el siguiente esquema de proyecto [SASS](http://sass-lang.com/):

```
└── src/main/webapp
    ├── css
    │   ├── global
    │   │   ├── _fonts.scss         // importación de tipografías externas
    │   │   ├── _mixins.scss        // librería de utilidades sass
    │   │   ├── _print.scss         // estilos para hojas impresión
    │   │   ├── _reset.scss         // reset de estilos para navegadores
    │   │   ├── _responsive.scss    // gestión RWD (Responsive Web Design)
    │   │   ├── _sprites.scss       // generación de sprites
    │   │   ├── _scaffolding.scss   // configuración inicial
    │   │   ├── _utils.scss         // clases útiles para la maquetación
    │   │   └── _variables.scss     // definición de variables del proyecto
    │   └── main.scss               // importación de todos los estilos
    └── img
        └── common                  // imágenes genéricas
            └── logo.png
        ├── modules                 // imágenes de los módulos de la app
        └── sprites                 // sprites generados por compass desde _sprites.scss
            └── icons
                ├── xs
                ├── xs-retina
                ├── sm
                ├── sm-retina
                ├── md
                ├── md-retina
                ├── lg
                └── lg-retina
```

## Sprites ##
Con la ayuda de **compass** se generarán automáticamente los *sprites* para los diferentes tamaños de iconos ordenados en carpetas:

> Sprite Tutorial
> http://compass-style.org/help/tutorials/spriting/

Se definirán carpetas para los diferentes puntos de ruptura ([break points RWD](http://mobile.smashingmagazine.com/2013/03/18/retrofit-a-website-to-be-responsive-with-rwd-retrofit/)), se aplicará lo mismo para las imagenes retina generadas a partir de dichos iconos.

Para los nombres de carpetas de las imágenes se utilizarán tallas, añadiendo retina para aquellas imagenes en dicho formato:

```
└── sprites                 
    └── icons
        ├── xs
        ├── xs-retina
        ├── sm
        ├── sm-retina
        ├── md
        ├── md-retina
        ├── lg
        └── lg-retina
```

**Más info**

* http://www.jc-designs.net/pdf/sassCheat.pdf