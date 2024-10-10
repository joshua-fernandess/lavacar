import Servico from '../models/servicoModel.js';

export const store = async (req, res) => {
    try {
        const servico = await Servico.create(req.body);
        return res.status(201).json(servico);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const servicos = await Servico.find().exec();
        return res.status(200).json(servicos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const servico = await Servico.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(servico);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const servico = await Servico.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(servico);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
