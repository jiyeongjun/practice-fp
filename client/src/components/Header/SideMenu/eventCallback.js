import { delay, go, range, tap } from "fxjs";
import { $closest, $each, $findAll, $qs, $setAttr, $toggleClass } from "fxdom";
import switchClass from "../../../lib/switchClass";

const selectTodoFn = ({ currentTarget }) => {
  go(
    currentTarget,
    sideMenuOnOff,
    delay(500),
  );
};

const selectSsrFn = ({ currentTarget }) => {
  sideMenuOnOff(currentTarget);
};

const selectSpaFn = ({ currentTarget }) => {
  sideMenuOnOff(currentTarget);
};

export const sideMenuOnOff = (el) =>
  go(
    el,
    $closest("header"),
    $findAll(".header, .hamburger, .sideMenu, " +
      ".sideMenu__content, .header__body__search_icon"),
    tap($each(switchClass("open", "close"))),
    _ => el,
  );


export default {
  selectSpaFn,
  selectSsrFn,
  selectTodoFn,
};