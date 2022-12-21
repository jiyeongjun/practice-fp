import { go, html } from "fxjs";
import { $appendTo, $el } from "fxdom";

const Footer = {};

Footer.append = (parent) =>
  go(
    Footer.tmpl,
    $el,
    $appendTo(parent),
  );

Footer.tmpl = html`
    <footer class="footer">Footer-Component_CSR</footer>
`;

export default Footer;