import { express } from "../modules/express";
import { Request, Response } from "express";

export const router = express.Router();

router.get('/:categoryId/products/:productId', (request : Request , response : Response) => {
	const {categoryId, productId} = request.params
	response.json({
		categoryId,
		productId
	})

});
