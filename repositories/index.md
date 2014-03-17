---
layout: page
---

## Repositorios

Este proyecto está alojado en los siguientes repositorios **[GIT](http://git-scm.com/)**:


* **coreJS Build**
En este repositorio define el proceso de construcción y otras tareas automatizadas a través de **[Grunt](http://gruntjs.com/)**.

```bash
git@bitbucket.org:mundoreader/corejs-build.git
```

* **coreJS Base**
En este repositorio se guarda los módulos principales de toda webapp (localización, integración con backend, factorías, configuración, ...)

```bash
git@bitbucket.org:mundoreader/corejs-base.git
```

* **coreJS [projectName] Modules**
En este repositorio almacena los módulos de la webapp específica en función del `[projectName]`:

```bash
git@bitbucket.org:mundoreader/[projectName]-corejs-app.git
git@bitbucket.org:mundoreader/bookland-corejs-app.git
git@bitbucket.org:mundoreader/mercurio-corejs-app.git
git@bitbucket.org:mundoreader/orpheus-corejs-app.git
```

* Los **desarrolladores de webapps** trabajarán principalmente con los repositorios de **coreJS [projectName] Modules**, creando módulos específicos.
* Los **desarrolladores del coreJS** trabajarán principalmente con el repsitorio de **coreJS Base**
