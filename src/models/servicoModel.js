import { Schema, model } from 'mongoose'; 

const servicoSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    veiculo: {
        type: Schema.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
});


export default model('Servico', servicoSchema);