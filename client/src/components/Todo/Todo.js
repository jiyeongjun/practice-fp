import dummyList from "../../dummy";
import { strMap, html, go, pipe, curry, tap } from "fxjs";
import { $el, $qs, $appendTo } from "fxdom";
import util from "./util";

const Todo = {};

Todo.append = curry((parent, todos) =>
  go(todos, Todo.basic, $el, $appendTo($qs(parent)))
);

// view
Todo.basic = (todoList) => html`
  <main>
    <h1>To-Do List</h1>

    <form class="todo-form">
      <label for="new-todo">New Task:</label>
      <input type="text" id="new-todo" placeholder="할 일 입력하기" />
      <button type="submit" class="button-add">Add</button>
    </form>
    <ul class="todo-list">
      ${strMap(Todo.item, todoList)}
    </ul>
  </main>
`;

Todo.item = (todo) => html` <li>${todo.title}</li> `;

// add event
Todo.addEvents = pipe(util.addTodoHandler);

export default Todo;
