import { go } from "fxjs";
import { $delegate, $on } from "fxdom";

const test1Form = (el) => go(
  el,
  $delegate("click", ".test1", () => {
    console.log("test1");
  }),
);

const test2Form = (el) => go(
  el,
  $delegate("click", ".test2", () => {
    console.log("test2");
  }),
);

const test3Form = (el) => go(
  el,
  $delegate("click", ".test3", () => {
    console.log("test3");
  }),
);

const EventList = {
  test1Form,
  test2Form,
  test3Form,
};


export default EventList;