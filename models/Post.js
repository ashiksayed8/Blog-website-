//title,body,author, tags, thumbanil, readTime, likes, dislikes, comments

const {model, Schema}  = require('mongoose')
const User = require('./User')
const Comment = require('./Comment')


const postSchema = new Schema({
    title: {
        type:String,
        required: true,
        trim: true,
        maxlength: 100
    },
    body: {
        type:String,
        required: true,
    },
    auther: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    tags: {
        type:[String],
        required: true
    },
    thumbnail: String,
    readTime: String,
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: User
        }],
    dislikes: [{
            type: Schema.Types.ObjectId,
            ref: User
    }],
    comment:[
        {
            type: Schema.Types.ObjectId,
            ref:Comment
        }
    ]
},{
    timestamps: true,
})


const Post = model('Post', postSchema)
module.exports = Post




