import { html } from "fxjs";

const MainMenu = {};

MainMenu.tmpl = html`
    <div class="mainMenu">
        <ul class="mainMenu__body">
            <li class="mainMenu__body__item todo_menu mainMenu__active">Todo List</li>
            <li class="mainMenu__body__item spa_menu">SPA Page</li>
            <li class="mainMenu__body__item ssr_menu">SSR Page</li>
            <li class="mainMenu__body__mobile">Mobile Ver. 햄버거메뉴 클릭</li>
        </ul>
    </div>
`;

export default MainMenu;