import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("absolute_layout_width_height_start_top", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_START, 10);
    root_child0.setPosition(Yoga.EDGE_TOP, 10);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_width_height_end_bottom", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_END, 10);
    root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_start_top_end_bottom", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_START, 10);
    root_child0.setPosition(Yoga.EDGE_TOP, 10);
    root_child0.setPosition(Yoga.EDGE_END, 10);
    root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      80 === root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      80 === root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_width_height_start_top_end_bottom", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_START, 10);
    root_child0.setPosition(Yoga.EDGE_TOP, 10);
    root_child0.setPosition(Yoga.EDGE_END, 10);
    root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("do_not_clamp_height_of_absolute_node_to_height_of_its_overflow_hidden_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setOverflow(Yoga.OVERFLOW_HIDDEN);
    root.setWidth(50);
    root.setHeight(50);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_START, 0);
    root_child0.setPosition(Yoga.EDGE_TOP, 0);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(100);
    root_child0_child0.setHeight(100);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

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
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedWidth(),
      "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -50 === root_child0.getComputedLeft(),
      "-50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedWidth(),
      "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_within_border", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setMargin(Yoga.EDGE_LEFT, 10);
    root.setMargin(Yoga.EDGE_TOP, 10);
    root.setMargin(Yoga.EDGE_RIGHT, 10);
    root.setMargin(Yoga.EDGE_BOTTOM, 10);
    root.setPadding(Yoga.EDGE_LEFT, 10);
    root.setPadding(Yoga.EDGE_TOP, 10);
    root.setPadding(Yoga.EDGE_RIGHT, 10);
    root.setPadding(Yoga.EDGE_BOTTOM, 10);
    root.setBorder(Yoga.EDGE_LEFT, 10);
    root.setBorder(Yoga.EDGE_TOP, 10);
    root.setBorder(Yoga.EDGE_RIGHT, 10);
    root.setBorder(Yoga.EDGE_BOTTOM, 10);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_LEFT, 0);
    root_child0.setPosition(Yoga.EDGE_TOP, 0);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child1.setPosition(Yoga.EDGE_RIGHT, 0);
    root_child1.setPosition(Yoga.EDGE_BOTTOM, 0);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child2.setPosition(Yoga.EDGE_LEFT, 0);
    root_child2.setPosition(Yoga.EDGE_TOP, 0);
    root_child2.setMargin(Yoga.EDGE_LEFT, 10);
    root_child2.setMargin(Yoga.EDGE_TOP, 10);
    root_child2.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child2.setMargin(Yoga.EDGE_BOTTOM, 10);
    root_child2.setWidth(50);
    root_child2.setHeight(50);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child3.setPosition(Yoga.EDGE_RIGHT, 0);
    root_child3.setPosition(Yoga.EDGE_BOTTOM, 0);
    root_child3.setMargin(Yoga.EDGE_LEFT, 10);
    root_child3.setMargin(Yoga.EDGE_TOP, 10);
    root_child3.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child3.setMargin(Yoga.EDGE_BOTTOM, 10);
    root_child3.setWidth(50);
    root_child3.setHeight(50);
    root.insertChild(root_child3, 3);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(10 === root.getComputedLeft(), "10 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(10 === root.getComputedTop(), "10 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
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
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
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
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      20 === root_child2.getComputedLeft(),
      "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
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
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child3.getComputedLeft(),
      "30 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
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
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(10 === root.getComputedLeft(), "10 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(10 === root.getComputedTop(), "10 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
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
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
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
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      20 === root_child2.getComputedLeft(),
      "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
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
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child3.getComputedLeft(),
      "30 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
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
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_and_justify_content_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_and_justify_content_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_FLEX_END);
    root.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      60 === root_child0.getComputedTop(),
      "60 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      60 === root_child0.getComputedTop(),
      "60 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_justify_content_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_center_on_child_only", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignSelf(Yoga.ALIGN_CENTER);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_and_justify_content_center_and_top_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_TOP, 10);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_and_justify_content_center_and_bottom_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      25 === root_child0.getComputedLeft(),
      "25 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_and_justify_content_center_and_left_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_LEFT, 5);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      5 === root_child0.getComputedLeft(),
      "5 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      5 === root_child0.getComputedLeft(),
      "5 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_align_items_and_justify_content_center_and_right_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexGrow(1);
    root.setWidth(110);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_RIGHT, 5);
    root_child0.setWidth(60);
    root_child0.setHeight(40);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      45 === root_child0.getComputedLeft(),
      "45 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(110 === root.getComputedWidth(), "110 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      45 === root_child0.getComputedLeft(),
      "45 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      60 === root_child0.getComputedWidth(),
      "60 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0.getComputedHeight(),
      "40 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("position_root_with_rtl_should_position_withoutdirection", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPosition(Yoga.EDGE_LEFT, 72);
    root.setWidth(52);
    root.setHeight(52);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(72 === root.getComputedLeft(), "72 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(72 === root.getComputedLeft(), "72 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_percentage_bottom_based_on_parent_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_TOP, "50%");
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child1.setPosition(Yoga.EDGE_BOTTOM, "50%");
    root_child1.setWidth(10);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child2.setPosition(Yoga.EDGE_TOP, "10%");
    root_child2.setPosition(Yoga.EDGE_BOTTOM, "10%");
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      100 === root_child0.getComputedTop(),
      "100 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      90 === root_child1.getComputedTop(),
      "90 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
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
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      160 === root_child2.getComputedHeight(),
      "160 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      90 === root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      100 === root_child0.getComputedTop(),
      "100 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      90 === root_child1.getComputedLeft(),
      "90 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      90 === root_child1.getComputedTop(),
      "90 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
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
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      160 === root_child2.getComputedHeight(),
      "160 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_in_wrap_reverse_column_container", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
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
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_in_wrap_reverse_row_container", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
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
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_in_wrap_reverse_column_container_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignSelf(Yoga.ALIGN_FLEX_END);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
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
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
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
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("absolute_layout_in_wrap_reverse_row_container_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignSelf(Yoga.ALIGN_FLEX_END);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
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
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
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
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
