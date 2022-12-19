import './style/index.styl';
import { go, tap } from "fxjs";
import { $qs } from 'fxdom';
import Lending from "./components/page/Lending";
import Layout from "./components/Layout";
import Todo from "./components/Todo/Todo";

const main = () =>
  go(
    $qs('body'),
    Layout.append,
    Todo.append,
  );

main();
