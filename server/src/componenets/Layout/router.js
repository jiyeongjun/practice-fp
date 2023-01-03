import Todo from "../Todo/Todo.js";
import { go, tap } from "fxjs";

const pathObj = {
  "/": () => go(
    Todo.getData(),
    tap(el => console.log(el, "결과11111111111111111")),
    Todo.baseTmpl,
  ),
};
export const Router = (path) => {
  console.log(pathObj[path](), "결과결과결과");
  // pathObj[path]() ?? "";
};

