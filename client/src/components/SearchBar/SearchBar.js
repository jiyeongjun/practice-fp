import { go, html, tap } from "fxjs";
import { $appendTo, $delegate, $el, $prependTo } from "fxdom";
import event from "./eventCallback";

const SearchBar = {};

SearchBar.generateTo = (parent) =>
  go(
    SearchBar.tmpl,
    $el,
    $appendTo(parent),
    SearchBar.addEvent,
  );

SearchBar.tmpl = html`
    <form class="search" onsubmit="return false">
        <div class="search__body">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi-searchBar"
                 viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input class="search_input" type="search" placeholder="검색어 입력"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
                 viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
    </form>
`;

SearchBar.addEvent = (el) => go(
  el,
  $delegate("click", ".bi-searchBar", event.searchFn),
  $delegate("keyup", ".search_input", (e) => {
    e.key === "Enter" && event.searchFn();
  }),
  $delegate("click", ".bi-x-lg", event.deleteWordFn),
);

export default SearchBar;
