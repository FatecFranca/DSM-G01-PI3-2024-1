import mongoose from 'mongoose'
import Usuario from './Usuario'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    nome: { type: String, required: true},
    usuario_id: { type: Usuario, required: true},
    descricao: { type: String, required: true},
    data: { type: Date, required: true},
    objetivo: { type: String, required: true},
    municipio: {type: String, required: true},
    uf: {type: String, required: true},
    estilo:{type: String, required: true},
    procura: { type: String, required: true},
    link: { type: String, required: false},
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Anuncio',esquema, 'anuncios')