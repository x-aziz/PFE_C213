import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// function that add products
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    // Upload with retry logic
const uploadWithRetry = async (filePath, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        resource_type: "image",
        timeout: 120000,
      });
      return result.secure_url;
    } catch (error) {
      console.log(`Upload attempt ${i + 1} failed, retrying...`);
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds
    }
  }
};

let imagesUrl = await Promise.all(
  images.map(async (item) => {
    return await uploadWithRetry(item.path);
  })
);
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// function that list all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// function that remove a product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// function that get single product by id
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
export { addProduct, listProducts, removeProduct, singleProduct };
    