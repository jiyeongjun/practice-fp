import express from "express";
import pageRouter from "./pageRouter.js";

const router = express.Router();

router.use("/todo", pageRouter);

export default router;