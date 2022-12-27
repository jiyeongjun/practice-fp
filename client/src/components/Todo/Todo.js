import { strMap, html, go, tap } from "fxjs";
import { $el, $appendTo, $delegate, $on } from "fxdom";
import event from "./eventCallback";
import TodoApi from "../../api/todo";
import Suspense from "../../lib/Suspense";
import Loading from "../../UiHelper/Loading/Loading";
import htmlS from "../../lib/htmlS";

const Todo = {};

Todo.generateTo = (parent) =>
  Suspense(
    go(
      TodoApi.readTodos(), // 데이터를 가져와서
      Todo.baseTmpl, // base template을 생성하고
      $el, // htmlElement로 변환하고
      $appendTo(parent), // 원하는 element에 append하고
      Todo.addEvent, // event를 binding한다.
    )
    , Loading, parent);

// template
Todo.baseTmpl = (todoList) => html`
    <section class="todo">
        <div class="todo__body">
            <h1>To-Do List</h1>

            <form class="todo__body__form">
                <label for="todo__body__form__input">New Task:</label>
                <input type="text" id="todo__body__form__input" class="todo__body__form__input" placeholder="할 일 입력하기"/>
                <button type="button" class="todo__body__form__add">Add</button>
            </form>
            <ul class="todo__body__list">
                ${strMap(Todo.itemTmpl, todoList)}
            </ul>
        </div>
    </section>
`;

Todo.itemTmpl = (todo) => htmlS`
    <li class="todo__body__list__item ${todo.is_completed ? "checked" : ""}" data-todo-id=${todo.todo_id}>
        <span class="todo__body__list__item__check ${todo.is_completed ? "checked" : ""}"></span>
        <span class="todo__body__list__item__message ${todo.is_completed ? "checked" : ""}" for="todo${todo.todo_id}">${todo.title}</span>
        <input class="todo__body__list__item__edit hidden" type="text" value="${todo.title}"/>
        <button class="todo__body__list__item__button-edit">수정</button>
        <button class="todo__body__list__item__button-save hidden">저장</button>
        <button class="todo__body__list__item__button-delete">삭제</button>
    </li>
`;

// event binding
Todo.addEvent = (el) => go(
  el,
  $delegate("click", ".todo__body__form__add", event.addFn),
  $delegate("click", ".todo__body__list__item__button-delete", event.deleteFn),
  $delegate("click", ".todo__body__list__item__button-edit", event.editFn),
  $delegate("click", ".todo__body__list__item__button-save", event.saveFn),
  $delegate("click", ".todo__body__list__item__check", event.completeFn),
  $delegate("keyup", ".todo__body__list__item__edit", (e) => {
    e.key === "Enter" && event.saveFn(e);
  }),
  $on("submit", ".todo__body__form", (e) => {
    e.preventDefault();
    event.addFn();
  }),
);

export default Todo;
