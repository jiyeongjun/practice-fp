import { go, tap, map, reduce, flat, zip, add, slice } from 'fxjs';
import { $appendTo, $el, $html, $qs, $setText } from 'fxdom';

const html = (strs, ...vals) =>
  go(
    zip(strs, map(sanitize, vals)),
    flat,
    _ => slice(0, -1, _),
    reduce(add),
  );
const sanitize = val => go(
  $el('div'),
  $setText(val),
  $html,
);

const tmpl = html`
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
  tmpl,
  $el,
  $appendTo($qs('body')),
  tap(console.log),
);

export default html;