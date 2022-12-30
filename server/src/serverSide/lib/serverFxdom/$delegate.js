import { defaults, each, filterL, go, tap } from "fxjs";
import $contains from "./$contains.js";
import $findAll from "./$findAll.js";

const $delegate = (event, sel, f) => tap((el) =>
  el.addEventListener(event, (e) =>
    go(
      el,
      $findAll(sel),
      filterL($contains(e.target)),
      each((currentTarget) =>
        f(
          defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e),
        ),
      ),
    ),
  ),
);

export default $delegate;