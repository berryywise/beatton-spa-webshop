import { Product } from "../models/productsModel.mjs";

//Get all products - change imgURL link to dynamic host url.

export const getProducts = async (req, res) => {
  try {
    const { rows: products } = await Product.findAll();

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
