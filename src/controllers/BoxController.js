const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const title = req.body.title;
        if (!title) {
            return res.json({
                type: 'error',
                message: 'O campo título é obrigatório',
            });
        }
        const box = await Box.create({ title });
        return res.json(box);
    }
}

module.exports = new BoxController();
