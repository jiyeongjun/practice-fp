import jsdom from "jsdom";
import { go, html, tap } from "fxjs";
import { $el, $qs, $replaceAll } from "./src/server/lib/serverFxdom/index.js";

const { JSDOM } = jsdom;

export const tmpl = html` <!DOCTYPE html>
  <html lang="en">
    <head>
      <link href="/dist/bundle.css" rel="stylesheet" type="text/css" />
      <link rel="shortcut icon" href="#" />
      <meta charset="UTF-8" />
      <title>Server Side Rendering</title>
      <script defer type="module" src="/dist/bundle.js"></script>
      <body>
        <div class="root"></div>
      </body>
    </head>
  </html>`;

export const dom = new JSDOM(tmpl);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

const pureBodyTmpl = `
    <div class="root"></div>
`;
const initBody = () => go(pureBodyTmpl, $el, $replaceAll($qs(".root")));

export const initDom = () =>
  go(
    dom.serialize(),
    tap((_) => initBody()),
  );
export const fxdom = await import("fxdom");
