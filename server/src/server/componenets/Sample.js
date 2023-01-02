import { html } from "fxjs";
import { classStore } from "../lib/classStore.js";

const Sample1 = {};
Sample1.tmpl = html`
    <div class="test1Form">
        <button class="test1">test1</button>
        <button class="test1">test1</button>
    </div>
`;

const Sample2 = {};
Sample2.tmpl = html`
    <div class="test2Form">
        <button class="test2">test2</button>
    </div>
`;

const Sample3 = {};
Sample3.tmpl = html`
    <div class="test3Form">
        <button class="test3">test3</button>
    </div>
`;

export { Sample1, Sample2, Sample3 };