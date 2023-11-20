// controllers/mainController.js
const mainModel = require('../models/mainModel');

const mainController = {
    getIndex: (req, res) => {
        const message = mainModel.getMessage();
        res.render('index', { message });
    },
};

module.exports = mainController;