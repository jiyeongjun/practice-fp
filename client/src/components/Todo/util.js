import { go, tap, match, each, map, filter } from "fxjs";
import {
  $el,
  $prependTo,
  $qs,
  $setVal,
  $closest,
  $remove, $children, $toggleClass, $findAll, $is, $find, $val, $hasClass, $replaceAll,
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
        console.log,
        tap((_) => $setVal("", $qs("#new-todo"))), // 입력창을 비워준다.
      ),
    );


// Delete
const deleteFn = async ({ currentTarget }) => {
  await UiHelper.confirm("정말 삭제하시겠습니까?") && // 실제 진행할 건지 물어보고
  UiHelper.Loading(
    go(
      currentTarget, // 현재 클릭한 요소가
      $closest(".todo-item"), // 포함된 아이템을 골라서
      tap(({ dataset }) => todoApi.deleteTodo(parseInt(dataset.todoId))),
      // 아이디를 넣어서 서버에 삭제 요청을 보내고
      $remove, // 해당 아이템을 삭제한다.
    ));
};

const editFn = ({ currentTarget }) => {
  $qs('.todo-message.hidden') && // 수정 중인 요소가 있을 경우만 실행하고,
  go(
    $qs('.todo-message.hidden'), // 수정 중인 요소의
    $closest('.todo-item'), // 아이템을 찾아서
    $children, // 자식 요소를 찾은 후
    filter(el => !$hasClass('todo-check', el)), // 체크 박스만 제외시키고
    tap(each($toggleClass('hidden'))), // 수정버튼을 누르기 전의 상태로 바꾼다.
  );

  go(
    currentTarget, // 현재 클릭한 요소가
    $closest('.todo-item'), // 포함된 아이템을 골라서
    $children, // 자식 요소를 찾은 후
    filter(el => !$hasClass('todo-check', el)), // 체크 박스만 제외시키고
    tap(each($toggleClass('hidden'))), // 수정을 위한 형태로 바꾼다.
  );
};

const saveFn = ({ currentTarget }) => {
  UiHelper.Loading(
    go(
      currentTarget,
      $closest('.todo-item'),
      $find('.edit-todo'),
      $val, // 현재 요소의 값을 찾아서
      title => ({
        todo_id: parseInt($closest('.todo-item', currentTarget).dataset.todoId),
        title,
        is_completed: $hasClass('todo-checked', $qs(".todo-item")),
      }), // update요청을 위한 객체로 만든 후
      todoApi.updateTodo, // 서버에 update요청을 하고
      Todo.itemTmpl, // 서버로부터 받은 업데이트 결과를
      $el, // element로 바꾸어 준 후
      tap($replaceAll($closest('.todo-item', currentTarget))),
      // 현재 요소를 업데이트 결과로 대체한다.
    ));
};

const toggleFn = ({ currentTarget }) => {
  go(
    currentTarget,
    tap(console.log),
    $toggleClass('todo-checked'),
  );
};


export default {
  addFn,
  deleteFn,
  editFn,
  saveFn,
  toggleFn,
};
