import mongoose from 'mongoose';

const connectDB = (url: string) => {
  console.log(url);
  mongoose
    .connect(url)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error(err));
};

export default connectDB;
