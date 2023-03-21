import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category_1: {
    type: String,
    // required: true,
  },
  mrp: {
    type: String,
    required: false,
  },
  selling_price: {
    type: String,
    required: true,
  },
  product_rating: {
    type: Number,
    required: true,
  },
  image_links: {
    type: String,
    required: true,
  },
});

// const ProductSchema = new mongoose.Schema({
//   product_name: {
//     type: String,
//     required: true,
//   },
//   brand: {
//     type: String,
//     // required: true,
//   },
//   product_price: {
//     type: Number,
//     required: true,
//   },
//   product_rating: {
//     type: Number,
//     required: true,
//   },
//   product_img: {
//     type: Array,
//     required: true,
//   },
//   discounted_price: {
//     type: Number,
//   },
//   product_category: {
//     type: Array,
//     required: true,
//   },
// });

export default mongoose.model('Product', ProductSchema, 'productList');
