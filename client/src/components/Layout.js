import { html, go, tap } from "fxjs";
import { $appendTo, $el, $qs } from 'fxdom';

const Layout = {};

Layout.append = (parent) =>
  go(
    Layout.tmpl,
    $el,
    $appendTo(parent),
    _ => $qs(".layout__main"),
  );


Layout.tmpl = html`
    <div class='layout'>
        <header class="layout__header">header</header>
        <div class="layout__menu">menu</div>
        <main class="layout__main">main</main>
        <footer class="layout__footer">footer</footer>
    </div>
`;

export default Layout;