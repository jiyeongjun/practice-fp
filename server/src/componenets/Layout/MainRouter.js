import Todo from "../Todo/Todo.js";
import { go, tap } from "fxjs";
import { $qs } from "../../server/lib/serverFxdom/index.js";
import generate from "../../server/lib/generate.js";

const todo = () => go(
  $qs(".layout__main"),
  generate(Todo),
);

const pathObj = {
  "/todo": todo,
};
export const MainRouter = (path) =>
  pathObj[path]() ?? `<div>페이지가 존재하지 않습니다.</div>`;


