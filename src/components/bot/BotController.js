const BotService = require('./BotService');

const getCommand = async(req, res, next) => {
    try {
        const response = await BotService.processCommand(req.params.stock);

        if (!response) {
            res.status(404).send({ error: "Empty data. Not valid request" });
        } else {
            res.json({commandResponse: response});
        }
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    getCommand
}