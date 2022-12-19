import { curry } from "fxjs";
// 1. Optimistic Update 낙관적 업데이트를 시도하는 구현하기
// $optPatch = curry(act, el) => 성공 ? replace : tap;
// act = { url, body }
// const $optUpdate = curry((act, el) => {
//
// })

// act : { url, body }
const $optUpdate = curry((act, el) => {

});

// body 혹은 overflow-scroll 이 되어있는 template 영역에서 무한 스크롤을 쉽게 할 수 있도록 하는 scroll 구현하기