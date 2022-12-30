import { curry, go, tap } from "fxjs";
import $el from "./serverFxdom/$el.js";
import $appendTo from "./serverFxdom/$appendTo.js";

const generate = curry((component, el) => go(
  component.tmpl,
  $el,
  $appendTo(el),
  tap(_ => component.add()),
));

export default generate;