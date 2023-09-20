import express from "express";
import cors from "cors";
import path from "path";
import "dotenv/config";
const __dirname = path.resolve();

import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);




import postRouter from "./routes/post.mjs";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", postRouter);

app.use(express.static(path.join(__dirname, "web/build")));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
