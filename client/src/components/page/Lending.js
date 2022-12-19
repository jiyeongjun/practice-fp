import { html, go } from "fxjs";
import { $appendTo, $el, $qs } from "fxdom";

const Lending = {};

Lending.append = (parent) => {
  go(
    Lending.tmpl,
    $el,
    $appendTo(parent),
  );
};

Lending.tmpl = html`
    <div>안녕하세요, 렌딩페이지 입니다.</div>
`;

export default Lending;