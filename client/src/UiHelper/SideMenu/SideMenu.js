import { go, html, tap } from "fxjs";
import { $appendTo, $delegate, $el, $qs, $remove } from "fxdom";
import MainMenu from "../../components/MainMenu/MainMenu";

const SideMenu = {};

SideMenu.append = (parent) =>
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
        </ul>
        <div class="sideMenu__backdrop"/>
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
  $remove($qs('.sideMenu'));
};

const selectSsrFn = () => {
  $remove($qs('.sideMenu'));
};

const selectSpaFn = () => {
  $remove($qs('.sideMenu'));
};
export default SideMenu;