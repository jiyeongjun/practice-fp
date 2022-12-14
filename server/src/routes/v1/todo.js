import express from "express";
import { pick } from "fxjs";
import { QUERY, QUERY1, EQ, VALUES, SET } from "../../config/ConnectDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await QUERY`
        SELECT *
        FROM todo
        ORDER BY created_at DESC
    `;
  res.status(200).json(todos);
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  const createdTodo = await QUERY1`
    INSERT INTO todo
    ${VALUES({ title })}
    RETURNING *;
  `;
  res.status(201).json(createdTodo);
});

router.put("/:id", async (req, res) => {
  const title = req.body;
  const { id } = req.params;
  const updatedTodo = await QUERY1`
    UPDATE todo
    ${SET(pick(["title", "is_completed"], title))}
    WHERE ${EQ({ id })}
    RETURNING *;
  `;
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo = await QUERY1`
      UPDATE todo
      ${SET({ deleted_at: new Date() })}
      WHERE ${EQ({ id })}
      RETURNING *;
    `;
  res.status(200).json(deletedTodo);
});

export default router;
