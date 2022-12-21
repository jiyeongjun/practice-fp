import { go, reduce, add } from 'fxjs';
import { $appendTo, $el, $html, $qs, $setText } from 'fxdom';
import * as L from 'fxjs/Lazy'

const html = (strs, ...vals) =>
  go(
    L.zip(strs, L.map(sanitize, vals)),
    L.flat,
    L.filter(isNotUndefined),
    reduce(add),
  );
const sanitize = val => go(
  $el('div'),
  $setText(val),
  $html,
);
const isNotUndefined = a => a !== undefined;

const exampleTmpl = html`
    <div>
        <div>
            <div>${1}</div>
            ${'<script>alert("악의적 XSS공격")</script>'}
        </div>
        ${1}
        ${'<script>alert("악의적 XSS공격2")</script>'}
    </div>
`;

go(
  exampleTmpl,
  $el,
  $appendTo($qs('body')),
);

export default html;