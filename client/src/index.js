import './style/index.styl';
import { delay, go, tap } from "fxjs";
import { $qs } from 'fxdom';
import { root } from "./lib/root";
import Layout from "./components/Layout/Layout";

import SideMenu from "./components/Header/SideMenu/SideMenu";
import SearchBar from "./components/SearchBar/SearchBar";
import toggleClass from "fxdom/toggleClass.js";


const main = () => root`<div class="root">${Layout}</div>`;
const sub = () => go(
  $qs('.layout__header'),
  tap(SideMenu.generateTo),
  tap(SearchBar.generateTo),
);
main();
sub();

