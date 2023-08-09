const express = require('express')
const app = express()

app.get('/', (req, res)=>{
	res.send('Hola Mundo')
})

app.get('/info/control_acceso', (req, res)=>{
	res.send('Acceso exitoso')
})


app.listen(8080, ()=>{
	console.log('Servidor Expo Saavedra 2023 esta funcionando.')
})