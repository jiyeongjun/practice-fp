import { tap, go } from "fxjs";
import { $el, $prependTo, $remove } from "fxdom";


export const Suspense = (f, fallback, parent) =>
  go(
    fallback,
    $el,
    $prependTo(parent),
    tap(async _ => await f),
    $remove,
    _ => parent,
  );

export default Suspense;