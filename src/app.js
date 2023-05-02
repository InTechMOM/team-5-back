import express from 'express'; 
import { port } from "./config/index.js";

const app = express(); 
console.log("prueba git");

app.get('/', (request, response, error) => {
    response.send('status: ok')
})

app.listen(port, (error) => {
    if(error){
        console.log('Server Error: Failed'); 
        process.exit(1); 
    }

    console.log(`Server listening in port ${port}`)
})
