import { go, tap } from "fxjs";
import $el from "./lib/serverFxdom/$el.js";
import $appendTo from "./lib/serverFxdom/$appendTo.js";
import $qs from "./lib/serverFxdom/$qs.js";
import { dom, initializeJsdom } from "./lib/jsdom.js";
import htmlS from "./lib/htmlS.js";
import { Sample1, Sample2, Sample3 } from "./componenets/Sample.js";
import generate from "./lib/generate.js";
import { classStore } from "./lib/classStore.js";
import appendTo from "./lib/serverFxdom/$appendTo.js";
import qs from "./lib/serverFxdom/$qs.js";

const exampleTmpl = htmlS`
    <div>
        <div>
            <div>111</div>
            ${'<script>alert("악의적 XSS공격")</script>'}
        </div>
        ${1}
        ${'<script>alert("악의적 XSS공격2")</script>'}
        <button class="test">console확인</button>
    </div>
`;


const serverRenderer = (generatePageF) => {
  initializeJsdom();
  classStore.clear();

  generatePageF();

  go(
    `<script>window.state = ${JSON.stringify(classStore.classList)}</script>`,
    $el,
    appendTo($qs("head")),
  );

  return dom.serialize();
};

export const SamplePage = () => go(
  $qs("body"),
  tap(generate(Sample1)),
  tap(generate(Sample2)),
  tap(generate(Sample3)),
);

export default serverRenderer;