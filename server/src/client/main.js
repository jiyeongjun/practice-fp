import eventMap from "./eventMap.js";
import { each, go } from "fxjs";
import * as L from "fxjs/Lazy";
import { $qs } from "fxdom";

const addEvent = (obj) => go(
  L.entries(obj),
  each(([k, f]) => f($qs(k))),
  console.log,
);

addEvent(eventMap);

