---
layout: page
---

 
Módulo: Factory
===============

Este módulo se encarga de gestionar los diferentes tipos de objetos de la aplicación (Model, Collection, Layout, View)

```javascript
// Models
app.factory.add('CompontentNameModel', CompontentNameModel);
app.factory.new('CompontentNameModel', options);
app.factory.get('CompontentNameModel');

// Collections
app.factory.add('CompontentNameCollection', CompontentNameCollection);
app.factory.new('CompontentNameCollection', options);
app.factory.get('CompontentNameCollection');

// Views
app.factory.add('CompontentNameView', CompontentNameView);
app.factory.new('CompontentNameView', options);
app.factory.get('CompontentNameView');

// Layouts
app.factory.add('CompontentNameLayout', CompontentNameLayout);
app.factory.new('CompontentNameLayout', options);
app.factory.get('CompontentNameLayout');
```

**Nota**: Se debe tener en cuenta la convención de nombres para los diferentes componentes (Name + Type).