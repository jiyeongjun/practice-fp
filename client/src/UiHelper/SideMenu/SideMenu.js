import { go, html, tap } from "fxjs";
import { $appendTo, $delegate, $el, $qs, $remove, $toggleClass } from "fxdom";
import MainMenu from "../../components/MainMenu/MainMenu";

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
    $delegate("click", '.todo_side_menu', selectTodoFn),
    $delegate("click", '.ssr_side_menu', selectSsrFn),
    $delegate("click", '.spa_side_menu', selectSpaFn),
  );
;

const selectTodoFn = () => {
  $toggleClass("open", $qs(".hamburger"));
  $toggleClass("open", $qs(".sideMenu"));
  $toggleClass("open", $qs(".header"));
  $toggleClass("open", $qs(".header__body__search_icon"));
};

const selectSsrFn = () => {
  $toggleClass("open", $qs(".hamburger"));
  $toggleClass("open", $qs(".sideMenu"));
  $toggleClass("open", $qs(".header"));
  $toggleClass("open", $qs(".header__body__search_icon"));
};

const selectSpaFn = () => {
  $toggleClass("open", $qs(".hamburger"));
  $toggleClass("open", $qs(".sideMenu"));
  $toggleClass("open", $qs(".header"));
  $toggleClass("open", $qs(".header__body__search_icon"));
};
export default SideMenu;