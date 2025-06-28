import { express } from "../modules/express";
import { Request, Response} from "express";
import { faker } from "../modules/faker";

export const router = express.Router()

router.get('/', (request : Request , response : Response ) => {
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

router.get('/filter', (request : Request, response : Response) => {
	response.send('Yo soy un filter');
})


router.get('/:id', (request : Request, response : Response) => {
	const { id } = request.params

	response.json({
		id,
		name : 'Product 2',
		price : 2000
	});
})
