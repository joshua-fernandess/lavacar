import Cliente from '../models/clienteModel.js';

export const store = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const clientes = await Cliente.find().exec();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

