import { curry, go, tap } from "fxjs";
import $el from "./serverFxdom/$el.js";
import $appendTo from "./serverFxdom/$appendTo.js";
import { dom, initializeJsdom } from "../jsdom.js";
import $qs from "./serverFxdom/$qs.js";

const generate = curry((component, parent) => new Promise((resolve) =>
  go(
    component.getData(),
    component.tmpl,
    $el,
    $appendTo(parent),
    resolve,
  )));

export default generate;