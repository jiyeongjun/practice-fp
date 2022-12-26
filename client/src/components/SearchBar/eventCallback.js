import { $qs, $toggleClass } from "fxdom";
import { go } from "fxjs";

const searchFn = () => {
  console.log("검색어: ", $qs(".search_input").value);
  $qs(".search_input").blur();
  $qs(".search_input").value = "";
  $toggleClass("open", $qs(".search"));
  $toggleClass("open", $qs(".bi-search"));
};

const deleteWordFn = () => {
  $qs(".search_input").value = "";
  $qs(".search_input").focus();
};

export default {
  searchFn,
  deleteWordFn,
};