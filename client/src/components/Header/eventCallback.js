import { delay, go, tap } from "fxjs";
import { $blur, $find, $focus, $hasClass, $qs, $toggleClass } from "fxdom";


const hamburgerFn = ({ currentTarget }) => {
  go(
    currentTarget,
    tap(
      $toggleClass("open"),
      _ => $toggleClass("open", $qs(".sideMenu")),
      _ => $toggleClass("open", $qs(".header")),
      _ => $toggleClass("open", $qs(".header__body__search_icon")),
      _ => $toggleClass("open", $qs(".sideMenu__content")),
    ),
  );
};

const searchFn = ({ currentTarget }) => {
  go(
    currentTarget,
    tap(
      $toggleClass("open"),
      _ => $toggleClass("open", $qs(".search")),
      _ => $toggleClass("open", $qs(".search__body")),
    ),
  );

  $hasClass("open", currentTarget) ?
    go(
      $qs(".search_input"),
      delay(500),
      $focus,
    ) :
    go(
      $qs(".search_input"),
      $blur,
    );
};

export default {
  hamburgerFn,
  searchFn,
};