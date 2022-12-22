import { add, each, go, isArray, isObject, isString, map, pipe, reduce, tap, zip } from "fxjs";
import * as L from "fxjs/Lazy";
import { $appendTo, $el, $qs } from "fxdom";


const htmlC = (strs, ...vals) => {
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
    each(([parentEl, child]) =>
      child && child.append($qs(parentEl)),
    ),
  );
  return go(
    strs,
    reduce(add),
  );
};

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

const checkTypeAndAppend = (child, parent) => {
  if (Array.isArray(child)) {
    //each(c => c.append(()))
  } else if (typeof child === 'object') {
    console.log('This variable is an object');
  } else if (typeof child === 'string') {
    console.log('This variable is a string');
  } else {
    console.log('This variable is not an array, object, or string');
  }
};


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


export default htmlC;