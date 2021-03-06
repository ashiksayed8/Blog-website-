//user,title,bio,profilesPics,link: {fb,twi},posts,bookmarks

const {Schema,model} = require('mongoose')
const User = require('./User')
const Post = require('./Post')

const profileSchema = new Schema ({
    user: {
        type: schema.Types.ObjectId,
        ref: User,
        required: true
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePic: String,
    links: {
        website: String,
        facebook: String,
        twitter:String,
        github: String
    },
    posts: [
        {
            type: schema.Types.ObjectId,
            ref: Post
        }
    ],

    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: Post
        }
    ]
},{timestamps: tue})


const Profile = model('Profile',profileSchema)
module.exports = Profile