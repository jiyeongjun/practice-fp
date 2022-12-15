import { go, tap } from "fxjs";
import {
  $el,
  $prependTo,
  $qs,
  $setVal,
  $closest,
  $remove,
} from "fxdom";
import todoApi from "../../api/todo";
import Todo from "./Todo";
import UiHelper from "../../UiHelper";

// Create
const addFn = async () =>
  !$qs("#new-todo").value
    ? await UiHelper.alert("할 일을 입력해주세요!") // 작성글 없는 경우 안내창을 띄워준다.¡
    : UiHelper.Loading(
      // 작성글 있는 경우
      go(
        $qs("#new-todo").value, // 작성글을
        todoApi.createTodo, // 서버에 보내주고
        Todo.itemTmpl, // 하나의 할 일 템플릿으로 만들고
        $el, // element로 만들어서
        $prependTo($qs(".todo-list")), // 투두리스트의 맨 위에 붙여 준다.
        tap((_) => $setVal("", $qs("#new-todo"))) // 입력창을 비워준다.
      )
    );

// Delete
const deleteFn = async ({ currentTarget }) => {
  await UiHelper.confirm("정말 삭제하시겠습니까?") &&
  UiHelper.Loading(
    go(
      currentTarget,
      $closest(".todo-item"),
      tap(({ dataset }) => todoApi.deleteTodo(parseInt(dataset.todoId))),
      $remove
    ));
};


export default {
  addFn,
  deleteFn,
};
