import mongoose from 'mongoose';

const connectDB = (url: string) => {
    mongoose
        .connect(url)
        .then(() => console.log('DB Connected'))
        .catch((err) => console.error(err));
};

export default connectDB;
