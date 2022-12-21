import { go, tap } from "fxjs";
import { $hasClass, $qs, $remove, $toggleClass } from "fxdom";
import SideMenu from "../../UiHelper/SideMenu/SideMenu";
import sideMenu from "../../UiHelper/SideMenu/SideMenu";
import toggleClass from "fxdom/toggleClass.js";

const hamburgerFn = ({ currentTarget }) => {
  go(
    currentTarget,
    tap(
      $toggleClass("open"),
      _ => $toggleClass("sideMenu_show", $qs(".sideMenu")),
    )
  )
};

export default {
  hamburgerFn,
};