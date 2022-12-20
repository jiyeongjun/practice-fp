import { go, tap } from "fxjs";
import { $hasClass, $qs, $toggleClass } from "fxdom";

const selectTodoFn = ({ currentTarget }) => {
  go(
    currentTarget,
    changeMenu,
  );

};

const selectAjaxFn = ({ currentTarget }) => {
  go(
    currentTarget,
    changeMenu,
  );
};

const selectSsrFn = ({ currentTarget }) => {
  go(
    currentTarget,
    changeMenu,
  );
};

const selectSpaFn = ({ currentTarget }) => {
  go(
    currentTarget,
    changeMenu,
  );
};

const changeMenu = (el) =>
  go(
    $qs('.mainMenu__active'),
    tap($toggleClass('mainMenu__active')),
    _ => el,
    tap($toggleClass('mainMenu__active')),
  );

export default {
  selectTodoFn,
  selectAjaxFn,
  selectSpaFn,
  selectSsrFn,
};