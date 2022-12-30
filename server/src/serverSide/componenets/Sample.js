import { html } from "fxjs";
import { classStore } from "../lib/classStore.js";

const Sample1 = {};
Sample1.tmpl = html`
    <div class="test1Form">
        <button class="test1">test1</button>
    </div>
`;
Sample1.add = () => classStore.add("test1Form");

const Sample2 = {};

Sample2.tmpl = html`
    <div class="test2Form">
        <button class="test2">test2</button>
    </div>
`;
Sample2.add = () => classStore.add("test2Form");

const Sample3 = {};
Sample3.tmpl = html`
    <div class="test3Form">
        <button class="test3">test3</button>
    </div>
`;

Sample3.add = () => classStore.add("test3Form");
export { Sample1, Sample2, Sample3 };