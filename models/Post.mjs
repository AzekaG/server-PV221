import mongoose from "mongoose";




//на сайте mongoosejs.com  B api есть гайд , и там можно найти методы , которые используются.
//Model.find({name: 'john', age: {$gte: 18}}).exec();
//model.find({name:/john/i} , 'name friends').exec();
const schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: [true, "content is requered"]},
});


//если задавать правильно мдели - то будет автоматически все привязываться
const Post = mongoose.model('Post', schema);

export default Post;