import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import artistRoutes from "./routes/artists.routes.js";

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/routes', artistRoutes);

export default app;
