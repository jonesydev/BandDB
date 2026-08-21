import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
// import swaggerUi from "swagger-ui-express";
// import swaggerJSDoc from "swagger-jsdoc"

import artistRoutes from "./routes/artists.routes.js";

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Band Database API",
//       version: "1.0.0",
//       description: "API for managing a band database",
//     },
//     servers: [
//       {
//         url: `http://localhost:${port}`,
//       },
//     ],
//   },
//   apis: ["./src/routes/*.js"],
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));  

app.use(cors());
app.use(express.json());
app.use('/routes', artistRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
