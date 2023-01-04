import { curry, go, has, ifElse, tap } from "fxjs";
import { $appendTo, $el } from "./serverFxdom/index.js";


const generate = curry((component, parent) =>
  go(
    component,
    ifElse(
      comp => has("getData", comp),
      _ => genHasDataComp(component, parent),
      _ => genComp(component, parent),
    ),
  ));

const genHasDataComp = curry((component, parent) => new Promise((resolve) =>
  go(
    component.getData(),
    component.tmpl,
    $el,
    $appendTo(parent),
    resolve,
  )));

const genComp = curry((component, parent) => new Promise((resolve) =>
  go(
    component.tmpl,
    $el,
    $appendTo(parent),
    resolve,
  )));


export default generate;