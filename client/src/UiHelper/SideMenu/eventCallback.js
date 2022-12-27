import { go, tap } from "fxjs";
import { $closest, $each, $findAll, $qs, $setAttr, $toggleClass } from "fxdom";

const selectTodoFn = ({ currentTarget }) => {
  sideMenuOnOff(currentTarget);
};

const selectSsrFn = ({ currentTarget }) => {
  sideMenuOnOff(currentTarget);
};

const selectSpaFn = ({ currentTarget }) => {
  sideMenuOnOff(currentTarget);
};

export const sideMenuOnOff = (el) => {
  go(
    el,
    $closest("header"),
    $findAll(".header, .hamburger, .sideMenu, " +
      ".sideMenu__content, .header__body__search_icon"),
    tap($each(el => $toggleClass("open", el))),
  );
};

export default {
  selectSpaFn,
  selectSsrFn,
  selectTodoFn,
};