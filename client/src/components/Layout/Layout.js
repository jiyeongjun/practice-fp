import { go } from "fxjs";
import { $appendTo, $el } from 'fxdom';
import Todo from "../Todo/Todo";
import MainMenu from "../MainMenu/MainMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { htmlC } from "../../lib/root";

const Layout = {};

Layout.append = (parent) => go(
  Layout.tmpl.gen,
  $el,
  $appendTo(parent),
);

Layout.tmpl = htmlC`
    <div class="layout">
        <header class="layout__header">${Header}</header>
        <div class="layout__menu">${MainMenu}</div>
        <main class="layout__main">${Todo}</main>
        <footer class="layout__footer">${Footer}</footer>
    </div>
`;

export default Layout;
