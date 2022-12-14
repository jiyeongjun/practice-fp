import { go, tap } from "fxjs";
import { $el, $appendTo, $find, $remove, $qs } from "fxdom";

const loading = Object.freeze({
  pending() {
    return tap(
      go(
        `<div class='backdrop'>
            <div class='loading' />
         </div>`,
        $el,
        $appendTo($qs("body"))
      )
    );
  },
  resolve() {
    return tap(go($qs("body"), $find(".loading"), $remove));
  },
});

const Loading = async (f) => {
  loading.pending();
  await go(f);
  loading.resolve();
};

export default Loading;
