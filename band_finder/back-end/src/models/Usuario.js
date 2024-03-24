import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    nome: { type: String, required: true},
    cpf: { type: String, required: true, index:{unique: true} },
    data_nascimento: { type: String, required: true},
    logradouro: {type: String, required: true},
    num_casa: {type: String, required: true},
    bairro:{type: String, required: true},
    complemento: { type: String, required: false},
    municipio: {type: String, required: true},
    uf: {type: String, required: true},
    telefone: {type: String, required: true},
    email: { type: String, required:true, index:{unique:true}},
    habilidade: {type: String, required: true},
    bio: {type: String, required: true},
    influencia: {type: String, required: true},
    foto_user: {type: String, required: false},
    instagram: {type: String, required: false},
    youtube: {type: String, required: false},
    facebook: {type: String, required: false},
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Usuario',esquema, 'usuarios')