import { go, tap } from "fxjs";
import { $appendTo, $el, $remove } from "fxdom";

export const Suspense = (f, fallback, parent) =>
  go(
    fallback,
    $el,
    $appendTo(parent),
    tap(async _ => await f),
    $remove,
    _ => parent,
  );

export default Suspense;