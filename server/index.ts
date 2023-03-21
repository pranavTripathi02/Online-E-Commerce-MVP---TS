require('dotenv').config();
require('express-async-errors');

const cors = require("cors");

const express = require('express');
const app = express();
app.use(express.json());

app.use(cors());

const productRouter = require('./routes/productRouter');
app.use('/api/v1/products', productRouter);

import connectDB from './connectDB';
const port = 8080 || process.env.PORT;
const url: string = process.env.MONGO_URI || '';
const start = (): void => {
  //   function():void{
  try {
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
    connectDB(url);
  } catch {
    console.error('Problem starting');
  }
};
start();
