import { express } from "../modules/express";

const app = express();

const port : number = 3500;

app.get('/', (request : any , response : any ) => {
	response.send('Hola mi server en express');
})

app.listen(port, () => {
	console.log('Mi port ', port)
});
