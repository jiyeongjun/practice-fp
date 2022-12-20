import { go, html } from "fxjs";
import { $appendTo, $delegate, $el } from "fxdom";
import util from "./util";

const MainMenu = {};

MainMenu.append = (parent) =>
  go(
    MainMenu.tmpl,
    $el,
    $appendTo(parent),
    MainMenu.addEvent,
  );

MainMenu.tmpl = html`
    <ul class="mainMenu">
        <li class="mainMenu__item todo_menu mainMenu__active">Todo List</li>
        <li class="mainMenu__item ajax_menu">Ajax Page</li>
        <li class="mainMenu__item ssr_menu">SSR Page</li>
        <li class="mainMenu__item spa_menu">SPA Page</li>
    </ul>>
`;

MainMenu.addEvent = (el) => {
  go(
    el,
    $delegate("click", '.todo_menu', util.selectTodoFn),
    $delegate("click", '.ajax_menu', util.selectAjaxFn),
    $delegate('click', '.ssr_menu', util.selectSsrFn),
    $delegate('click', '.spa_menu', util.selectSpaFn),
  );
};

export default MainMenu;