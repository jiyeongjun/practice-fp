import { go, html, strMap } from "fxjs";
import jsdomS from "../../server/lib/jsdomS.js";
import todoApi from "../../api/todo.js";
import generate from "../../server/lib/generate.js";

const Todo = {};

Todo.getData = todoApi.readTodos;

Todo.tmpl = (todoList) => html`
    <section class="todo">
        <div class="todo__body">
            <h1>To-Do List</h1>
            <form class="todo__body__form">
                <label for="todo__body__form__input">New Task:</label>
                <input type="text" id="todo__body__form__input" class="todo__body__form__input" placeholder="할 일 입력하기"
                       autocomplete="off"/>
                <button type="button" class="todo__body__form__add">Add</button>
            </form>
            <ul class="todo__body__list">
                ${strMap(Todo.itemTmpl, todoList)}
            </ul>
        </div>
    </section>
`;

Todo.itemTmpl = (todo) => jsdomS`
    <li class="todo__body__list__item ${todo.is_completed ? "checked" : ""}" data-todo-id=${todo.todo_id}>
        <span class="todo__body__list__item__check ${todo.is_completed ? "checked" : ""}"></span>
        <span class="todo__body__list__item__message ${todo.is_completed ? "checked" : ""}" for="todo${todo.todo_id}">${todo.title}</span>
        <input class="todo__body__list__item__edit hidden" type="text" value="${todo.title}"/>
        <button type="button" class="todo__body__list__item__button-edit">수정</button>
        <button type="button" class="todo__body__list__item__button-save hidden">저장</button>
        <button type="button" class="todo__body__list__item__button-delete">삭제</button>
    </li>
`;


export default Todo;