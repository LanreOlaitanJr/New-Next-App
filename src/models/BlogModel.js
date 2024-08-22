import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    body: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }
},
{
    timestamp: true
}
)

export default mongoose.model("Blog", BlogSchema);