
Testing

La importancia de los test
	garantía de funcionalidad
	asegurar la robustez.
		El software cambia, pide refactorizaciones, sin test no se puede
		garantizar su correcto funcionamiento
	garantía mínima de calidad
	ejemplos reales de aportaciones

Tipos de tests
	Test unitarios -> testear comportamiento de módulos aislados
	Test de integración -> comprobar el correcto funcionamiento de varios módulos
	Test funcionales -> comprobar el correcto funcionamiento de una funcionalidad completa
	Pruebas de Humo -> probar el funcionamiento de la parte existente, vital
	Sanity checks -> comprobar que los bugs y funcionalidades nuevas son correctas y no añaden nuevos bugs


Test funcionales (Selenium)
	nos centramos en los test funcionales
	éstos se hacen normalmente con selenium
	para la mayoría de las cosas nos sirve, pero tiene sus pegas:
		lidiar con Java (no todos los desarrolladores web)

SeleniumJS + coreJS-build
	Pero si lo pensamos detenidamente, estamos deacuerdo de que los
	desarrolladores tienen que hacer sus propios tests, y cuántos hemos tocado alguna vez JS?
	Es por ello por lo que lo hemos integrado en coreJS




Necesidades nuevas


Esquema de SeleniumJS test (mocha)

[Demo] Flujo de desarrollo local
Yo me lo guiso, yo me lo como
Yo como desarrollador en local quiero ejecutar mis test de selenium en los navegadores de mi máquina.
- configuración
- ejecución
- resultados

[Demo] Flujo de desarrollo a máquina remota
Yo me lo guiso, pero que se lo coma otro
Yo como desarrollador quiero ejecutar mis test de selenium en los navegadores de otra máquina.
- configuración
- ejecución
- resultados

SauceLabs

[Demo] Flujo de desarrollo a PAAS
Yo me lo curro, pero otro lo ejecuta
Yo como QA/Job_CI quiero ejecutar los test de selenium en los navegadores en la nube.
- configuración
- ejecución
- resultados

Flujo actual
- Diagrama

Montar proyecto de test
- corejs-boilerplate-app
- from scratch




Documentación

Documentación+

