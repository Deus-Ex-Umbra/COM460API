import { Mensaje } from '../models/mensaje.js';

export const createMensaje = async (mensaje) => {
    try {
        return await Mensaje.create(mensaje);
    } catch (error) {
        return error;
    }
};

export const getMensajes = async () => {
    try {
        return await Mensaje.findAll();
    } catch (error) {
        return error;
    }
};

export const getMensaje = async (id) => {
    try {
        return await Mensaje.findByPk(id);
    } catch (error) {
        return error;
    }
};

//Obtener mensaje por fecha
export const getMensajeByFecha = async (fecha) => {
    try {
        return await Mensaje.findOne({ where: { fecha: fecha } });
    } catch (error) {
        return error;
    }
};