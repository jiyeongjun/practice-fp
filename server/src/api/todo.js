import axios from "axios";

const API_URL = "http://localhost:3000/api";
axios.defaults.baseURL = API_URL;

const readTodos = () => axios.get("/v1/todo").then(({ data }) => data);
const createTodo = (title) =>
  axios.post("/v1/todo", { title }).then(({ data }) => data);
const deleteTodo = (todo_id) =>
  axios.delete(`/v1/todo/${todo_id}`).then(({ data }) => data);
const updateTodo = ({ todo_id, title, is_completed }) =>
  axios.put(`/v1/todo/${todo_id}`, {
    todo_id,
    title,
    is_completed,
  })
  .then(({ data }) => data);

const updateIsCompleted = ({ todo_id, is_completed }) =>
  axios.get(`/v1/todo/${todo_id}/${is_completed}`).then(({ data }) => data);

export default {
  readTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  updateIsCompleted,
};
