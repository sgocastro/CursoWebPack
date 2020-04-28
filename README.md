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
* style-loader -> inyecta un tag style al DOM del html.
* css-loader -> interpreta el archivo css.
* plugins -> Potencian a los loaders.
* web-dev-server -> Permite ver los cambios en el codigo mientras se esta ejecutando
* hotmodulereplacement -> Modulo de Webpack para poder realizar la recarga en caliente de una pagina mientras se esta editando.
sucediendo esto cuando guardamos el archivo modificado.

### Importantes

#### webpack.config.js
Dentro de este archivo encontraremos la configuracion para poder crear el bundle necesario para pasarlo a produccion.
Las configuraciones que encontramos aqui dentro son:
* entry -> archivo de entrada para convertir a bundle.
* output -> archivo en el que se depositara el bundle. Dentro tiene mas configuraciones como: path, filename.
* mode -> modo en que veremos el codigo plasmado. Puede ser 'development' o 'production'
* modules -> Se le aplican reglas para cargar los loaders en los archivos. Se utiliza un objecto dentro comunmente para poder agregar lsa configuraciones de las rules. Tenemos test para detectar bajo que tipo de archivos corre la regla. y 'use' para determinar que debe hacer con ese archivo paso a paso
* plugins -> encargado de potenciar a los loaders ya vistos
* devServer -> Permite hacer configuracion cuando estamos usando un servidor de desarrollo. Permite agregar el hot-reaload, el puerto, si se abre el navegador, etc.


#### Plugins
Los plugins vistos son:
* HtmlWebpackPlugin -> Permite crear un html a partir de los modulos creados.
* webpack.HotReplacementPlugin -> Agrega el hot reload al servidor.
* MiniCSSExportPlugin -> Crea un mini css apartir un archivo css y lo pone en el bundle


### Babel
##### babel-loader
Entiendo los archivos js y se los pasa a @babel/core
##### @babel/core
Transforma el js a la version de js que nosotros querramos
##### @babel/preset-env
Se indica a que version de js se pasa
