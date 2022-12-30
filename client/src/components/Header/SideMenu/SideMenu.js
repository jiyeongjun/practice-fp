import { go, html } from "fxjs";
import { $appendTo, $delegate, $el } from "fxdom";
import event from "./eventCallback";


const SideMenu = {};

SideMenu.generateTo = (parent) =>
  go(
    SideMenu.tmpl,
    $el,
    $appendTo(parent),
    SideMenu.addEvent,
  );


SideMenu.tmpl = html`
    <div class="sideMenu">
        <ul class="sideMenu__content">
            <li class="sideMenu__content__item todo_side_menu sideMenu__active">Todo List</li>
            <li class="sideMenu__content__item ssr_side_menu">SSR Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
            <li class="sideMenu__content__item spa_side_menu">SPA Page</li>
        </ul>
    </div>
`;

SideMenu.addEvent = (el) =>
  go(
    el,
    $delegate("click", '.todo_side_menu', event.selectTodoFn),
    $delegate("click", '.ssr_side_menu', event.selectSsrFn),
    $delegate("click", '.spa_side_menu', event.selectSpaFn),
  );
;

export default SideMenu;