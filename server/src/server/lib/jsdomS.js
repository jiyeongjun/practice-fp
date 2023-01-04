import { add, go, isUndefined, reduce } from 'fxjs';
import * as L from 'fxjs/Lazy';
import { $el, $html, $setText } from "./serverFxdom/index.js";


const jsdomS = (strs, ...vals) =>
  go(
    L.zip(strs, L.map(sanitize, vals)),
    L.flat,
    L.reject(isUndefined),
    reduce(add),
  );

const sanitize = val => go(
  $el('div'),
  $setText(val),
  $html,
);


export default jsdomS;