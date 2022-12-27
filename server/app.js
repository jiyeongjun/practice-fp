import express from "express";
import morgan from "morgan";
import cors from "cors";
import corsOption from "./src/config/cors.js";
import v1 from "./src/routes/v1/index.js";
import { html } from "fxjs";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1", v1);
app.use("/src", express.static("./src"));

app.get("/", (req, res) => {
  res.send(`wow`);
});


app.listen(app.get("port"), () => {
  console.log(`server is running http://localhost:${process.env.PORT || 3000}`);
});
