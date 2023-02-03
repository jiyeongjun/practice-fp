import { add, entries, go, map, reduce } from "fxjs/es";

console.log("test");

function checkUTF16(chr) {
  if (chr.charCodeAt() >= 0xac00 && chr.charCodeAt() <= 0xd7a3) {
    // korean
    return 2;
  } else if (chr.charCodeAt() >= 0x0000 && chr.charCodeAt() <= 0x007f) {
    // english
    return 1;
  } else {
    // emoji ... etc
    return 3;
  }
}

export const getTotalBytes = (str) =>
  go(str, (_) => _.trim(), map(checkUTF16), reduce(add));

export const checkBytes = (str) => {
  const totalBytes = getTotalBytes(str);
  return totalBytes > 2000 ? false : true;
};

console.log(getTotalBytes("123456"));
