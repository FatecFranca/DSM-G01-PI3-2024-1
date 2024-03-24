import mongoose from 'mongoose'
import Usuario from './Usuario'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    nome: { type: String, required: true},
    usuario_id: { type: Usuario, required: true},
    data: { type: Date, required: true},
    descricao: { type: String, required: true},
    midia: { type: String, required: false},
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Post',esquema, 'posts')