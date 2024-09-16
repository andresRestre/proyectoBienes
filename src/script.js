import axios from 'axios'


/* async function crearPost(titulo,contenido) {
    try{
        let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title:titulo,
                body:contenido,
                userId:1,
            })
        })
        if(!respuesta.ok){
            throw new Error("Error en la solicitud" + respuesta.statusText)
        }
        let data = await respuesta.json()
        console.log("Registro creado", data)

    }   catch(error){
        console.log("Algo salio mal al crear el registra: ", error)
    } 
}

crearPost("Mi primer titulo","Contenido de ejemplo")
 */

function prueba(){
axios.get('http://localhost:3000/bienes/')
.then(function (respuesta) {
    console.log(respuesta.data[1])
}
)
}   


//PUT
/* fetch('https://jsonplaceholder.typicode.com/posts/3',{
    method: 'PUT', 
    headers: {
        "Content-Type":'application/json'
    },
    body:JSON.stringify({
        title:'Nuevo titulo',
        body:'Nueva descripcion'
    })
})
.then(respuesta=>respuesta.json())
.then(data=>console.log(data))
.catch(error=>console.error('error',error))



//PUT
fetch('https://jsonplaceholder.typicode.com/posts/3',{
    method: 'PATCH', 
    headers: {
        "Content-Type":'application/json'
    },
    body:JSON.stringify({
        title:'Nuevo titulo',
    })
})
.then(respuesta=>respuesta.json())
.then(data=>console.log(data))
.catch(error=>console.error('error',error))




//DELETE
fetch('https://jsonplaceholder.typicode.com/posts/3',{
    method: 'DELETE', 
})
.then(respuesta=>respuesta.json())
.then(data=>console.log(data))
.catch(error=>console.error('error',error)) */


export default prueba;