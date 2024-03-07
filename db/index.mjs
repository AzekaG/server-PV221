//сдесь храним подключение к БД


import mongoose from "mongoose";
import mangoose from "mongoose";

//если не указываем БД , то образатсья будет к БД.Тест/ БД называется web221 , login Sergio pass 1111
mongoose.connect('mongodb+srv://Sergio:1111@cluster0.nrcdqv3.mongodb.net/web221?retryWrites=true&w=majority&appName=Cluster0');

export default mongoose.connection;