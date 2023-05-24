import morgan from 'morgan';
import express from 'express'; 
import swaggerUi from 'swagger-ui-express'
import { bdConnection } from './config/db.js';
import { port } from "./config/index.js";
import routerApi from './routes.js';
import errorHandler from './api/users/middleware/errorHandler.js';
import { openApiSpecification } from './config/swagger.js';

const app = express();

app.use(express.json());

bdConnection();

app.use("/api", routerApi);

app.get('/', (request, response, error) => {
	response.send('status: ok')
})

app.use(errorHandler);

app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(openApiSpecification));

app.listen(port, (error) => {
	if (error) {
		console.log('Server Error: Failed');
		process.exit(1);
	}

	console.log(`Server listening in port ${port}`)
})

