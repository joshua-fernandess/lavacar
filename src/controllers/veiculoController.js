import Veiculo from '../models/veiculoModel.js'; 

export const store = async (req, res) => { 
    try {
        const veiculo = await Veiculo.create(req.body);
        return res.status(201).json(veiculo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => { 
    try {
        const veiculos = await Veiculo.find().exec();
        return res.status(200).json(veiculos);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => { 
    try {
        const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(veiculo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => { 
    try {
        const veiculo = await Veiculo.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(veiculo);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};