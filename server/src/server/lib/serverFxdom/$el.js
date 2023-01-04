import { document } from "./setJsdom.js";
import { head } from "fxjs";
import $els from "./$els.js";

const $el = (html) => {
  html = html.trim();
  return html[0] == "<" ? head($els(html)) : document.createElement(html);
};

export default $el;