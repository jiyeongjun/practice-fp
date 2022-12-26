import { go, html } from "fxjs";
import { $appendTo, $delegate, $el } from "fxdom";
import event from "./eventCallback";

const MainMenu = {};

MainMenu.generateTo = (parent) =>
  go(
    MainMenu.tmpl,
    $el,
    $appendTo(parent),
    MainMenu.addEvent,
  );

MainMenu.tmpl = html`
    <div class="mainMenu">
        <ul class="mainMenu__body">
            <li class="mainMenu__body__item todo_menu mainMenu__active">Todo List</li>
            <li class="mainMenu__body__item ssr_menu">SSR Page</li>
            <li class="mainMenu__body__item spa_menu">SPA Page</li>
            <li class="mainMenu__body__mobile">Mobile Ver. 햄버거메뉴 클릭</li>
        </ul>
    </div>
`;

MainMenu.addEvent = (el) => {
  go(
    el,
    $delegate("click", '.todo_menu', event.selectTodoFn),
    $delegate('click', '.ssr_menu', event.selectSsrFn),
    $delegate('click', '.spa_menu', event.selectSpaFn),
  );
};

export default MainMenu;