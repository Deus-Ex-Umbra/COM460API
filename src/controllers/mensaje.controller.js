import * as mensajeService from '../services/mensaje.service.js';

export const createMensaje = async (req, res) => {
    try {
        const mensaje = req.body;
        const result = await mensajeService.createMensaje(mensaje);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getMensajes = async (req, res) => {
    try {
        const result = await mensajeService.getMensajes();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getMensaje = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await mensajeService.getMensaje(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getMensajeByFecha = async (req, res) => {
    try {
        const fecha = req.params.fecha;
        const result = await mensajeService.getMensajeByFecha(fecha);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};
