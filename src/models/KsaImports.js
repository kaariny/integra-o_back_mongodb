import mongoose from "mongoose";

const KsaImportsSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    produto:{type: String, required: true},
    data_nascimento:{type: Date},
    endereco:{type: String, required: true},
    telefone:{type: Number},
    CEP:{type: Number, required: true},
    email:{type: String, required: true}    
}, {versionKey:false}
);

const KsaImports = mongoose.model("KsaImports", KsaImportsSchema);

export default KsaImports;