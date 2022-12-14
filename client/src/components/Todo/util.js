import { go, pipe, tap } from "fxjs";
import { $el, $find, $on, $prependTo, $qs, $setVal } from "fxdom";
import UIhelper from "../UIhelper";
import todoApi from "../../api/todo";
import Todo from "./Todo";

const addTodoCallbackFn = (e) => {
  e.preventDefault();
  const todo = $qs("#new-todo").value;
  if (!todo) {
    alert("할 일을 입력해주세요!");
    return;
  }

  UIhelper.Loading(
    go(
      todo,
      todoApi.createTodo,
      Todo.item,
      $el,
      $prependTo($qs(".todo-list")),
      $qs("#new-task"),
      tap(() => $setVal("", $qs("#new-task")))
    )
  );
};

const addTodoHandler = pipe(
  $find(".todo-form"),
  $on("click", addTodoCallbackFn)
);

export default {
  addTodoHandler,
};
