import { httpStatusCode } from "../constants/httpsStatusCode.mjs";
import { Product } from "../models/productsModel.mjs";

// Get all products - change imgURL link to dynamic host url

export const getAllProducts = async (req, res) => {
  try {
    const { rows: products } = await Product.getAllProducts();

    if (!products || products.length === 0) {
      return res.status(httpStatusCode.NOT_FOUND).json({ error: "No products found" });
    }

    const hostUrl = `${req.protocol}://${req.get("host")}`;

    const updatedProducts = products.map((product) => ({
      ...product,
      imgurl: product.imgurl ? hostUrl + product.imgurl : "null",
    }));

    res.json(updatedProducts);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json({ error: "Failed to retrieve products" });
  }
};

// Get product by ID

export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const { rows: product } = await Product.getProductbyId(productId);

    if (!product) return res.status(httpStatusCode.NOT_FOUND).json("Product not found");

    const hostUrl = `${req.protocol}://${req.get("host")}`;

    product[0].imgurl = hostUrl + product[0].imgurl;

    res.json(product);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to retrieve product");
  }
};

// Create Product

export const createProduct = async (req, res) => {
  try {
    const { name, description, imgurl, price, in_stock } = req.body;

    await Product.createProduct(
      name,
      description,
      imgurl,
      price,
      in_stock
    );

    res.json(`Product created successfully!`);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to create product");
  }
};

// Update product - partial info possible

export const updateProduct = async (req, res) => {
  try {
    const { name, description, imgurl, price, in_stock } = req.body;

    const id = req.params.id;

    if (!id) return res.status(httpStatusCode.BAD_REQUEST).json("Product ID is invalid!");

    const result = await Product.updateProduct(
      name,
      description,
      imgurl,
      price,
      in_stock,
      id
    );

    if (result.rowCount === 0) return res.status(httpStatusCode.NOT_FOUND).json("Product not found");

    res.json(result.rows[0]);
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to update product");
  }
};

// Delete product

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) return res.status(httpStatusCode.BAD_REQUEST).json("Product ID is invalid!");

    const result = await Product.deleteProduct(id);

    if (result.rowCount === 0) return res.status(httpStatusCode.NOT_FOUND).json("Product not found");

    res.json("Product deleted succesfully!");
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_SERVER).json("Failed to delete product");
  }
};
