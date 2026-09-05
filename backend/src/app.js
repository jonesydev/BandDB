import express from "express";
import cors from "cors";
import artistRoutes from "./artists/artists.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/artists', artistRoutes);

export default app;
