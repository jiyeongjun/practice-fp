import { curry } from "fxjs";

const $appendTo = curry((parent, child) => parent.appendChild(child));

export default $appendTo;