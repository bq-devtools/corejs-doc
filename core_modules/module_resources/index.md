---
layout: page
---

Módulo: Resources
=================

Este módulo es el responsable de solicitar los recursos del backend necesarios para mostrar la información necesaria, encapsulando toda la complejidad relacionada con los protocolos de autenticación, autorización de peticiones, las búsquedas avanzadas y el mapeo a los modelos de datos.

En Silkroad se pueden obtener 3 tipos de recursos:

## Recurso específico

```javascript
app.resources.resource('books:Book', 'id').get().then(function(data) {

}).fail(function(silkRoadError) {

});
```

* **Con Backbone**

```javascript
var book = app.factory.new('BookModel');

book.fetch({
    resourceType: 'books:Book',
    id: '9788467040203'
}).then(function(data) {

}).fail(function(silkRoadError) {

});
```


## Búsquedas de entidades

```javascript
var params = {
    query: [
        { '$eq': {field3: true} },
        { '$eq': {field4: true} },
        { '$gt': {field5: 'value'} },
        { '$gte': {field5: 'value'} },
        { '$lt': {field5: 'value'} },
        { '$lte': {field5: 'value'} },
        { '$ne': {field5: 'value'} },
        { '$in': {field2: ['pepe', 'juan']} },
        { '$all': {field5: ['pepe', 'juan']} },
        { '$like': {field5: 'value'} }
    ],
    page: {page: 1, size: 5},
    sort: {field1: resources.sort.ASC}
};

app.resources.collection('books:Book').get(params).then(function(data) {

}).fail(function(silkRoadError) {

});
```

* **Con Backbone**

```javascript
var books = new Backbone.Collection([], {
        model: Backbone.Model,
    }),
    params = {
        resourceType: 'books:Book',
        query: [
            { '$eq': {field3: true} },
            { '$eq': {field4: true} },
            { '$gt': {field5: 'value'} },
            { '$gte': {field5: 'value'} },
            { '$lt': {field5: 'value'} },
            { '$lte': {field5: 'value'} },
            { '$ne': {field5: 'value'} },
            { '$in': {field2: ['pepe', 'juan']} },
            { '$all': {field5: ['pepe', 'juan']} },
            { '$like': {field5: 'value'} }
        ],
    page: {page: 1, size: 5},
    sort: {field1: resources.sort.ASC}
};

books.fetch(params).then(function(data) {

}).fail(function(silkRoadError) {

});
```



## Búsquedas de entidades en base a una relación

Este tipo de búsquedas permiten listar entidades en base a larelación con otra entidad existente. Por ejemplo buscar 'los autores de un libro específico'.

```javascript
var params = {
    query: [
        { '$eq': {field3: true} },
        { '$eq': {field4: true} },
        { '$gt': {field5: 'value'} },
        { '$gte': {field5: 'value'} },
        { '$lt': {field5: 'value'} },
        { '$lte': {field5: 'value'} },
        { '$ne': {field5: 'value'} },
        { '$in': {field2: ['pepe', 'juan']} },
        { '$all': {field5: ['pepe', 'juan']} },
        { '$like': {field5: 'value'} }
    ],
    page: {page: 1, size: 5},
    sort: {field1: resources.sort.ASC}
};

app.resources.relation('books:Book', 'id', 'author').get(params).then(function(data) {

}).fail(function(silkRoadError) {

});
```

* **Con Backbone**

```javascript
var books = new Backbone.Collection([], {
        model: Backbone.Model,
    }),
    params = {
        resourceType: 'books:Book',
        id: 'id',
        rel: 'author',
        query: [
            { '$eq': {field3: true} },
            { '$eq': {field4: true} },
            { '$gt': {field5: 'value'} },
            { '$gte': {field5: 'value'} },
            { '$lt': {field5: 'value'} },
            { '$lte': {field5: 'value'} },
            { '$ne': {field5: 'value'} },
            { '$in': {field2: ['pepe', 'juan']} },
            { '$all': {field5: ['pepe', 'juan']} },
            { '$like': {field5: 'value'} }
        ],
    page: {page: 1, size: 5},
    sort: {field1: resources.sort.ASC}
};

books.fetch(params).then(function(data) {

}).fail(function(silkRoadError) {

});
```

### Parámetros de configuración

* `resourcesEndpoint`: Endpoint hasta la API de recursos de Silkroad.


**Más info**

* [SilkRoad](http://jira.mundoreader.com/confluence/display/SILKROAD/SilkRoad+-+Resources+API)