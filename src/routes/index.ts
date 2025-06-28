const { router: inicioRouter } = require('./inicioRouter');
const { router: productsRouter } = require('./productsRouter');
const { router: usersRouter } = require('./usersRouter');
const { router: categoriesRouter } = require('./categoriesRouter');

export function routerApi(app : any) {
	app.use('/api/products', 		productsRouter)
	app.use('/api/categories', 	categoriesRouter)
	app.use('/api/users', 			usersRouter)
	app.use('/api/inicio', 			inicioRouter)
}
