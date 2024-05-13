import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "../routes/routes";
dotenv.config();
const server = express();
server.use(cors());
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server listening AT ${PORT} `);
});
server.use("/", router);
