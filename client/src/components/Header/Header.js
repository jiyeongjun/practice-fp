import { go, html } from "fxjs";
import { $appendTo, $delegate, $el } from "fxdom";
import UiHelper from "../../UiHelper";
import util from "./util";

const Header = {};

Header.append = (parent) =>
  go(
    Header.tmpl,
    $el,
    $appendTo(parent),
    Header.addEvent,
  );

Header.tmpl = html`
    <nav class="header">
        <ul class="header__body">
            <li class="header__body__hamburger_icon">${UiHelper.Hamburger}</li>
            <li class="header__body__title">Header-Component_CSR</li>
            <li class="header__body__title_m">CSR</li>
            <li class="header__body__search_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
                     viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </li>
        </ul>
    </nav>
`;

Header.addEvent = (el) =>
  go(
    el,
    $delegate("click", ".hamburger", util.hamburgerFn),
  );


export default Header;