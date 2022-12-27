import { delay, go, tap } from "fxjs";
import { $blur, $each, $focus, $hasClass, $qs, $toggleClass } from "fxdom";
import { sideMenuOnOff } from "../../UiHelper/SideMenu/eventCallback";
import closest from "fxdom/closest.js";
import findAll from "fxdom/findAll.js";

const hamburgerFn = ({ currentTarget }) => {
  sideMenuOnOff(currentTarget);
};

const searchFn = ({ currentTarget }) => {
  go(
    currentTarget,
    $toggleClass("open"),
  );

  go(
    currentTarget,
    closest("header"),
    findAll(".search, .search__body"),
    tap($each(el => $toggleClass("open", el))),
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