import Todo from "../componenets/Todo/Todo.js";
import generate from "./lib/generate.js";
import { go, tap } from "fxjs";
import { initDom } from "./lib/serverFxdom/setJsdom.js";
import { $qs } from "./lib/serverFxdom/index.js";
import Layout from "../componenets/Layout/Layout.js";
import { MainRouter } from "../componenets/Layout/MainRouter.js";

/**
 * 응답할 최종 탬플릿함수를 실행한 후 jsdom을 초기화 하는 함수
 */
const serverRenderer = (render) => go(
  render(),
  _ => initDom(),
);

// 이곳에 최종 렌더링할 함수들을 정의한다.
export const BasicPage = ({ path }) => () => go(
  $qs(".root"),
  generate(Layout),
  tap(_ => MainRouter(path)),
);

export const renderTodo = () => go(
  $qs(".root"),
  generate(Todo),
);

export default serverRenderer;