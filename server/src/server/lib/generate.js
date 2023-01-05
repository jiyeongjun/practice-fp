import { curry, go, has, ifElse, tap } from "fxjs";
import { $appendTo, $el } from "./serverFxdom/index.js";

/**
 * 객체 형태의 컴포넌트와 append할 부모 엘리먼트를 받는다.
 * Data를 받는 컴포넌트와 아닌 컴포넌트를 구별하며 최종 append가 완료되면 resolve한다.
 */
const generate = curry((component, parentEl) =>
  go(
    component,
    ifElse(
      comp => has("getData", comp),
      _ => genHasDataComp(component, parentEl),
      _ => genComp(component, parentEl),
    ),
  ));

const genHasDataComp = curry((component, parentEl) => new Promise((resolve) =>
  go(
    component.getData(),
    component.tmpl,
    $el,
    $appendTo(parentEl),
    resolve,
  )));

const genComp = curry((component, parentEl) => new Promise((resolve) =>
  go(
    component.tmpl,
    $el,
    $appendTo(parentEl),
    resolve,
  )));


export default generate;