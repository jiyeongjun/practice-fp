import './style/index.styl';
import { go, tap } from "fxjs";
import { $qs } from 'fxdom';
import Layout from "./style/Layout";
import Todo from "./components/Todo/Todo";
import MainMenu from "./components/MainMenu/MainMenu";

const main = () =>
  go(
    $qs('body'),
    Layout.append,
    tap(({ mainMenu, main }) => {
      MainMenu.append(mainMenu);
      Todo.append(main);
    }),
  );

main();
