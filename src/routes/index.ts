import  express, { Application, Router}  from 	"../modules/express";
import { router as inicioRouter }   	 	 from 	'./inicioRouter';
import { router as productsRouter } 	 	 from 	'./productsRouter';
import { router as usersRouter } 	   	 	 from 	'./usersRouter';
import { router as categoriesRouter }  	 from 	'./categoriesRouter';

export function routerApi(app : Application) {
	const router  : Router = express.Router();
	app.use('/api/v1', router);

	router.use('/products', 		productsRouter);
	router.use('/categories', 	categoriesRouter);
	router.use('/users', 				usersRouter);
	router.use('/inicio', 			inicioRouter);
}
