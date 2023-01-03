import { delay, go, tap } from "fxjs";
import { $qs, $toggleClass } from "fxdom";

const selectTodoFn = ({ currentTarget }) => {
  console.log(currentTarget);
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

const selectSsrFn = ({ currentTarget }) => {
  go(
    currentTarget,
    changeMenu,
    _ =>
      location.href = "http://localhost:3000/ssr/todo",
  );

  go(
    $qs(".todo_menu"),
    delay(500),
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
  selectSpaFn,
  selectSsrFn,
};