import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";
import { getMeasureCounterMax } from "./tools.js";

Deno.test("measure_once_single_flexible_child", function () {
  var root = Yoga.Node.create();
  root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
  root.setAlignItems(Yoga.ALIGN_FLEX_START);
  root.setWidth(100);
  root.setHeight(100);

  var measureCounter = getMeasureCounterMax(Yoga);

  var root_child0 = Yoga.Node.create();
  root_child0.setMeasureFunc(measureCounter.inc);
  root_child0.setFlexGrow(1);
  root.insertChild(root_child0, 0);

  root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

  assert(1 === measureCounter.get(), "1 === measureCounter.get()");

  if (typeof root !== "undefined") {
    root.freeRecursive();
  }

  (typeof gc !== "undefined") && gc();
  // TODO Add event support in js and check instace allocation and de allocation using that
});
