import express from 'express';
import morgan from 'morgan';
import { sequelize } from './database/database.js';
import mensajeRouter from './routes/mensaje.route.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/mensajes', mensajeRouter);

const PORT = 3020;
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando' });
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
};

startServer();