import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Mensaje = sequelize.define('mensaje',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    mensaje: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},
{
    timestamps: false
}
);