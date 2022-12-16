import { strMap, html, go, pipe, curry, tap, pick } from "fxjs";
import { $el, $qs, $appendTo } from "fxdom";
import util from "./util";
import TodoApi from "../../api/todo";
import Loading from "../../UiHelper/Loading";
import { $delegate } from "fxdom/es";

const Todo = {};

Todo.append = (parent) =>
  Loading(
    go(
      TodoApi.readTodos(), // 데이터를 가져와서
      Todo.baseTmpl, // base template을 생성하고
      $el, // htmlElement로 변환하고
      $appendTo($qs(parent)), // 원하는 element에 append하고
      Todo.addEvent, // event를 binding한다.
    ),
  );

// template
Todo.baseTmpl = (todoList) => html`
    <section class="todo">
        <h1>To-Do List</h1>

        <form class="todo-form">
            <label for="new-todo">New Task:</label>
            <input type="text" id="new-todo" placeholder="할 일 입력하기"/>
            <button type="button" class="button-add">Add</button>
        </form>
        <ul class="todo-list">
            ${strMap(Todo.itemTmpl, todoList)}
        </ul>
    </section>
`;

Todo.itemTmpl = (todo) => html`
    <li class="todo-item" data-todo-id=${todo.todo_id}>
        <span class="todo-check"></span>
        <label class="todo-message" for="todo${todo.todo_id}">${todo.title}</label>
        <input class="edit-todo hidden" type="text" value="${todo.title}"/>
        <button class="button-edit">수정</button>
        <button class="button-save hidden">저장</button>
        <button class="button-delete">삭제</button>
    </li>
`;

// event binding
Todo.addEvent = el => go(
  el,
  $delegate("click", ".button-add", util.addFn),
  $delegate("click", ".button-delete", util.deleteFn),
  $delegate('click', '.button-edit', util.editFn),
  $delegate('click', '.button-save', util.saveFn),
  $delegate('click', '.todo-check', util.toggleFn),
);

export default Todo;
