import { add, each, go, map, reduce, zip } from "fxjs";
import * as L from "fxjs/Lazy";
import { $appendTo, $el, $qs } from "fxdom";


const root = (strs, ...vals) => {
  if (!vals.length) return;
  const isRoot = hasRootClass(...strs);
  // Root Component일 경우 body에 append
  isRoot && go(
    strs,
    reduce(add),
    $el,
    $appendTo($qs("body")),
  );

  go(
    zip(strs, vals),
    map(([str, val]) => [getClassName(str), val]),
    each(([parentSel, child]) => {
        child && child.append($qs(parentSel));

        (child && child.tmpl?.vals) &&
        root(child.tmpl?.strs, ...child.tmpl.vals);
      },
    ),
  );

};

const htmlC = (strs, ...vals) => ({
  gen: go(
    strs,
    reduce(add),
  ),
  strs: deepCopy(strs),
  vals: deepCopy(vals),
});

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  let copy;
  if (obj instanceof Array) {
    copy = [];
  } else {
    copy = {};
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}


const isNotUndefined = a => a !== undefined;
const htmlS = (strs, ...vals) =>
  go(
    L.zip(strs, L.map(sanitize, vals)),
    L.flat,
    L.filter(isNotUndefined),
    reduce(add),
  );


const pureTemplate = (str) => str.replace(/\[object Object\]/g, '');


const hasObjectObject = (str) => /\[objectObject\]/.test(str);

// child && child.append(($qs(parentEl))),
function hasRootClass(html) {
  // Use a regular expression to match the class name
  const match = html.match(/class="([^"]+)"/);
  if (match) {
    // Return true if the class name contains "root"
    return match[1].includes("root");
  }
  // Return false if no class name was found
  return false;
}


const getClassName = (html) => {
  // 모든 class 추출
  const matches = html.match(/class="([^"]+)"/g);
  if (matches) {
    // 가장 뒤에 있는 class추출, class name만 추출
    const match = matches[matches.length - 1].match(/class="([^"]+)"/);
    return `.${match[1]}`;
  }
  return "";
};


export { root, htmlC };