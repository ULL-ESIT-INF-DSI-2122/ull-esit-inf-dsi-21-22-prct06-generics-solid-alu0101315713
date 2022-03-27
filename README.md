- [1. Práctica 6 - Clases e interfaces genéricas. Principios SOLID.](#1-práctica-6---clases-e-interfaces-genéricas-principios-solid)
- [2. Tareas Previas.](#2-tareas-previas)
- [3. Para empezar.](#3-para-empezar)
- [4. Ejercicios](#4-ejercicios)
  - [4.1 - El combate definitivo](#41---el-combate-definitivo)
  - [4.2 - DSIflix](#42---dsiflix)
  - [4.3 - El cifrado indescifrable](#43---el-cifrado-indescifrable)
- [5. Conclusiones](#5-conclusiones)
- [6. Bibliografía](#6-bibliografía)

# 1. Práctica 6 - Clases e interfaces genéricas. Principios SOLID.
- En este [repositorio](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101315713.git) donde haré un resumen haciendo una descripción de todos los pasos para el procedimiento de esta práctica. La práctica consiste en hacer una serie de ejercicios siguiendo la [estructura básica de proyecto](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html) que se vio en clase, incluyendo todos los dichos ejercicios en el directorio `./src/ejercicio-n`. siendo n el número de la actividad.

# 2. Tareas Previas.
- Para empezar es necesario realizar antes una serie de tareas previas que nos van a permitir tener las bases para poder configurar un entorno de trabajo adecuado de cara a la realización del informe, por ejemplo haber realizado la Práctica 1, que puede revisar [aquí](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct01-iaas-alu0101315713/), tener leído y aprendido los conocimientos necesarios sobre [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), [Jekyll](https://jekyllrb.com/) y [GitHub Pages](https://lab.github.com/githubtraining/github-pages), además de la lectura de los tutoriales [sobre los métodos que puede utilizar con string](https://www.w3schools.com/js/js_string_methods.asp) y sobre [expresiones regulares en JavaScript](https://www.w3schools.com/js/js_regexp.asp), los [apuntes de Arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-arrays-tuples-enums.html), los [apuntes de Objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-objects-classes-interfaces.html) documentación en [Typedoc](https://typedoc.org/), hacer pruebas unitarias con [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Coveralls](https://coveralls.io/) para la correcta elaboración del mismo y [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html) para escribir código más limpio. A continuación se mostrará una tabla con las tareas previas realizadas (en mi caso):

| Tareas Previas Realizadas.|
| ----- |
|- Haber realizado el informe de la Práctica 1, 2 y 3.|
|- Aceptar la asignación de GitHub Classroom asociada a esta práctica.|
|- Leer los recursos sobre Markdown, pues es el lenguaje para escribir las prácticas.|
|- Leer los recursos sobre Jekyll, para transformar los ficheros de texto en sitios Web.|
|- Leer los recursos sobre GitHub Pages, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Strings, por si se necesita algún concepto para aprender.|
|- Leer los recursos sobre Arrays, tuplas y enumerados, por si se necesita algún concepto para aprender.|
|- Leer los recursos sobre Objetos, clases e interfaces, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre TypeDoc, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Mocha, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Chai, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre Coverall, por si se necesita algún curso para aprender.|
|- Leer los recursos sobre SOLID, por si se necesita algún curso para aprender.|

# 3. Para empezar.
- Los ejercicios deben de tener nombres del estilo `ejercicio-n.ts`, para ello utilizaremos la [estructura básica de proyecto](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html) mencionada anteriormente, e incluiremos los ejercicios en el directorio `./src`. Una vez instaladas las dependencias de Mocha, Chai y TypeDoc, se deberá de hacer la documentación de TypeDoc en la carpeta `./docs` y la metodología TDD en la carpeta `./tests`.

# 4. Ejercicios

## 4.1 - El combate definitivo

Partiendo del desarrollo realizado para el Ejercicio 1 de la Práctica 5, supongamos que ahora queremos incluir distintos tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars o Dragon Ball entre otros.


- Para realizar este ejercicio, creé varias clases:
1. la clase abstracta Fighter
- Con sus clases hijas (universos) donde hereda la función de efectividad a la hora de pelear:
  - Marvel
  - DC
  - Pokemon
  - DragonBall
  - StarWars
  - Combate

- Para las clases hijas solo hizo falta heredar los atributos de la clase Fighter, pues ahí había declarado todos los getters para no tener que hacerlos después y seguir las reglas de SOLID. Luego en cada clase hija modifico la función abstracta que heredan, getEfecto, donde indico la efectividad que tienen los personajes de cada Universo a la hora de combatir. En general las clases herederas son muy similares.

2. Creé la clase Pokedex usando los conocimientos sobre las clases genéricas para poder invocar a varios luchadores de varios Universos (clases).
- En esta clase, gracias al empleo genérico de extender clases, se hace más sencilla la forma de guardar datos dentro de la memoria de la Pokedex, y eliminarlos también con los métodos `guardar` y `eliminar`. **Haciendo uso de una misma estructura de datos**.

- Sin duda esta fue la actividad más tediosa
## 4.2 - DSIflix

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales.

- Para este ejercicio tuve que hacer una clase abstracta Streamable, que heredará en una clase hija BasicStreamableCollection, que a su vez tendrá como clases hijas genéricas a PelisColeccion, SeriesColeccion y DocColeccion.

- Aparte hice las clases Peliculas, Series, Documentales, que tienen los mismos métodos, y tienen todas los mismos atributos y métodos muy parecidos, que serán recogidas de forma genéricas en las 3 clases hijas ya nombradas con aterioridad.


## 4.3 - El cifrado indescifrable

En el Cifrado César, cada letra de un alfabeto se desplaza cierto número de posiciones. Por ejemplo, suponiendo el alfabeto ABCDEFGHIJKLMNÑOPQRSTUVWXYZ, si fijamos un Cifrado César con desplazamiento d = 5, entonces, la letra A pasaría a ser la letra F, la letra B pasaría a ser la letra G, la letra Z pasaría a ser la letra E, y así sucesivamente.

- Para esta práctica tuve que hacer 3 clases, en 3 ficheros diferentes, siguiendo los principios SOLID.
1. CifradoCesar
2. Clave
3. Mensaje

- La clase Mensaje tiene como métodos llamar al propio mensaje, obtener su tamaño y obtener determinado caracter del mismo, estas son claves para hacer el cifrado.
- La clase Clave tiene como métodos llamar al propio mensaje, obtener su tamaño y obtener determinado caracter del mismo, estas son importantes para hacer el cifrado.
- En la clase CifradoCesar llamo a la clase Clave y la clase Mensaje para invocarlas en los métodos encriptar y desencriptar, que hago bastante uso de los métodos de las 2 clases que llamo, de forma que si las clases estaban bien hechas, se podrán ejecutar las pruebas sin errores.

# 5. Conclusiones

- Los ejercicios han servido como repaso sobre cómo usar las funciones de las strings, el uso de los arrays, tuplas y los enumerados en TypeScript. Hay que tener en cuenta que, para las pruebas TDD, primero hay que tener bien instalado Mocha y Chai, y bien escrito el archivo `.mocharc.json`, que siguiendo este [vídeo](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view) tendría que quedar algo similar o igual a [esto](./.mocharc.json).


- Para el caso de TypeDoc, es necesario, aparte de tener las dependencias instaladas, seguir este [vídeo](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) como ayuda fundamental a tenerlo bien instalado.

- También es interesante el uso de la herramienta Coverall que nos informa los archivos con código fuente en Typescript que se han analizado y que se sacan del fichero [.mocharc.json](./.mocharc.json). Coverall nos indica el cubrimiento que le damos a las funciones, la líneas que no están cubiertas y cuánto % se cubre de las sentencias y las ramas. Para saber instalarlo una buena opción es ver este [vídeo](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view).

- En mi caso Coveralls me da un resultado que se puede consultar entrando en este [link](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101315713). Donde se demuestra que el código no alcanza todas las líneas en las ejecuciones, pues hay bastantes condiciones de por medio, y es lo normal, en caso contrario, por ejemplo en el caso de los Universos, los superheroes serian todos iguales y tendrian las mismas caracteristicas y efectividad en los combates, cosa que no puede ser.

- Otro factor bastante importante fue hacer uso de los [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html), que fue clave para hacer clases específicas pra métodos específicos, estos principios se usaron en toda la práctica, por ejemplo, en [ejercicio-3](./src/ejercicio-3).
- 

# 6. Bibliografía
1. [Práctica 1](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct01-iaas-alu0101315713/)
2. [Enunciado Práctica 5](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/)
3. [Introducción a Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
4. [Recurso sobre GitHub Pages](https://docs.github.com/en/pages)
5. [Página web de Jekyll](https://jekyllrb.com/)
6. [Tutorial métodos con strings](https://www.w3schools.com/js/js_string_methods.asp)
7. [Tutorial expresiones regulares en JavaScript](https://www.w3schools.com/js/js_regexp.asp)
8. [TypeDoc](https://typedoc.org/)
9. [Mocha](https://mochajs.org/)
10. [Chai](https://www.chaijs.com/)
11. [Eslint](https://eslint.org/)
12. [Coverall](https://coveralls.io/)
13. [Buen uso de Arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-arrays-tuples-enums.html)
14. [Objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/)
15. [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)