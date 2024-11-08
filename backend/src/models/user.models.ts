import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    name: {type:String, required:true},
    username: {type:String, required:true},
    password: {type:String, required:true},
    role: {type:String, default:"Administrador"},
    image: {type:String, default:"image_user"},
    create_at: {type:Date, default:Date.now()}
})

export default model('User', userSchema)