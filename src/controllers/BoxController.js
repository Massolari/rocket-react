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

    async show(req, res) {
        const boxId = req.params.id;
        if (!boxId) {
            return res.json({
                type: 'error',
                message: 'Não foi possível identificar o box solicitado'
            });
        }
        const box = await Box.findById(boxId).populate({
            path: 'files',
            options: {
                sort: { createdAt: -1 }
            }
        });

        return res.json(box);
    }
}

module.exports = new BoxController();
