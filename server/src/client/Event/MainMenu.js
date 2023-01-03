const addEvent = (el) => {
  go(
    el,
    $delegate("click", '.todo_menu', event.selectTodoFn),
    $delegate('click', '.spa_menu', event.selectSpaFn),
    $delegate('click', '.ssr_menu', event.selectSsrFn),
  );
};