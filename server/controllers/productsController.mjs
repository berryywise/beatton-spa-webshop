import { Product } from "../models/productsModel.mjs";

//Get all products - change imgURL link to dynamic host url.

export const getAllProducts = async (req, res) => {
  try {
    const { rows: products } = await Product.getAllProducts();

    if (!products || products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }

    const hostUrl = `${req.protocol}://${req.get("host")}`;

    const updatedProducts = products.map((product) => ({
      ...product,
      imgurl: product.imgurl ? hostUrl + product.imgurl : "null",
    }));

    res.json(updatedProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

// Get product by ID.

export const getProductById = async (req, res) => {
  try {

    const productId = req.params.id;

    const { rows: product } = await Product.getProductbyId(productId);

    if(!product) {
      return res.status(404).json({ error: "Product not found" })
    }

    const hostUrl = `${req.protocol}://${req.get("host")}`;
    
    product[0].imgurl = hostUrl + product[0].imgurl;

    res.json(product)

  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product" })
  }
}
