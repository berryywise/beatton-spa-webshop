import { findAll } from "../models/productsModel.mjs"

export const getProducts = async (req, res) => {
  const { rows } = await findAll()

  console.log("Found products: ", rows)


  return res.status(200).json({ rows });
};
