import { each, go, map } from "fxjs";
import EventList from "./eventList/index.js";
import * as L from "fxjs/Lazy";
import { $el, $qs } from "fxdom";

const classList = window.state;

const addEvent = (el) => {
  EventList[el]($qs(`.${el}`));
};

go(
  classList,
  each(addEvent),
);
console.log(EventList);

