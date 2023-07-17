import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import TraderRoutes from "../routes/trader.routes.js";

const conexionDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `Conectandose a mongodb en el server: ${connectionDB.connection.host} - En el puerto ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
} 

class Server {

    constructor() {
        this.app = express();
        this.app.use(express.json());

        this.port = process.env.PORT;
        this.apiRuta = "/api/tradingland"

        // conexion
        conexionDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiRuta, TraderRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Se esta corriendo en ${this.port}`);
        })
    }
}

export default Server;