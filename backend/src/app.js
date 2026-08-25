import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import artistRoutes from "./artists/artists.routes.js";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/artists', artistRoutes);

export default app;
