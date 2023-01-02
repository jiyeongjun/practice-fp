import { curry } from "fxjs";

const $setText = curry((text, el) => ((el.textContent = text), el));

export default $setText;