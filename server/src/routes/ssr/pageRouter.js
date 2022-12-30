import express from "express";
import { QUERY } from "../../config/ConnectDB.js";
import serverRenderer, { SamplePage } from "../../serverSide/serverRenderer.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("wow");
});


export default router;