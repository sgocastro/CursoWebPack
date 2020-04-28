import "../css/index.css"
import text from "./text"

document.body.innerHTML = "Hola manda de culiadasos al curso de platzi de Webpack"
text()


if(module.hot){
    module.hot.accept('./text.js', function () {
        text()
    })
}