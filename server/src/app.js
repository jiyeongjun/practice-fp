import express from "express";
import morgan from "morgan";
import cors from "cors";
import corsOption from "./config/cors.js";
import v1 from "./routes/v1/index.js";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOption));

app.use("/api/v1", v1);

app.listen(app.get("port"), () => {
  console.log(`server is running http://localhost:${process.env.PORT || 3000}`);
});
