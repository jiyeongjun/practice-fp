import { curry } from "fxjs";

const $contains = curry((child, parent) => parent.contains(child));

export default $contains;