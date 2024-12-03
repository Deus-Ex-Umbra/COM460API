import express from 'express';
import * as mensajeController from '../controllers/mensaje.controller.js';

const router = express.Router();

router.post('/', mensajeController.createMensaje);
router.get('/', mensajeController.getMensajes);
router.get('/:id', mensajeController.getMensaje);
router.post('/fecha', mensajeController.getMensajeByFecha);

export default router;