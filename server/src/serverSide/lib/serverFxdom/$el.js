import { head } from "fxjs";
import $els from "./$els.js";
import { document } from "../jsdom.js";

const $el = (html) => {
  html = html.trim();
  return html[0] == "<" ? head($els(html)) : document.createElement(html);
};

export default $el;