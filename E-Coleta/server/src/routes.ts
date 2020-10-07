import express from "express";
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';
import multer from 'multer'
import multerConfig from './config/multer'

// CLASS NAMES:

// index (listagem)
// show (mostrar um único registro)
// create/store (criar um registro)
// update (atualizar um registro)
// delete/destroy (apagar um registro)
 
const routes = express.Router();


const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get("/items", itemsController.index);

routes.post("/points", upload.single('image') ,pointsController.create);
routes.get("/points", pointsController.index)

routes.get("/points/:id", pointsController.show);

export default routes;

//Service Pattern
//Repository Pattern / Data Pattern