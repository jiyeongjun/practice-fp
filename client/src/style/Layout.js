import { html, go, tap } from "fxjs";
import { $appendTo, $el, $qs } from 'fxdom';

const Layout = {};

Layout.append = (parent) =>
  go(
    Layout.tmpl,
    $el,
    $appendTo(parent),
    _ => ({
      header: $qs(".layout__header"),
      mainMenu: $qs(".layout__menu"),
      main: $qs(".layout__main"),
      footer: $qs('.layout__footer'),
    }),
  );


Layout.tmpl = html`
    <div class='layout'>
        <header class="layout__header">header</header>
        <div class="layout__menu"></div>
        <main class="layout__main"></main>
        <footer class="layout__footer">footer</footer>
    </div>
`;

export default Layout;