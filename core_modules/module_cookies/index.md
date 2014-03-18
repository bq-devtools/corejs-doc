---
layout: page
---


Módulo: Cookies
===============

Se encarga de obtener y establecer las cookies del documento actual.

```javascript
// Writing a cookie
app.cookies.setItem(name, value[, end[, path[, domain[, secure]]]]);

// Getting a cookie
app.cookies.getItem(name);

// Removing a cookie
app.cookies.removeItem(name[, path],domain);

// Testing a cookie
app.cookies.hasItem(name);
```

**Más info**

* [MDN Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/document.cookie?redirectlocale=en-US&redirectslug=DOM%2Fdocument.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support)