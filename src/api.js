// Importar el framework express y modulo MySQL
const express = require('express');
const app = express();
const mysqlDB = require('./conexion');
const cors = require('cors');

// Configurar la API sobre JSON
app.use(express.json());
app.use(cors());



// GET propiedades
app.get('/bienes', async (pedido, respuesta) => {
    try {
        //Conectar a la base de datos 
        const conexion = await mysqlDB.conexionDB();

        //Ejecutar la consulta
        const [filas] = await conexion.execute("SELECT * FROM propiedades");

        // Enviar los resultados como respuesta
        respuesta.send(filas)
    } catch (error) {
        //Enviar error por si algo falla
        respuesta.status(500).send(error);
        console.log(error)
    }
});


// GET estudiantes por id
app.get('/bienes/:documento', async (pedido, respuesta) => {
    const documento = pedido.params.documento;
    try {
        //Conectar a la base de datos 
        const conexion = await mysqlDB.conexionDB();

        //Ejecutar la consulta
        const [filas] = await conexion.execute("SELECT * FROM estudiantes where documento=?",[documento]);

        // Enviar los resultados como respuesta
        respuesta.send(filas[0])
    } catch (error) {
        //Enviar error por si algo falla
        respuesta.status(500).send(error);
    }
});

// Post estudiantes
app.post('/bienes/create',async(nuevoEstudiante,respuesta)=>{
    try{
        const conexion = await mysqlDB.conexionDB();

        //Obtener los datos del estudiante
        const {documento,nombre,email}= nuevoEstudiante.body;


        //Insertar los datos en tabla estudiantes
        await conexion.execute("INSERT INTO estudiantes (documento,nombre,email) VALUES(?,?,?)",[documento,nombre,email]);

        respuesta.send("Nuevo estudiante agregado");
    } catch(error){
        respuesta.status(500).send(error);
    }
}
);


// Post de notas
app.post('/bienes/create',async(nuevaNota,respuesta)=>{
    try{
        const conexion = await mysqlDB.conexionDB();

        //Obtener los datos de la nota del cuerpo
        const {documento_estudiante,codigo_curso,nota,fecha}= nuevaNota.body;


        //Insertar la nota nueva
        await conexion.execute("INSERT INTO notas (documento_estudiante,codigo_curso,nota,fecha) VALUES(?,?,?,?)",[documento_estudiante,codigo_curso,nota,fecha]);

        respuesta.send("Nueva nota agregada");
    } catch(error){
        respuesta.status(500).send(error);
    }
}
);

// Put de notas
app.put('/notas/:id/update',async(nuevaNota,respuesta)=>{
    const id=nuevaNota.params.id;

    try{
        const conexion = await mysqlDB.conexionDB();

        //Obtener los datos de la nota
        const {documento_estudiante,codigo_curso,nota,fecha}= nuevaNota.body;


        //Cambiar la nota en la tabla
        await conexion.execute("UPDATE notas SET documento_estudiante=? ,codigo_curso=? ,nota=? ,fecha=?  where id=? ",[documento_estudiante,codigo_curso,nota,fecha,id]);

        respuesta.send("Nota modificada");
    } catch(error){
        respuesta.status(500).send(error);
    }
}
);

//Delete de notas
app.delete('/notas/:id/delete',async(eliminarNota,respuesta)=>{
    const id=eliminarNota.params.id;

    try{
        const conexion = await mysqlDB.conexionDB();

        //Eliminar los datos en la tabla clientes
        await conexion.execute("DELETE from notas  where id=? ",[id]);

        respuesta.send("Nota eliminada");
    } catch(error){
        respuesta.status(500).send(error);
    }
}
);

// GET notas aprobadas
app.get('/notas/:documento/aprobados', async (pedido, respuesta) => {
    const documento = pedido.params.documento;
    const aprobado=6
    
    try {
        //Conectar a la base de datos 
        const conexion = await mysqlDB.conexionDB();

        //Ejecutar la consulta con filtros
        const [filas] = await conexion.execute("SELECT * FROM notas where documento_estudiante=? and nota>=?",[documento,aprobado]);

        // Enviar los resultados como respuesta
        respuesta.send(filas)
    } catch (error) {
        //Enviar error por si algo falla
        respuesta.status(500).send(error);
    }
});


// Iniciar el servicio en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor esta en linea en el puerto 3000");
})