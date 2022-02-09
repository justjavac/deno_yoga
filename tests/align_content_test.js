import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("align_content_flex_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(130);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(10);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root_child4.setHeight(10);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(130 === root.getComputedWidth(), "130 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      10 === root_child2.getComputedTop(),
      "10 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      20 === root_child4.getComputedTop(),
      "20 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(130 === root.getComputedWidth(), "130 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      80 === root_child2.getComputedLeft(),
      "80 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      10 === root_child2.getComputedTop(),
      "10 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child3.getComputedLeft(),
      "30 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      80 === root_child4.getComputedLeft(),
      "80 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      20 === root_child4.getComputedTop(),
      "20 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_flex_start_without_height_on_children", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(10);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      10 === root_child2.getComputedTop(),
      "10 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      0 === root_child2.getComputedHeight(),
      "0 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      20 === root_child4.getComputedTop(),
      "20 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      0 === root_child4.getComputedHeight(),
      "0 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      10 === root_child2.getComputedTop(),
      "10 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      0 === root_child2.getComputedHeight(),
      "0 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      20 === root_child4.getComputedTop(),
      "20 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      0 === root_child4.getComputedHeight(),
      "0 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_flex_start_with_flex", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(120);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("0%");
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexBasis("0%");
    root_child1.setWidth(50);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setFlexGrow(1);
    root_child3.setFlexShrink(1);
    root_child3.setFlexBasis("0%");
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(120 === root.getComputedHeight(), "120 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child1.getComputedHeight(),
      "40 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      80 === root_child2.getComputedTop(),
      "80 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      0 === root_child2.getComputedHeight(),
      "0 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      80 === root_child3.getComputedTop(),
      "80 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      120 === root_child4.getComputedTop(),
      "120 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      0 === root_child4.getComputedHeight(),
      "0 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(120 === root.getComputedHeight(), "120 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child1.getComputedHeight(),
      "40 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      80 === root_child2.getComputedTop(),
      "80 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      0 === root_child2.getComputedHeight(),
      "0 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      80 === root_child3.getComputedTop(),
      "80 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      120 === root_child4.getComputedTop(),
      "120 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      0 === root_child4.getComputedHeight(),
      "0 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_FLEX_END);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(10);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root_child4.setHeight(10);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      40 === root_child4.getComputedTop(),
      "40 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      40 === root_child4.getComputedTop(),
      "40 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1.getComputedHeight(),
      "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      0 === root_child2.getComputedHeight(),
      "0 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      0 === root_child3.getComputedHeight(),
      "0 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      0 === root_child4.getComputedHeight(),
      "0 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      100 === root_child1.getComputedLeft(),
      "100 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1.getComputedHeight(),
      "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      0 === root_child2.getComputedHeight(),
      "0 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      0 === root_child3.getComputedHeight(),
      "0 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      100 === root_child4.getComputedLeft(),
      "100 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      0 === root_child4.getComputedHeight(),
      "0 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_spacebetween", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_SPACE_BETWEEN);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(130);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(10);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root_child4.setHeight(10);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(130 === root.getComputedWidth(), "130 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      45 === root_child2.getComputedTop(),
      "45 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      45 === root_child3.getComputedTop(),
      "45 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      90 === root_child4.getComputedTop(),
      "90 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(130 === root.getComputedWidth(), "130 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      80 === root_child2.getComputedLeft(),
      "80 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      45 === root_child2.getComputedTop(),
      "45 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child3.getComputedLeft(),
      "30 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      45 === root_child3.getComputedTop(),
      "45 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      80 === root_child4.getComputedLeft(),
      "80 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      90 === root_child4.getComputedTop(),
      "90 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_spacearound", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_SPACE_AROUND);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(140);
    root.setHeight(120);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(10);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root_child4.setHeight(10);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(140 === root.getComputedWidth(), "140 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(120 === root.getComputedHeight(), "120 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      15 === root_child0.getComputedTop(),
      "15 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      15 === root_child1.getComputedTop(),
      "15 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      55 === root_child2.getComputedTop(),
      "55 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      55 === root_child3.getComputedTop(),
      "55 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      95 === root_child4.getComputedTop(),
      "95 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(140 === root.getComputedWidth(), "140 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(120 === root.getComputedHeight(), "120 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      90 === root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      15 === root_child0.getComputedTop(),
      "15 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      15 === root_child1.getComputedTop(),
      "15 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      90 === root_child2.getComputedLeft(),
      "90 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      55 === root_child2.getComputedTop(),
      "55 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      40 === root_child3.getComputedLeft(),
      "40 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      55 === root_child3.getComputedTop(),
      "55 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      90 === root_child4.getComputedLeft(),
      "90 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      95 === root_child4.getComputedTop(),
      "95 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_children", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0_child0.setFlexBasis("0%");
    root_child0.insertChild(root_child0_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedWidth(),
      "50 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedWidth(),
      "50 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_flex", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexShrink(1);
    root_child1.setFlexBasis("0%");
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setFlexGrow(1);
    root_child3.setFlexShrink(1);
    root_child3.setFlexBasis("0%");
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      0 === root_child1.getComputedWidth(),
      "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      0 === root_child3.getComputedWidth(),
      "0 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      100 === root_child3.getComputedHeight(),
      "100 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      100 === root_child4.getComputedLeft(),
      "100 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      100 === root_child4.getComputedHeight(),
      "100 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      100 === root_child1.getComputedLeft(),
      "100 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      0 === root_child1.getComputedWidth(),
      "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      0 === root_child3.getComputedWidth(),
      "0 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      100 === root_child3.getComputedHeight(),
      "100 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      100 === root_child4.getComputedHeight(),
      "100 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_flex_no_shrink", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexShrink(1);
    root_child1.setFlexBasis("0%");
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setFlexGrow(1);
    root_child3.setFlexBasis("0%");
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      0 === root_child1.getComputedWidth(),
      "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      0 === root_child3.getComputedWidth(),
      "0 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      100 === root_child3.getComputedHeight(),
      "100 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      100 === root_child4.getComputedLeft(),
      "100 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      100 === root_child4.getComputedHeight(),
      "100 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      100 === root_child1.getComputedLeft(),
      "100 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      0 === root_child1.getComputedWidth(),
      "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      0 === root_child3.getComputedWidth(),
      "0 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      100 === root_child3.getComputedHeight(),
      "100 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      100 === root_child4.getComputedHeight(),
      "100 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setMargin(Yoga.EDGE_LEFT, 10);
    root_child1.setMargin(Yoga.EDGE_TOP, 10);
    root_child1.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child1.setMargin(Yoga.EDGE_BOTTOM, 10);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setMargin(Yoga.EDGE_LEFT, 10);
    root_child3.setMargin(Yoga.EDGE_TOP, 10);
    root_child3.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child3.setMargin(Yoga.EDGE_BOTTOM, 10);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      60 === root_child1.getComputedLeft(),
      "60 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      40 === root_child2.getComputedTop(),
      "40 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      40 === root_child2.getComputedHeight(),
      "40 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      60 === root_child3.getComputedLeft(),
      "60 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      80 === root_child4.getComputedTop(),
      "80 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      20 === root_child4.getComputedHeight(),
      "20 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      40 === root_child2.getComputedTop(),
      "40 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      40 === root_child2.getComputedHeight(),
      "40 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      40 === root_child3.getComputedLeft(),
      "40 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      100 === root_child4.getComputedLeft(),
      "100 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      80 === root_child4.getComputedTop(),
      "80 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      20 === root_child4.getComputedHeight(),
      "20 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_padding", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setPadding(Yoga.EDGE_LEFT, 10);
    root_child1.setPadding(Yoga.EDGE_TOP, 10);
    root_child1.setPadding(Yoga.EDGE_RIGHT, 10);
    root_child1.setPadding(Yoga.EDGE_BOTTOM, 10);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setPadding(Yoga.EDGE_LEFT, 10);
    root_child3.setPadding(Yoga.EDGE_TOP, 10);
    root_child3.setPadding(Yoga.EDGE_RIGHT, 10);
    root_child3.setPadding(Yoga.EDGE_BOTTOM, 10);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_single_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_fixed_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(60);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      60 === root_child1.getComputedHeight(),
      "60 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      80 === root_child2.getComputedHeight(),
      "80 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      80 === root_child3.getComputedTop(),
      "80 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      80 === root_child4.getComputedTop(),
      "80 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      20 === root_child4.getComputedHeight(),
      "20 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      60 === root_child1.getComputedHeight(),
      "60 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      80 === root_child2.getComputedHeight(),
      "80 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      80 === root_child3.getComputedTop(),
      "80 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      80 === root_child4.getComputedTop(),
      "80 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      20 === root_child4.getComputedHeight(),
      "20 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_max_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setMaxHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      50 === root_child3.getComputedTop(),
      "50 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      50 === root_child4.getComputedTop(),
      "50 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_row_with_min_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setMinHeight(80);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      90 === root_child0.getComputedHeight(),
      "90 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      90 === root_child1.getComputedHeight(),
      "90 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      100 === root_child2.getComputedLeft(),
      "100 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      90 === root_child2.getComputedHeight(),
      "90 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      90 === root_child3.getComputedTop(),
      "90 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      90 === root_child4.getComputedTop(),
      "90 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      90 === root_child0.getComputedHeight(),
      "90 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      90 === root_child1.getComputedHeight(),
      "90 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      90 === root_child2.getComputedHeight(),
      "90 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      100 === root_child3.getComputedLeft(),
      "100 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      90 === root_child3.getComputedTop(),
      "90 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child3.getComputedHeight(),
      "10 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      90 === root_child4.getComputedTop(),
      "90 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      10 === root_child4.getComputedHeight(),
      "10 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(150);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0_child0.setFlexBasis("0%");
    root_child0.insertChild(root_child0_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexShrink(1);
    root_child1.setFlexBasis("0%");
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setHeight(50);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(150 === root.getComputedHeight(), "150 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedWidth(),
      "50 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1.getComputedHeight(),
      "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      100 === root_child3.getComputedTop(),
      "100 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      50 === root_child4.getComputedLeft(),
      "50 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(150 === root.getComputedHeight(), "150 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedWidth(),
      "50 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1.getComputedHeight(),
      "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      100 === root_child3.getComputedTop(),
      "100 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      50 === root_child4.getComputedWidth(),
      "50 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_content_stretch_is_not_overriding_align_items", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_STRETCH);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0.setAlignItems(Yoga.ALIGN_CENTER);
    root_child0.setWidth(100);
    root_child0.setHeight(100);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0.setWidth(10);
    root_child0_child0.setHeight(10);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      45 === root_child0_child0.getComputedTop(),
      "45 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0_child0.getComputedWidth(),
      "10 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0_child0.getComputedHeight(),
      "10 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      90 === root_child0_child0.getComputedLeft(),
      "90 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      45 === root_child0_child0.getComputedTop(),
      "45 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0_child0.getComputedWidth(),
      "10 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0_child0.getComputedHeight(),
      "10 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
