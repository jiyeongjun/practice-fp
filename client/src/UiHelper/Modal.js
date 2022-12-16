import { curry, go, html, map, strMap, tap } from "fxjs";

export const modal = curry((btns, msg) =>
  new Promise((resolve) => go(
    html`
        <div class="modal">
            <div class="modal-content">
                <div class="modal-text">${msg}</div>
                <div class="modal-buttons">
                    ${strMap((btn) => `
                         <button type="button" class="${btn.type}">${btn.name}</button>
                    `, btns)}
                </div>
            </div>
            <div class="backdrop"/>
        </div>`, // 모달 템플릿을 만든 뒤
    $el, // html엘리먼트로 만든 후
    $appendTo($qs("body")), // body에 붙여준다.
    ...map((btn) => tap($find(`.${btn.type}`),
      $on("click", ({ currentTarget }) =>
        go(
          currentTarget,
          $closest(".modal"),
          $remove,
          () => resolve(btn.value),
        ))), btns),
    tap(_ => $qs('.modal'),
      $delegate('click', '.backdrop', _ => {
        $remove($qs('.modal'));
      })),
  )));

import { $el, $appendTo, $find, $closest, $remove, $qs, $on, $delegate } from "fxdom";
// ...map은 [f,f,f]로 평가되기 때문에 스프레드 연산자를 통해 풀어줘야 f,f,f형태가 되어 로직이 이어진다.
// Promise resolve를 클릭 시점에 해주어야 한다.
// 이렇게 해야 다른 곳에서 모달창을 사용할 때 버튼 클릭이 완료되고 나서 다음 로직이 이어진다.

export const confirm = modal([{ name: "취소", type: "cancel", value: false }, { name: "확인", type: "ok", value: true }]);

export const alert = modal([{ name: "확인", type: "ok", value: true }]);
