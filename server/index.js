import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* ROUTES */
app.use("/api/v1", routes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
