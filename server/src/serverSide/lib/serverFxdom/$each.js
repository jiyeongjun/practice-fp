import { curry, each } from "fxjs";

const $each = curry(function _each(func, els) {
  return each(func, [...els]);
});

export default $each;