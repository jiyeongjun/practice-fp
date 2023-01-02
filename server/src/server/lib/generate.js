import { curry, go, tap } from "fxjs";
import $el from "./serverFxdom/$el.js";
import $appendTo from "./serverFxdom/$appendTo.js";
import { dom, initializeJsdom } from "../jsdom.js";
import $qs from "./serverFxdom/$qs.js";

const generate = curry(async (component, el) => {
  const data = component.getData && await component.getData();
  data && go(
    data,
    component.tmpl,
    $el,
    $appendTo(el),
  );

  !data && go(
    component.tmpl,
    $el,
    $appendTo(el),
    console.log,
  );
});

export default generate;