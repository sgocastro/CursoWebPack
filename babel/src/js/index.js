import "../css/index.css"
import search from './search'
import render from './render'

const id = prompt('¿Quien es ese pokemon?')

search(id)
    .then((data) => {
        console.log(data)
        render(data)
    })
    .catch((error) => {
        console.log(`No hubo Pokemon. Razon: ${error}`)
    })


// if(module.hot){
//     module.hot.accept('./text.js', function () {
//         text()
//     })
//}