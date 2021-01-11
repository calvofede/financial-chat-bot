const BotService = require('./BotService');

const getCommand = async(req, res, next) => {
    try {
        //TODO validar command
        // string substring (=)
        const response = await BotService.processCommand(req.query.stockCode);
        res.send(response);
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    getCommand
}