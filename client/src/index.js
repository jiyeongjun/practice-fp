import './style/index.styl';
import { go, tap } from "fxjs";
import { $qs } from 'fxdom';
import Layout from "./components/Layout/Layout";
import htmlC from "./lib/htmlC";

import SideMenu from "./UiHelper/SideMenu/SideMenu";

const main = () => htmlC`<div class="root">${Layout}</div>`;
const sub = () => go(
  $qs('body'),
  tap(SideMenu.append),
);

main();
sub();
