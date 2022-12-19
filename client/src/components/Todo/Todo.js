import { strMap, html, go, pipe, curry, tap, pick } from "fxjs";
import { $el, $qs, $appendTo } from "fxdom";
import util from "./util";
import TodoApi from "../../api/todo";
import Suspense from "../../lib/Suspense";
import Loading from "../../UiHelper/Loading";
import { $delegate } from "fxdom/es";

const Todo = {};

Todo.append = (parent) =>
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
        <h1>To-Do List</h1>

        <form class="todo__form">
            <label for="todo__form__input">New Task:</label>
            <input type="text" id="todo__form__input" class="todo__form__input" placeholder="할 일 입력하기"/>
            <button type="button" class="todo__form__add">Add</button>
        </form>
        <ul class="todo__list">
            ${strMap(Todo.itemTmpl, todoList)}
        </ul>
    </section>
`;

Todo.itemTmpl = (todo) => html`
    <li class="todo__list__item" data-todo-id=${todo.todo_id}>
        <span class="todo__list__item__check"></span>
        <label class="todo__list__item__message" for="todo${todo.todo_id}">${todo.title}</label>
        <input class="todo__list__item__edit hidden" type="text" value="${todo.title}"/>
        <button class="todo__list__item__button-edit">수정</button>
        <button class="todo__list__item__button-save hidden">저장</button>
        <button class="todo__list__item__button-delete">삭제</button>
    </li>
`;

// event binding
Todo.addEvent = (el) =>
  go(
    el,
    $delegate("click", ".todo__form__add", util.addFn),
    $delegate("click", ".todo__list__item__button-delete", util.deleteFn),
    $delegate("click", ".todo__list__item__button-edit", util.editFn),
    $delegate("click", ".todo__list__item__button-save", util.saveFn),
    $delegate("click", ".todo__list__item__check", util.toggleFn),
    $delegate("keyup", ".todo__list__item__edit", (e) => {
      e.key === "Enter" && util.saveFn(e);
    }),
  );

export default Todo;
