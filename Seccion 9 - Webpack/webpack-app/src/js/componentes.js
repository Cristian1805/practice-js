//import '../css/estilos.css'
//import liverpoollogo from '../img/liverpool.jpg'
import wplogo from '../img/webpack.png'




export const saludar = (nombre)=>{
    console.log('Creando etiqueta h1')


    const h1 = document.createElement('h1')
    h1.innerText = `Hola ${nombre}`
    document.body.append(h1)

    const img = document.createElement('img')
    img.src = liverpoollogo
    document.body.append(img)
}

