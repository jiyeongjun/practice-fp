import { $blur, $closest, $each, $find, $findAll, $qs, $setVal, $toggleClass } from "fxdom";
import { go, tap } from "fxjs";
import closest from "fxdom/closest.js";
import findAll from "fxdom/findAll.js";

const searchFn = () => {
  console.log("검색어: ", $qs(".search_input").value);
  go(
    $qs("header"),
    $find(".search .search_input"),
    $setVal(""),
    $blur,
  );

  go(
    $qs("header"),
    $findAll(".search, .bi-search, .search .search__body"),
    tap(console.log),
    $each(el => $toggleClass("open", el)),
  );
};

const deleteWordFn = () => {
  $qs(".search_input").value = "";
  $qs(".search_input").focus();
};

export default {
  searchFn,
  deleteWordFn,
};