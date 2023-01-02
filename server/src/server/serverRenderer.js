import { curry, delay, go, map, take, tap } from "fxjs";
import $el from "./lib/serverFxdom/$el.js";
import $qs from "./lib/serverFxdom/$qs.js";
import { dom, initializeJsdom } from "./jsdom.js";
import htmlS from "./lib/htmlS.js";
import { Sample1, Sample2, Sample3 } from "./componenets/Sample.js";
import generate from "./lib/generate.js";
import { classStore } from "./lib/classStore.js";
import appendTo from "./lib/serverFxdom/$appendTo.js";
import Todo from "./componenets/Todo/Todo.js";
import $appendTo from "./lib/serverFxdom/$appendTo.js";
import MainMenu from "./componenets/MainMenu.js";
import { QUERY } from "../config/ConnectDB.js";

const tmpl = {};
tmpl.tmpl = htmlS`
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


const serverRenderer = async (generatePageF) => {
  await generatePageF();

  const tmpl = dom.serialize();
  initializeJsdom();
  return tmpl;
};


export const TodoPage = () => {
  go(
    generate(Todo, $qs(".root")),
  );

};

export const MainMenuPage = () => go(
  MainMenu.tmpl,
  $el,
  $appendTo($qs(".root")),
);

export const SamplePage = () => go(
  $qs(".root"),
  tap(generate(Todo)),
);

export default serverRenderer;