import dummyList from '../dummy';
import { strMap, html, go, pipe } from 'fxjs';
import { $el, $qs, $appendTo } from 'fxdom';

const Todo = {};

Todo.append = (parent) =>
  go(dummyList, Todo.basic, $el, $appendTo($qs(parent)));

// view
Todo.basic = todoList => html`
  <main>
    <h1>To-Do List</h1>

    <form class='todo--input-form'>
      <label for='new-task'>New Task:</label>
      <input type='text' id='new-task' placeholder='할 일 입력하기' />
      <button type='submit' class='button--add'>Add</button>
    </form>
    <ul class='todo-list'>
      ${strMap(Todo.list, todoList)}
    </ul>
  </main>
`;

Todo.list = todo => html`
  <li>${todo}</li>
`;

// add event
Todo.addEvents = pipe(

)

export default Todo;