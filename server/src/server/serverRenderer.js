import $qs from "./lib/serverFxdom/$qs.js";
import { dom, initializeJsdom } from "./jsdom.js";
import Todo from "../componenets/Todo/Todo.js";
import generate from "./lib/generate.js";
import { go } from "fxjs";


const serverRenderer = async (render) => {
  await render();

  const tmpl = dom.serialize();
  initializeJsdom();
  return tmpl;
};


export const TodoPage = () => go(
  $qs(".root"),
  generate(Todo),
);


export default serverRenderer;