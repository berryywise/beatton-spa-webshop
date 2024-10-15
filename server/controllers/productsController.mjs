import { Product } from "../models/productsModel.mjs";

// Get all products - change imgURL link to dynamic host url.

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

    if (!product) return res.status(404).json("Product not found");

    const hostUrl = `${req.protocol}://${req.get("host")}`;

    product[0].imgurl = hostUrl + product[0].imgurl;

    res.json(product);
  } catch (error) {
    res.status(500).json("Failed to retrieve product");
  }
};

// Create Product.

export const createProduct = async (req, res) => {
  try {

    const { name, description, imgurl, price, in_stock } = req.body;

    const result = await Product.createProduct(
      name,
      description,
      imgurl,
      price,
      in_stock
    );

    res.json(`Product created successfully!`);
  } catch (error) {
    res.status(500).json("Failed to create product");
  }
};

export const updateProduct = async (req, res) => {
  try {

    const { name, description, imgurl, price, in_stock } = req.body;
    const id  = req.params.id;

    if(!id) return res.status(400).json("Product ID is invalid!")

    const result = await Product.updateProduct(
      name,
      description,
      imgurl,
      price,
      in_stock,
      id
    );

    if(result.rowCount === 0) return res.status(404).json("Product not found")

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json("Failed to update product");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if(!id) return res.status(400).json("Product ID is invalid!")

    const result = await Product.deleteProduct(id);

    if(result.rowCount === 0) return res.status(404).json("Product not found")

    res.json("Product deleted succesfully!")


    
  } catch (error) {
    res.status(500).json("Failed to delete product")
  }
}
