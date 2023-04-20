import mongoose from 'mongoose';
import { dbUri } from './index.js';



export const bdConnection = async () => {
    try{
        await mongoose.connect(dbUri);
        console.log('Conexión exitosa a la base de datos');
    }catch (err){
        console.log(err, 'Conexion fallida a la base de datos');
    }
};
