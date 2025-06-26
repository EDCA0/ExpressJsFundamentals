import { express } from "../modules/express";
import  {Request, Response} from 'express'
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

								// response.json({
								// 	deportes : [
								// 		"voleibol",
								// 		"Basketball",
								// 		"Futbol",
								// 		"Tenis",
								// 	],
								// 	electrodomesticos : [
								// 		"relojes de pulso",
								// 		"relojes digitales",
								// 		"medidores de pulso de pecho"
								// 	]
								// })
});

app.get('/products', (request : Request , response : Response ) => {
	response.json([
		{
			name : 'Product 1',
			price : 1000
		},
		{
			name : 'Product 2',
			price : 2000
		}
	]);
});

app.get('/products/:id', (request : Request, response : Response) => {
	const { id } = request.params

	response.json({
		id,
		name : 'Product 2',
		price : 2000
	});
})


app.listen(port, () => {
	console.log('Mi port ', port)
});
