import mongoose from 'mongoose';

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connect('mongodb://localhost:27017/bookit', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}

export default dbConnect