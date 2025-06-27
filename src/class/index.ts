import { express } from "../modules/express";
import  {Request, Response} from 'express'
import { faker } from "../modules/faker";

const app = express();

const port : number = 3000;

app.get('/inicio', (request : Request , response : Response ) => {
	response.send('Hola este es el inicio del servidor');
});


app.get('/nueva-ruta', (request : Request , response : Response ) => {
	response.send('Hola soy una nueva ruta');
});

app.get('/categories/:categoryId/products/:productId', (request : Request , response : Response) => {
	const {categoryId, productId} = request.params
	response.json({
		categoryId,
		productId
	})

});

app.get('/products', (request : Request , response : Response ) => {
	const products = [];
	const limit : number = parseInt(request.query.size as string, 10) || 10;

	for (let index = 0; index < limit; index++) {
		products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()})
	}

	response.json(products);
});

app.get('/products/filter', (request : Request, response : Response) => {
	response.send('Yo soy un filter');
})


app.get('/products/:id', (request : Request, response : Response) => {
	const { id } = request.params

	response.json({
		id,
		name : 'Product 2',
		price : 2000
	});
})

app.get('/users', (request : Request, response : Response) => {
	const limit : number = parseInt(request.query.limit as string, 10);
	const offset : number = parseInt(request.query.offset as string, 10);
	if(limit && offset) {
		if(isNaN(limit) || isNaN(offset)) {
			return response.status(400).json( {
				error: 'Limit y offset deben ser numeros'
			});
		}
		if(limit >= 0 && offset >= 0){
			response.json({
				limit,
				offset
			});
		} else {
			return response.status(400).json( {
				error: 'Limit y offset deben ser mayores o iguales a 0'
			});
		}

	} else {
			response.send('No hay parametros');
		}
})


app.listen(port, () => {
	console.log('Mi port ', port)
});
