import { document } from "../../jsdom.js";

const $qs = (sel, base = document) => base.querySelector(sel);

export default $qs;