import { $hasClass, $toggleClass } from "fxdom";

const switchClass = (c1, c2) => el => {
  if (!$hasClass(c1, el) && !$hasClass(c2, el)) {
    $toggleClass(c1, el);
    return;
  }

  $toggleClass(c1, el);
  $toggleClass(c2, el);
};

export default switchClass;