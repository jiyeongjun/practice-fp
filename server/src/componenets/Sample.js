import { html, strMap } from "fxjs";

/**
 * Component Property
 * 필수(최종 완성 템플릿) : tmpl
 * 데이터를 인자로 받는 경우(템플릿에 넣을 최종 데이터) : getData
 * 나머지는 필요에 따라 만들어 사용. ex) subTmpl, makeSomeData
 */
const Sample1 = {};
Sample1.tmpl = html`
    <div class="test1Form">
        <button class="test1">test1</button>
        <button class="test1">test1</button>
    </div>
`;

const Sample2 = {};


Sample2.tmpl = (dataList) => html`
    <div class="test2Form">
        <button class="test2">test2</button>
        <ul>
            ${strMap(Sample2.subTmpl, dataList)}
        </ul>
    </div>
`;

Sample2.subTmpl = (data) => html`
    <li>data.content</li>
`;

Sample2.getData = () => [{ content: "1" }, { content: "2" }, { content: "3" }];

const Sample3 = {};
Sample3.tmpl = html`
    <div class="test3Form">
        <button class="test3">test3</button>
    </div>
`;

export { Sample1, Sample2, Sample3 };