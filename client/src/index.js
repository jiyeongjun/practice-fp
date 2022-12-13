import { go } from "fxjs";
import Loading from "./components/Atom/Loading";
import Todo from "./components/Todo";
import { $el } from 'fxdom';

const delay1000 = async (a) => {
  const ww = await new Promise((resolve) => setTimeout(() => resolve(a), 1000));
  return ww;
}

Loading(go(
  delay1000(`<div></div>`),
  $el,
  Todo.append("body")
));

const fetchTodos = () =>
  axios.get('/v1/todos').then(({ data }) => data);