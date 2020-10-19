import express from 'express';
import './database/connection';
import routes from './routes';



//MVC
//Model
//Views
//Controller


const app = express();

app.use(express.json());
app.use(routes);

//Rota = conjunto
//Recurso = usuário

//Método HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar uma informação (Lista, item)
//POST = Criando uma informação (Lista, item)
//PUT = Editando uma informação (Lista, item)
//DELETE = Deletando uma informação (Lista, item)

//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users/1



app.listen(3333);
