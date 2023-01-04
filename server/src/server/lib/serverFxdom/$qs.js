import { document } from "./setJsdom.js";

const $qs = (sel, base = document) => base.querySelector(sel);

export default $qs;