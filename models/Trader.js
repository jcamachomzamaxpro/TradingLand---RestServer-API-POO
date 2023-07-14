const mongoose = require("mongoose");

const traderSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        edad: {
            type: Number,
            required: true,
            trim: true
        },
        nacionalidad: {
            type: String,
            required: true,
            trim: true
        },
        presupuesto: {
            type: Number,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Trader = mongoose.model("trader", traderSchema, "traders");

module.exports = Trader;