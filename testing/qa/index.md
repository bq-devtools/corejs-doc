---
layout: page
---


Propuesta de Integración con QA
===============================

Esta propuesta trata de ofrecer una serie de convenciones por las cuales QA pueda conocer y acceder a los elementos interactuables de la aplicación, todo esto sin que afecte a la evolución de la capa de presentación.

Para ello dejaremos las clases de HTML para los desarrollos de las hojas de estilos y definiremos una serie de etiquetas `data-*` de HTML5 para que QA conozca que partes de la interfaz le afectan en su trabajo.

En particular se proponen los siguientes atributos:

* `data-action`: El elemento reacciona a una acción específica, por ejemplo `toggle`, `hide`, `save`, ...
* `data-target`: Es un elemento afectado en una acción en concreto, con el mismo nombre del action que lo provocó.
* `data-rel`: Es un elemento/componente con significado propio, ayuda a establecer un contexto. Por ejemplo `modal`, `dropdown`.
* `data-rel-id`: Es un elemento/componente único, con el fin de diferenciarse de los elementos o componentes comunes con un mismo data-rel.

* **Ejemplo**

```html
<button data-action="toggle"></button>
<div data-rel="modal" data-target="toggle">...</div>
```
