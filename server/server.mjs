import express from "express";
import {router as testRouter} from "./routes/testRoutes.mjs";

const port = process.env.PORT || 3000;


const app = express();

app.use(express.json())

app.use("/test", testRouter)

app.get("/", (req, res) => {
    res.json ({msg : "Server is running."})
})

app.use((req, res, next) => {
    res.status(500).json({msg: "Error - endpoint not found."})
})


app.listen(port, () => console.log(`Server is running on port ${port}.`))