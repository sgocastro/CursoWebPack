# CursoWebPack
Curso de Platzi de Webpack

### Comandos importantes para recordar
1. npx webpack --entry ./nombre-archivo-entrada.js --output ./nombre-archivo-salida.js 
* A este se le puede agregar el parametro --mode, para aclarar si quieres el bundle en modo development o desarrollo.
* Este comando sera reemplazado por el archivo webpack.config.js. Que tiene dentro todo lo necesario.
* Si se le agrega el argumento --config se puede aclarar a donde ir a buscar el archivo config.js

### Dependencias necesarias

#### DevDependencies
*   webpack
*   webpack-cli

#### Dependencias proyecto


### Anotaciones
* --save-exact -> Sirve para guardar el paquete con la version exacta que se debe instalar.
* npx -> Version mejorada de npm. Utilizada para ejecutar dependencias que esten en tu proyecto.

### Importantes

#### webpack.config.js
Dentro de este archivo encontraremos la configuracion para poder crear el bundle necesario para pasarlo a produccion.
Las configuraciones que encontramos aqui dentro son:
* entry -> archivo de entrada para convertir a bundle.
* output -> archivo en el que se depositara el bundle. Dentro tiene mas configuraciones como: path, filename.
* mode -> modo en que veremos el codigo plasmado. Puede ser 'development' o 'production'