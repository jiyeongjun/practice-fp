import express from "express";
import ServerRenderer, { TodoPage } from "../../server/serverRenderer.js";
import { BasicPage } from "../../componenets/Layout/Layout.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await ServerRenderer(BasicPage({ path: req.path })));
});

export default router;