import express from "express";
import { pick } from "fxjs";
import { QUERY, QUERY1, EQ, VALUES, SET } from "../../config/ConnectDB.js";

const router = express.Router();

const todoIdErrorHandler = (req, res, next) => {
  const { todo_id } = req.params;
  if (todo_id) next();
  else {
    const error = new Error("todo_id is required.");
    error.status = 400;
    next(error);
  }
};

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

router.put("/:todo_id", todoIdErrorHandler, async (req, res) => {
  const title = req.body;
  const { id } = req.params;
  const updatedTodo = await QUERY1`
    UPDATE todo
    ${SET(pick(["title", "is_completed"], title))}
    WHERE ${EQ({ id })}
    RETURNING *;
  `;
});

router.delete("/:todo_id", todoIdErrorHandler, async (req, res, next) => {
  const { todo_id } = req.params;

  const deletedTodo = await QUERY1`
      DELETE FROM todo
      WHERE ${EQ({ todo_id })}
      RETURNING *;
    `;
  res.status(200).json(deletedTodo);
});

export default router;
