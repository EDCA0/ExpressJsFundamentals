import { express } from "../modules/express";

const app = express();

const port : number = 3000;

app.get('/inicio', (request : any , response : any ) => {
	response.send('Hola este es el inicio del servidor');
});


app.get('/nueva-ruta', (request : any , response : any ) => {
	response.send('Hola soy una nueva ruta');
});

app.get('/categorias', (request : any , response : any) => {
	response.json({
		deportes : [
			"voleibol",
			"Basketball",
			"Futbol",
			"Tenis",
		],
		electrodomesticos : [
			"relojes de pulso",
			"relojes digitales",
			"medidores de pulso de pecho"
		]
	})
});

app.get('/products', (request : any , response : any ) => {
	response.json({
		name : 'Product',
		price : 1000
	});
});


app.listen(port, () => {
	console.log('Mi port ', port)
});
