import { JSDOM } from "jsdom";

global.JSDOM = JSDOM;

const tmpl = `
    <!doctype html>
    <html lang="en">
    <head>
      <link href="bundle.css" rel="stylesheet" type="text/css" />
      <link rel="shortcut icon" href="#">
      <meta charset="UTF-8">
      <title>Server Side Rendering</title>
      <body>
      <div class="root"></div>
      <script type='module' src='bundle.js'></script>
      </body>
    </head>
    </html>`;
let dom = new JSDOM(tmpl);
let document = dom.window.document;
const initializeJsdom = () => {
  dom = new JSDOM(tmpl);
  document = dom.window.document;
};


export { dom, document, initializeJsdom };
