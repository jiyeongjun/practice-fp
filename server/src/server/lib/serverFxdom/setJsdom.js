import { JSDOM } from "jsdom";
import { go, html, tap } from "fxjs";
import { $el, $qs, $replaceAll } from "./index.js";

export const tmpl = html`
    <!doctype html>
    <html lang="en">
    <head>
        <link href='/dist/bundle.css' rel="stylesheet" type="text/css"/>
        <link rel="shortcut icon" href="#">
        <meta charset="UTF-8">
        <title>Server Side Rendering</title>
        <script defer type='module' src='/dist/bundle.js'></script>
    <body>
    <div class="root"></div>
    </body>
    </head>
    </html>`;


export const dom = new JSDOM(tmpl);
export const document = dom.window.document;

const pureBodyTmpl = `
    <div class="root"></div>
`;
const initBody = () => go(
  pureBodyTmpl,
  $el,
  $replaceAll($qs(".root")),
);

export const initDom = () => go(
  dom.serialize(),
  tap(_ => initBody()),
);

