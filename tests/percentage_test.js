import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("percentage_width_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth("30%");
    root_child0.setHeight("30%");
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      140 === root_child0.getComputedLeft(),
      "140 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_position_left_top", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(400);
    root.setHeight(400);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPosition(Yoga.EDGE_LEFT, "10%");
    root_child0.setPosition(Yoga.EDGE_TOP, "20%");
    root_child0.setWidth("45%");
    root_child0.setHeight("55%");
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(400 === root.getComputedWidth(), "400 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(400 === root.getComputedHeight(), "400 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      40 === root_child0.getComputedLeft(),
      "40 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      180 === root_child0.getComputedWidth(),
      "180 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      220 === root_child0.getComputedHeight(),
      "220 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(400 === root.getComputedWidth(), "400 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(400 === root.getComputedHeight(), "400 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      260 === root_child0.getComputedLeft(),
      "260 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      180 === root_child0.getComputedWidth(),
      "180 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      220 === root_child0.getComputedHeight(),
      "220 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_position_bottom_right", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(500);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPosition(Yoga.EDGE_RIGHT, "20%");
    root_child0.setPosition(Yoga.EDGE_BOTTOM, "10%");
    root_child0.setWidth("55%");
    root_child0.setHeight("15%");
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(500 === root.getComputedWidth(), "500 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -100 === root_child0.getComputedLeft(),
      "-100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -50 === root_child0.getComputedTop(),
      "-50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      275 === root_child0.getComputedWidth(),
      "275 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      75 === root_child0.getComputedHeight(),
      "75 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(500 === root.getComputedWidth(), "500 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      125 === root_child0.getComputedLeft(),
      "125 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -50 === root_child0.getComputedTop(),
      "-50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      275 === root_child0.getComputedWidth(),
      "275 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      75 === root_child0.getComputedHeight(),
      "75 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("50%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexBasis("25%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      125 === root_child0.getComputedWidth(),
      "125 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      125 === root_child1.getComputedLeft(),
      "125 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      75 === root_child1.getComputedWidth(),
      "75 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      125 === root_child0.getComputedWidth(),
      "125 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      75 === root_child1.getComputedWidth(),
      "75 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_cross", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("50%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexBasis("25%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      125 === root_child0.getComputedHeight(),
      "125 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      125 === root_child1.getComputedTop(),
      "125 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      75 === root_child1.getComputedHeight(),
      "75 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      125 === root_child0.getComputedHeight(),
      "125 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      125 === root_child1.getComputedTop(),
      "125 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      75 === root_child1.getComputedHeight(),
      "75 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_cross_min_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMinHeight("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(2);
    root_child1.setMinHeight("10%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      140 === root_child0.getComputedHeight(),
      "140 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      140 === root_child1.getComputedTop(),
      "140 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      60 === root_child1.getComputedHeight(),
      "60 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      140 === root_child0.getComputedHeight(),
      "140 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      140 === root_child1.getComputedTop(),
      "140 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      60 === root_child1.getComputedHeight(),
      "60 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_main_max_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("10%");
    root_child0.setMaxHeight("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("10%");
    root_child1.setMaxHeight("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      52 === root_child0.getComputedWidth(),
      "52 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      120 === root_child0.getComputedHeight(),
      "120 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      52 === root_child1.getComputedLeft(),
      "52 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      148 === root_child1.getComputedWidth(),
      "148 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child1.getComputedHeight(),
      "40 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      148 === root_child0.getComputedLeft(),
      "148 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      52 === root_child0.getComputedWidth(),
      "52 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      120 === root_child0.getComputedHeight(),
      "120 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      148 === root_child1.getComputedWidth(),
      "148 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child1.getComputedHeight(),
      "40 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_cross_max_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("10%");
    root_child0.setMaxHeight("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("10%");
    root_child1.setMaxHeight("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      120 === root_child0.getComputedHeight(),
      "120 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      120 === root_child1.getComputedTop(),
      "120 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child1.getComputedHeight(),
      "40 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      120 === root_child0.getComputedHeight(),
      "120 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      120 === root_child1.getComputedTop(),
      "120 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child1.getComputedHeight(),
      "40 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_main_max_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("15%");
    root_child0.setMaxWidth("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("10%");
    root_child1.setMaxWidth("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      120 === root_child0.getComputedWidth(),
      "120 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      120 === root_child1.getComputedLeft(),
      "120 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child1.getComputedWidth(),
      "40 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      120 === root_child0.getComputedWidth(),
      "120 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child1.getComputedWidth(),
      "40 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_cross_max_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("10%");
    root_child0.setMaxWidth("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("15%");
    root_child1.setMaxWidth("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      120 === root_child0.getComputedWidth(),
      "120 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      40 === root_child1.getComputedWidth(),
      "40 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      150 === root_child1.getComputedHeight(),
      "150 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      120 === root_child0.getComputedWidth(),
      "120 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      160 === root_child1.getComputedLeft(),
      "160 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child1.getComputedWidth(),
      "40 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      150 === root_child1.getComputedHeight(),
      "150 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_main_min_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("15%");
    root_child0.setMinWidth("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("10%");
    root_child1.setMinWidth("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      120 === root_child0.getComputedWidth(),
      "120 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      120 === root_child1.getComputedLeft(),
      "120 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child1.getComputedWidth(),
      "80 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      120 === root_child0.getComputedWidth(),
      "120 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      80 === root_child1.getComputedWidth(),
      "80 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_flex_basis_cross_min_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("10%");
    root_child0.setMinWidth("60%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("15%");
    root_child1.setMinWidth("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      150 === root_child1.getComputedHeight(),
      "150 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      150 === root_child1.getComputedHeight(),
      "150 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_multiple_nested_with_padding_margin_and_percentage_values", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis("10%");
    root_child0.setMargin(Yoga.EDGE_LEFT, 5);
    root_child0.setMargin(Yoga.EDGE_TOP, 5);
    root_child0.setMargin(Yoga.EDGE_RIGHT, 5);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 5);
    root_child0.setPadding(Yoga.EDGE_LEFT, 3);
    root_child0.setPadding(Yoga.EDGE_TOP, 3);
    root_child0.setPadding(Yoga.EDGE_RIGHT, 3);
    root_child0.setPadding(Yoga.EDGE_BOTTOM, 3);
    root_child0.setMinWidth("60%");
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setMargin(Yoga.EDGE_LEFT, 5);
    root_child0_child0.setMargin(Yoga.EDGE_TOP, 5);
    root_child0_child0.setMargin(Yoga.EDGE_RIGHT, 5);
    root_child0_child0.setMargin(Yoga.EDGE_BOTTOM, 5);
    root_child0_child0.setPadding(Yoga.EDGE_LEFT, "3%");
    root_child0_child0.setPadding(Yoga.EDGE_TOP, "3%");
    root_child0_child0.setPadding(Yoga.EDGE_RIGHT, "3%");
    root_child0_child0.setPadding(Yoga.EDGE_BOTTOM, "3%");
    root_child0_child0.setWidth("50%");
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setMargin(Yoga.EDGE_LEFT, "5%");
    root_child0_child0_child0.setMargin(Yoga.EDGE_TOP, "5%");
    root_child0_child0_child0.setMargin(Yoga.EDGE_RIGHT, "5%");
    root_child0_child0_child0.setMargin(Yoga.EDGE_BOTTOM, "5%");
    root_child0_child0_child0.setPadding(Yoga.EDGE_LEFT, 3);
    root_child0_child0_child0.setPadding(Yoga.EDGE_TOP, 3);
    root_child0_child0_child0.setPadding(Yoga.EDGE_RIGHT, 3);
    root_child0_child0_child0.setPadding(Yoga.EDGE_BOTTOM, 3);
    root_child0_child0_child0.setWidth("45%");
    root_child0_child0.insertChild(root_child0_child0_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(4);
    root_child1.setFlexBasis("15%");
    root_child1.setMinWidth("20%");
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      5 === root_child0.getComputedLeft(),
      "5 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      5 === root_child0.getComputedTop(),
      "5 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      190 === root_child0.getComputedWidth(),
      "190 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      48 === root_child0.getComputedHeight(),
      "48 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      8 === root_child0_child0.getComputedLeft(),
      "8 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      8 === root_child0_child0.getComputedTop(),
      "8 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      92 === root_child0_child0.getComputedWidth(),
      "92 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      25 === root_child0_child0.getComputedHeight(),
      "25 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child0_child0_child0.getComputedLeft(),
      "10 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0_child0_child0.getComputedTop(),
      "10 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      36 === root_child0_child0_child0.getComputedWidth(),
      "36 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      6 === root_child0_child0_child0.getComputedHeight(),
      "6 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      58 === root_child1.getComputedTop(),
      "58 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      142 === root_child1.getComputedHeight(),
      "142 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      5 === root_child0.getComputedLeft(),
      "5 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      5 === root_child0.getComputedTop(),
      "5 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      190 === root_child0.getComputedWidth(),
      "190 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      48 === root_child0.getComputedHeight(),
      "48 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      90 === root_child0_child0.getComputedLeft(),
      "90 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      8 === root_child0_child0.getComputedTop(),
      "8 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      92 === root_child0_child0.getComputedWidth(),
      "92 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      25 === root_child0_child0.getComputedHeight(),
      "25 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child0_child0_child0.getComputedLeft(),
      "46 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0_child0_child0.getComputedTop(),
      "10 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      36 === root_child0_child0_child0.getComputedWidth(),
      "36 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      6 === root_child0_child0_child0.getComputedHeight(),
      "6 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      58 === root_child1.getComputedTop(),
      "58 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      142 === root_child1.getComputedHeight(),
      "142 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_margin_should_calculate_based_only_on_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_LEFT, "10%");
    root_child0.setMargin(Yoga.EDGE_TOP, "10%");
    root_child0.setMargin(Yoga.EDGE_RIGHT, "10%");
    root_child0.setMargin(Yoga.EDGE_BOTTOM, "10%");
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(10);
    root_child0_child0.setHeight(10);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      20 === root_child0.getComputedLeft(),
      "20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0.getComputedTop(),
      "20 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      160 === root_child0.getComputedWidth(),
      "160 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      20 === root_child0.getComputedLeft(),
      "20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0.getComputedTop(),
      "20 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      160 === root_child0.getComputedWidth(),
      "160 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child0_child0.getComputedLeft(),
      "150 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
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
Deno.test("percentage_padding_should_calculate_based_only_on_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setPadding(Yoga.EDGE_LEFT, "10%");
    root_child0.setPadding(Yoga.EDGE_TOP, "10%");
    root_child0.setPadding(Yoga.EDGE_RIGHT, "10%");
    root_child0.setPadding(Yoga.EDGE_BOTTOM, "10%");
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(10);
    root_child0_child0.setHeight(10);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
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
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      20 === root_child0_child0.getComputedLeft(),
      "20 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedTop(),
      "20 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
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
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
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
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      170 === root_child0_child0.getComputedLeft(),
      "170 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedTop(),
      "20 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
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
Deno.test("percentage_absolute_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_LEFT, "30%");
    root_child0.setPosition(Yoga.EDGE_TOP, "10%");
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      60 === root_child0.getComputedLeft(),
      "60 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      60 === root_child0.getComputedLeft(),
      "60 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
Deno.test("percentage_width_height_undefined_parent_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth("50%");
    root_child0.setHeight("50%");
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(0 === root.getComputedWidth(), "0 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(0 === root.getComputedHeight(), "0 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(0 === root.getComputedWidth(), "0 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(0 === root.getComputedHeight(), "0 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percent_within_flex_grow", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(350);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(100);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth("100%");
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(100);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(350 === root.getComputedWidth(), "350 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
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
      100 === root_child1.getComputedLeft(),
      "100 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      150 === root_child1.getComputedWidth(),
      "150 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child1_child0.getComputedWidth(),
      "150 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedHeight(),
      "0 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      250 === root_child2.getComputedLeft(),
      "250 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(350 === root.getComputedWidth(), "350 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      250 === root_child0.getComputedLeft(),
      "250 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child1.getComputedLeft(),
      "100 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      150 === root_child1.getComputedWidth(),
      "150 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child1_child0.getComputedWidth(),
      "150 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedHeight(),
      "0 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
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
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percentage_container_in_wrapping_container", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root_child0_child0.setWidth("100%");
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setWidth(50);
    root_child0_child0_child0.setHeight(50);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);

    var root_child0_child0_child1 = Yoga.Node.create(config);
    root_child0_child0_child1.setWidth(50);
    root_child0_child0_child1.setHeight(50);
    root_child0_child0.insertChild(root_child0_child0_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      100 === root_child0_child0.getComputedWidth(),
      "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0_child0.getComputedWidth(),
      "50 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0_child0.getComputedHeight(),
      "50 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child0_child0_child1.getComputedLeft(),
      "50 === root_child0_child0_child1.getComputedLeft() (" + root_child0_child0_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child1.getComputedTop(),
      "0 === root_child0_child0_child1.getComputedTop() (" + root_child0_child0_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0_child1.getComputedWidth(),
      "50 === root_child0_child0_child1.getComputedWidth() (" + root_child0_child0_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0_child1.getComputedHeight(),
      "50 === root_child0_child0_child1.getComputedHeight() (" + root_child0_child0_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      100 === root_child0_child0.getComputedWidth(),
      "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child0_child0_child0.getComputedLeft(),
      "50 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0_child0.getComputedWidth(),
      "50 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0_child0.getComputedHeight(),
      "50 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child1.getComputedLeft(),
      "0 === root_child0_child0_child1.getComputedLeft() (" + root_child0_child0_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child1.getComputedTop(),
      "0 === root_child0_child0_child1.getComputedTop() (" + root_child0_child0_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child0_child0_child1.getComputedWidth(),
      "50 === root_child0_child0_child1.getComputedWidth() (" + root_child0_child0_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0_child1.getComputedHeight(),
      "50 === root_child0_child0_child1.getComputedHeight() (" + root_child0_child0_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("percent_absolute_position", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(60);
    root.setHeight(50);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    root_child0.setPosition(Yoga.EDGE_LEFT, "50%");
    root_child0.setWidth("100%");
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth("100%");
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setWidth("100%");
    root_child0.insertChild(root_child0_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(60 === root.getComputedWidth(), "60 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      30 === root_child0.getComputedLeft(),
      "30 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0_child0.getComputedWidth(),
      "60 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      60 === root_child0_child1.getComputedLeft(),
      "60 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child1.getComputedTop(),
      "0 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      60 === root_child0_child1.getComputedWidth(),
      "60 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child1.getComputedHeight(),
      "50 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(60 === root.getComputedWidth(), "60 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      30 === root_child0.getComputedLeft(),
      "30 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0_child0.getComputedWidth(),
      "60 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child0.getComputedHeight(),
      "50 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      -60 === root_child0_child1.getComputedLeft(),
      "-60 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child1.getComputedTop(),
      "0 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      60 === root_child0_child1.getComputedWidth(),
      "60 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0_child1.getComputedHeight(),
      "50 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
