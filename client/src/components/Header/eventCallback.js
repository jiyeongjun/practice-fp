import { delay, go, tap } from "fxjs";
import { $blur, $closest, $each, $findAll, $focus, $hasClass, $qs, $toggleClass } from "fxdom";
import { sideMenuOnOff } from "./SideMenu/eventCallback";
import switchClass from "../../lib/switchClass";

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
    $closest("header"),
    $findAll(".search, .search__body"),
    tap($each(switchClass("open", "close"))),
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