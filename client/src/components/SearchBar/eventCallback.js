import { $blur, $closest, $each, $find, $findAll, $qs, $setVal, $toggleClass } from "fxdom";
import { go, tap } from "fxjs";

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
    $findAll(".search, .bi-search, search__body"),
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