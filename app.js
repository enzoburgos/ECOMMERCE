// Importo los paquetes
const express=require("express")
const mongoose=require("mongoose")
//importar variables de seguridad
require("dotenv").config();
// Importo el modulo de rutas
const authRoutes=require("./routes/authRoutes")
const Productos=require("./models/Productos")

// Guardo el express en una constante
const app=express()

// Hago que los archivos de la carpeta public sean estaticos
app.use(express.static("public"))
app.use(express.json())

// Seteo el motor de plantilla
app.set("view engine","ejs")

// Conexion de la base de datos mongo DB
// const dbURL="mongodb+srv://martinbottaro34:JoT8VhALyqIxzzT2@cluster0.1kbibly.mongodb.net/"
const dbURL = "mongodb+srv://enzoburgos960:xBCUFy0SWYB4MlMM@cluster0.tr5lqnj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURL)
.then((result)=>app.listen(4000))
.catch((error)=>console.log(error))


// Agrego la primera ruta
app.get("/",(req,res)=>{
    res.render('home') 
})


// Conecto las rutas 
app.use(authRoutes)




