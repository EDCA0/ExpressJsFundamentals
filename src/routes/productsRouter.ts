import  express, {Request, Response, Router} 					 from "../modules/express";
import { faker } 															 				 from "../modules/faker";

export const router  : Router = express.Router()

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

	if(id === "999") {
		response.status(404).json({
			message: 'not found'
		});
	} else {
			response.status(200).json({
				id,
				name : 'Product 2',
				price : 2000
			}
		)
	};
})

router.post('/', (request : Request, response : Response)  => {
	const body = request.body;

	response.status(201).json({
		message : 'created',
		data : body
	});
})

router.patch('/:id', (request : Request, response : Response)  => {
	const id : string | number = request.params.id
	const body = request.body;

	response.json({
		message : 'updated',
		data : body,
		id
	});
})

router.delete('/:id', (request : Request, response : Response)  => {
	const id : string | number = request.params.id
	const body = request.body;

	response.json({
		message : 'deleted',
		data : body,
		id
	});
})


