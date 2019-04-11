const File = require('../models/File');
const Box = require('../models/Box');

class FileController {
    async store(req, res) {
        const boxId = req.params.id;
        if (!boxId) {
            return res.json({
                type: 'error',
                message: 'Não foi possível identificar o box de destino'
            });
        }
        const box = await Box.findById(boxId);

        const { originalname, key } = req.file;
        const file = await File.create({
            title: originalname,
            path: key
        });
        box.files.push(file);
        await box.save();
        return res.json(file);
    }
}

module.exports = new FileController();
