import express from "express";
import ServerRenderer, { BasicPage } from "../../server/serverRenderer.js";

const router = express.Router();

router.get("/todo", async (req, res) => {
  res.send(await ServerRenderer(BasicPage({ path: req.path })));
});
export default router;
