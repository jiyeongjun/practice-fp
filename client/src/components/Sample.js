import { $appendTo, $delegate, $el } from "fxdom";
import { go, tap } from "fxjs";
import { htmlC } from "../lib/root";

const Sample = {};

Sample.append = (parent) =>
  go(
    Sample.tmpl.gen,
    $el,
    $appendTo(parent),
    Sample.addEvent,
  );

Sample.tmpl = htmlC`
    <div class="sample">
        <button class="sample-button">Sample-Component</button>
    </div>
`;

Sample.addEvent = (el) =>
  go(
    el,
    $delegate("click", ".sample-button", () => console.log("click! sample")),
  );

export default Sample;