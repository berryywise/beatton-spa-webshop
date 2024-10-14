import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import { router as productsRouter } from "./routes/productsRoute.mjs";

const port = process.env.PORT || 3000;

const app = express();

// Rate limiter of 100 requests every 5 min on all routes

const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
});

app.use(rateLimiter);

// Enable use of json formatting and serving public images.
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use("/public", express.static("public"));

// Routes respond.

app.use("/api/v1", productsRouter);

// Main url respond.

app.get("/", (req, res) => {
  res.json({ msg: "Server is running." });
});

// Catch invalid URL endpoints.

app.use((req, res, next) => {
  res.status(500).json({ msg: "Error - endpoint not found." });
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
