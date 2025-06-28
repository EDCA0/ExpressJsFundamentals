import  express, {Request, Response} 					 from "../modules/express";

export const router = express.Router()

router.get('/', (request : Request, response : Response) => {
	const limit  : number = parseInt(request.query.limit as string, 10);
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
