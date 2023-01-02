import { add, curry, each, go, head, reduce } from 'fxjs';
import * as L from 'fxjs/Lazy';
import $el from "./serverFxdom/$el.js";
import $setText from "./serverFxdom/$setText.js";
import $html from "./serverFxdom/$html.js";

const htmlS = (strs, ...vals) =>
  go(
    L.zip(strs, L.map(sanitize, vals)),
    L.flat,
    L.filter(isNotUndefined),
    reduce(add),
  );

const sanitize = val => go(
  $el('div'),
  $setText(val),
  $html,
);
const isNotUndefined = a => a !== undefined;


export default htmlS;