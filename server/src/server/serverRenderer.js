import Todo from "../componenets/Todo/Todo.js";
import generate from "./lib/generate.js";
import { go, tap } from "fxjs";
import { initDom } from "./lib/serverFxdom/setJsdom.js";
import { $appendTo, $el, $qs } from "./lib/serverFxdom/index.js";
import Layout from "../componenets/Layout/Layout.js";
import { Router } from "../componenets/Layout/Router.js";

const serverRenderer = async (render) => {
  await render();
  return initDom();
};


export const BasicPage = ({ path }) => () => go(
  Layout,
  $el,
  $appendTo($qs(".root")),
  tap(_ => Router(path)),
);

export const renderTodo = () => go(
  $qs(".root"),
  generate(Todo),
);


export default serverRenderer;