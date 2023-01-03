import { Router } from "./router.js";
import { go, tap } from "fxjs";
import $qs from "../../server/lib/serverFxdom/$qs.js";
import $appendTo from "../../server/lib/serverFxdom/$appendTo.js";
import $el from "../../server/lib/serverFxdom/$el.js";

export const BasicPage = ({ path }) => go(
  path,
  Layout,
  $el,
  $appendTo($qs(".root")),
);

const Layout = (path) => `
    <div class="layout">
        <header class="layout__header">헤더</header>
        <div class="layout__menu">메뉴</div>
        <main class="layout__main">${Router(path)}</main>
        <footer class="layout__footer">푸터</footer>
    </div>
`;

