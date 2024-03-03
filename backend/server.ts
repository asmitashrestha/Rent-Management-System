import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server Started In Port: ${process.env.PORT}`);
});
