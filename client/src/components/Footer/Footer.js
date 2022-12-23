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
    <div class="footer">
        <div class="footer__body">Footer-Component-CSR</div>
    </div>
`;

export default Footer;