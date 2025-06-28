import  express, {Request, Response} 					 from "../modules/express";


export const router = express.Router();

router.get('/', (request : Request , response : Response ) => {
	response.send('Hola este es el inicio del servidor');
});
