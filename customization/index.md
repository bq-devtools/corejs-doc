---
layout: doc
---


# Hojas de Estilo


Las hojas de estilo están organizadas en la siguiente estructura de proyecto [SASS](http://sass-lang.com/):

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
    ├── img
    │   ├── *.png                   // imágenes genéricas
    │   └── icons                   // sprites generados por compass desde _sprites.scss
    │       ├── xs
    │       ├── xs-retina
    │       ├── sm
    │       ├── sm-retina
    │       ├── md
    │       ├── md-retina
    │       ├── lg
    │       └── lg-retina
    └── scripts
        └── modules
            └── moduleName
                └── img
                    ├── *.png                   // imágenes genéricas
                    └── icons                   // sprites generados por compass desde _sprites.scss
                        ├── xs
                        ├── xs-retina
                        ├── sm
                        ├── sm-retina
                        ├── md
                        ├── md-retina
                        ├── lg
                        └── lg-retina
```

## Sprites

Con la ayuda de **compass** se generarán automáticamente los *sprites* para los diferentes tamaños de iconos ordenados en carpetas:

Se definirán carpetas para los diferentes puntos de ruptura ([break points RWD](http://mobile.smashingmagazine.com/2013/03/18/retrofit-a-website-to-be-responsive-with-rwd-retrofit/)), se aplicará lo mismo para las imagenes retina generadas a partir de dichos iconos.

Para los nombres de carpetas de las imágenes se utilizarán tallas, añadiendo retina para aquellas imagenes en dicho formato:

```
└── img                 
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

> **Más info**

> * http://www.jc-designs.net/pdf/sassCheat.pdf
> * [Sprite Tutorial](http://compass-style.org/help/tutorials/spriting/)