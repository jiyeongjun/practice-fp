import { go, tap } from "fxjs";
import { $qs, $toggleClass } from "fxdom";


const hamburgerFn = ({ currentTarget }) => {
  go(
    currentTarget,
    tap(
      $toggleClass("open"),
      _ => $toggleClass("open", $qs(".sideMenu")),
      _ => $toggleClass("open", $qs(".header")),
    ),
  );
};

export default {
  hamburgerFn,
};