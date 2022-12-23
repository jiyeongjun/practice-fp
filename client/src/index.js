import './style/index.styl';
import { go, tap } from "fxjs";
import { $qs } from 'fxdom';
import { root } from "./lib/root";
import Layout from "./components/Layout/Layout";

import SideMenu from "./UiHelper/SideMenu/SideMenu";

const main = () => root`<div class="root">${Layout}</div>`;
const sub = () => go(
  $qs('body'),
  tap(SideMenu.append),
);

main();
sub();
