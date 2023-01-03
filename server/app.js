import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "./webpack.config.js";
import morgan from "morgan";
import cors from "cors";
import v1 from "./src/routes/v1/index.js";
import ssr from './src/routes/ssr/index.js';
import ServerRenderer, { TodoPage } from "./src/server/serverRenderer.js";

const app = express();
const compiler = webpack(config);

app.use('./src', express.static('./src'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1", v1);
app.use("/ssr", ssr);

app.use("/src", express.static("./src"));

app.get("/", async (req, res) => {
  res.send(await ServerRenderer(TodoPage));
});


app.listen(app.get("port"), () => {
  console.log(`server is running http://localhost:${process.env.PORT || 3000}`);
});

