import './style/index.styl';
import { go, tap } from "fxjs";
import { $qs } from 'fxdom';
import Layout from "./components/Layout/Layout";

import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import MainMenu from "./components/MainMenu/MainMenu";
import SideMenu from "./UiHelper/SideMenu/SideMenu";

const main = () =>
  go(
    $qs('body'),
    tap(SideMenu.append),
    tap(Layout.append),
  );

main();
