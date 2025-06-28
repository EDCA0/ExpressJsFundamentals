import { express } from "./modules/express";
import { routerApi } from "./routes";


const app = express();
const port : number = 3000;

app.listen(port, () => {
	console.log('Mi port ', port)
});

routerApi(app);
