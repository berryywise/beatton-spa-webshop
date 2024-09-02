import express from "express";
import router from "./routes/routes.mjs";

const port = process.env.PORT || 3000;


const app = express();

app.use("/", router)

app.get("/", (req, res) => {
    res.json ("Server is running.")
})

app.use((req, res, next) => {
    res.status(404).json("404 error - endpoint not found.")
})


app.listen(port, () => console.log(`Server is running on port ${port}.`))