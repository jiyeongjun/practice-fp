import { pipe, tap } from "fxjs";
import Todo from "./components/Todo/Todo";

const todo = () => Todo.append("body");

todo();
