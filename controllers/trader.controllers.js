const Trader = require("../models/Trader.js");

const obtenerTrader = async (req, res) => {

    const trader = await Trader.find();

    res.json(trader);

}

const agregarTrader = async (req, res) => {
    const trader = new Trader(req.body)
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader);
    } catch (error) {
        console.log(error);
    }
}
