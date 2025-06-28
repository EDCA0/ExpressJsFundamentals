import { express } from "../modules/express";
import { Request, Response } from "express";

export const router = express.Router();

router.get('/', (request : Request , response : Response ) => {
	response.send('Hola este es el inicio del servidor');
});
