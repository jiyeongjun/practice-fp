import { go, strMap, tap, map } from "fxjs";
import Loading from "./components/UIhelper/Loading";
import Todo from "./components/Todo/Todo";
import TodoApi from "./api/todo";
import dummyList from "./dummy";

const delay1000 = (a) =>
  new Promise((resolve) => setTimeout(() => resolve(a), 2000));

Loading(go(TodoApi.readTodos(), Todo.append("body"), Todo.addEvents));
