import express from "express";
import {router as productsRouter} from "./routes/productsRoute.mjs";

const port = process.env.PORT || 3000;


const app = express();

// Enable use of json formatting and serving public images.
app.use(express.json())
app.use("/public", express.static("public"))

app.use("/test", productsRouter)

app.get("/", (req, res) => {
    res.json ({msg : "Server is running."})
})

// Catch invalid URL endpoints

app.use((req, res, next) => {
    res.status(500).json({msg: "Error - endpoint not found."})
})


app.listen(port, () => console.log(`Server is running on port ${port}.`))