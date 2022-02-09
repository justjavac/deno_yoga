import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("android_news_feed", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setWidth(1080);

    var root_child0 = Yoga.Node.create(config);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);

    var root_child0_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0_child0.setAlignItems(Yoga.ALIGN_FLEX_START);
    root_child0_child0_child0_child0.setMargin(Yoga.EDGE_START, 36);
    root_child0_child0_child0_child0.setMargin(Yoga.EDGE_TOP, 24);
    root_child0_child0_child0.insertChild(root_child0_child0_child0_child0, 0);

    var root_child0_child0_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0_child0.insertChild(root_child0_child0_child0_child0_child0, 0);

    var root_child0_child0_child0_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0_child0_child0_child0.setWidth(120);
    root_child0_child0_child0_child0_child0_child0.setHeight(120);
    root_child0_child0_child0_child0_child0.insertChild(root_child0_child0_child0_child0_child0_child0, 0);

    var root_child0_child0_child0_child0_child1 = Yoga.Node.create(config);
    root_child0_child0_child0_child0_child1.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0_child0_child1.setFlexShrink(1);
    root_child0_child0_child0_child0_child1.setMargin(Yoga.EDGE_RIGHT, 36);
    root_child0_child0_child0_child0_child1.setPadding(Yoga.EDGE_LEFT, 36);
    root_child0_child0_child0_child0_child1.setPadding(Yoga.EDGE_TOP, 21);
    root_child0_child0_child0_child0_child1.setPadding(Yoga.EDGE_RIGHT, 36);
    root_child0_child0_child0_child0_child1.setPadding(Yoga.EDGE_BOTTOM, 18);
    root_child0_child0_child0_child0.insertChild(root_child0_child0_child0_child0_child1, 1);

    var root_child0_child0_child0_child0_child1_child0 = Yoga.Node.create(config);
    root_child0_child0_child0_child0_child1_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child0_child0_child1_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0_child0_child1_child0.setFlexShrink(1);
    root_child0_child0_child0_child0_child1.insertChild(root_child0_child0_child0_child0_child1_child0, 0);

    var root_child0_child0_child0_child0_child1_child1 = Yoga.Node.create(config);
    root_child0_child0_child0_child0_child1_child1.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0_child0_child1_child1.setFlexShrink(1);
    root_child0_child0_child0_child0_child1.insertChild(root_child0_child0_child0_child0_child1_child1, 1);

    var root_child0_child0_child1 = Yoga.Node.create(config);
    root_child0_child0_child1.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0.insertChild(root_child0_child0_child1, 1);

    var root_child0_child0_child1_child0 = Yoga.Node.create(config);
    root_child0_child0_child1_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child1_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child1_child0.setAlignItems(Yoga.ALIGN_FLEX_START);
    root_child0_child0_child1_child0.setMargin(Yoga.EDGE_START, 174);
    root_child0_child0_child1_child0.setMargin(Yoga.EDGE_TOP, 24);
    root_child0_child0_child1.insertChild(root_child0_child0_child1_child0, 0);

    var root_child0_child0_child1_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child1_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child1_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child1_child0.insertChild(root_child0_child0_child1_child0_child0, 0);

    var root_child0_child0_child1_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child1_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child1_child0_child0_child0.setWidth(72);
    root_child0_child0_child1_child0_child0_child0.setHeight(72);
    root_child0_child0_child1_child0_child0.insertChild(root_child0_child0_child1_child0_child0_child0, 0);

    var root_child0_child0_child1_child0_child1 = Yoga.Node.create(config);
    root_child0_child0_child1_child0_child1.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child1_child0_child1.setFlexShrink(1);
    root_child0_child0_child1_child0_child1.setMargin(Yoga.EDGE_RIGHT, 36);
    root_child0_child0_child1_child0_child1.setPadding(Yoga.EDGE_LEFT, 36);
    root_child0_child0_child1_child0_child1.setPadding(Yoga.EDGE_TOP, 21);
    root_child0_child0_child1_child0_child1.setPadding(Yoga.EDGE_RIGHT, 36);
    root_child0_child0_child1_child0_child1.setPadding(Yoga.EDGE_BOTTOM, 18);
    root_child0_child0_child1_child0.insertChild(root_child0_child0_child1_child0_child1, 1);

    var root_child0_child0_child1_child0_child1_child0 = Yoga.Node.create(config);
    root_child0_child0_child1_child0_child1_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child1_child0_child1_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child1_child0_child1_child0.setFlexShrink(1);
    root_child0_child0_child1_child0_child1.insertChild(root_child0_child0_child1_child0_child1_child0, 0);

    var root_child0_child0_child1_child0_child1_child1 = Yoga.Node.create(config);
    root_child0_child0_child1_child0_child1_child1.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child1_child0_child1_child1.setFlexShrink(1);
    root_child0_child0_child1_child0_child1.insertChild(root_child0_child0_child1_child0_child1_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(1080 === root.getComputedWidth(), "1080 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(240 === root.getComputedHeight(), "240 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    assert(1080 === root_child0.getComputedWidth(), "1080 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    assert(240 === root_child0.getComputedHeight(), "240 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")");
    assert(1080 === root_child0_child0.getComputedWidth(), "1080 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")");
    assert(240 === root_child0_child0.getComputedHeight(), "240 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")");
    assert(1080 === root_child0_child0_child0.getComputedWidth(), "1080 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")");
    assert(144 === root_child0_child0_child0.getComputedHeight(), "144 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child0_child0.getComputedLeft(), "36 === root_child0_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0_child0.getComputedLeft() + ")");
    assert(24 === root_child0_child0_child0_child0.getComputedTop(), "24 === root_child0_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0_child0.getComputedTop() + ")");
    assert(1044 === root_child0_child0_child0_child0.getComputedWidth(), "1044 === root_child0_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0_child0.getComputedWidth() + ")");
    assert(120 === root_child0_child0_child0_child0.getComputedHeight(), "120 === root_child0_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0_child0_child0.getComputedTop() + ")");
    assert(120 === root_child0_child0_child0_child0_child0.getComputedWidth(), "120 === root_child0_child0_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0_child0_child0.getComputedWidth() + ")");
    assert(120 === root_child0_child0_child0_child0_child0.getComputedHeight(), "120 === root_child0_child0_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child0_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child0_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child0_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0_child0_child0_child0.getComputedTop() + ")");
    assert(120 === root_child0_child0_child0_child0_child0_child0.getComputedWidth(), "120 === root_child0_child0_child0_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0_child0_child0_child0.getComputedWidth() + ")");
    assert(120 === root_child0_child0_child0_child0_child0_child0.getComputedHeight(), "120 === root_child0_child0_child0_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0_child0_child0_child0.getComputedHeight() + ")");

    assert(120 === root_child0_child0_child0_child0_child1.getComputedLeft(), "120 === root_child0_child0_child0_child0_child1.getComputedLeft() (" + root_child0_child0_child0_child0_child1.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0_child0_child1.getComputedTop(), "0 === root_child0_child0_child0_child0_child1.getComputedTop() (" + root_child0_child0_child0_child0_child1.getComputedTop() + ")");
    assert(72 === root_child0_child0_child0_child0_child1.getComputedWidth(), "72 === root_child0_child0_child0_child0_child1.getComputedWidth() (" + root_child0_child0_child0_child0_child1.getComputedWidth() + ")");
    assert(39 === root_child0_child0_child0_child0_child1.getComputedHeight(), "39 === root_child0_child0_child0_child0_child1.getComputedHeight() (" + root_child0_child0_child0_child0_child1.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child0_child0_child1_child0.getComputedLeft(), "36 === root_child0_child0_child0_child0_child1_child0.getComputedLeft() (" + root_child0_child0_child0_child0_child1_child0.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child0_child0_child1_child0.getComputedTop(), "21 === root_child0_child0_child0_child0_child1_child0.getComputedTop() (" + root_child0_child0_child0_child0_child1_child0.getComputedTop() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child0.getComputedWidth(), "0 === root_child0_child0_child0_child0_child1_child0.getComputedWidth() (" + root_child0_child0_child0_child0_child1_child0.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child0.getComputedHeight(), "0 === root_child0_child0_child0_child0_child1_child0.getComputedHeight() (" + root_child0_child0_child0_child0_child1_child0.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child0_child0_child1_child1.getComputedLeft(), "36 === root_child0_child0_child0_child0_child1_child1.getComputedLeft() (" + root_child0_child0_child0_child0_child1_child1.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child0_child0_child1_child1.getComputedTop(), "21 === root_child0_child0_child0_child0_child1_child1.getComputedTop() (" + root_child0_child0_child0_child0_child1_child1.getComputedTop() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child1.getComputedWidth(), "0 === root_child0_child0_child0_child0_child1_child1.getComputedWidth() (" + root_child0_child0_child0_child0_child1_child1.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child1.getComputedHeight(), "0 === root_child0_child0_child0_child0_child1_child1.getComputedHeight() (" + root_child0_child0_child0_child0_child1_child1.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child1.getComputedLeft(), "0 === root_child0_child0_child1.getComputedLeft() (" + root_child0_child0_child1.getComputedLeft() + ")");
    assert(144 === root_child0_child0_child1.getComputedTop(), "144 === root_child0_child0_child1.getComputedTop() (" + root_child0_child0_child1.getComputedTop() + ")");
    assert(1080 === root_child0_child0_child1.getComputedWidth(), "1080 === root_child0_child0_child1.getComputedWidth() (" + root_child0_child0_child1.getComputedWidth() + ")");
    assert(96 === root_child0_child0_child1.getComputedHeight(), "96 === root_child0_child0_child1.getComputedHeight() (" + root_child0_child0_child1.getComputedHeight() + ")");

    assert(174 === root_child0_child0_child1_child0.getComputedLeft(), "174 === root_child0_child0_child1_child0.getComputedLeft() (" + root_child0_child0_child1_child0.getComputedLeft() + ")");
    assert(24 === root_child0_child0_child1_child0.getComputedTop(), "24 === root_child0_child0_child1_child0.getComputedTop() (" + root_child0_child0_child1_child0.getComputedTop() + ")");
    assert(906 === root_child0_child0_child1_child0.getComputedWidth(), "906 === root_child0_child0_child1_child0.getComputedWidth() (" + root_child0_child0_child1_child0.getComputedWidth() + ")");
    assert(72 === root_child0_child0_child1_child0.getComputedHeight(), "72 === root_child0_child0_child1_child0.getComputedHeight() (" + root_child0_child0_child1_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child1_child0_child0.getComputedLeft(), "0 === root_child0_child0_child1_child0_child0.getComputedLeft() (" + root_child0_child0_child1_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child1_child0_child0.getComputedTop(), "0 === root_child0_child0_child1_child0_child0.getComputedTop() (" + root_child0_child0_child1_child0_child0.getComputedTop() + ")");
    assert(72 === root_child0_child0_child1_child0_child0.getComputedWidth(), "72 === root_child0_child0_child1_child0_child0.getComputedWidth() (" + root_child0_child0_child1_child0_child0.getComputedWidth() + ")");
    assert(72 === root_child0_child0_child1_child0_child0.getComputedHeight(), "72 === root_child0_child0_child1_child0_child0.getComputedHeight() (" + root_child0_child0_child1_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child1_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child1_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child1_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child1_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child1_child0_child0_child0.getComputedTop() (" + root_child0_child0_child1_child0_child0_child0.getComputedTop() + ")");
    assert(72 === root_child0_child0_child1_child0_child0_child0.getComputedWidth(), "72 === root_child0_child0_child1_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child1_child0_child0_child0.getComputedWidth() + ")");
    assert(72 === root_child0_child0_child1_child0_child0_child0.getComputedHeight(), "72 === root_child0_child0_child1_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child1_child0_child0_child0.getComputedHeight() + ")");

    assert(72 === root_child0_child0_child1_child0_child1.getComputedLeft(), "72 === root_child0_child0_child1_child0_child1.getComputedLeft() (" + root_child0_child0_child1_child0_child1.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child1_child0_child1.getComputedTop(), "0 === root_child0_child0_child1_child0_child1.getComputedTop() (" + root_child0_child0_child1_child0_child1.getComputedTop() + ")");
    assert(72 === root_child0_child0_child1_child0_child1.getComputedWidth(), "72 === root_child0_child0_child1_child0_child1.getComputedWidth() (" + root_child0_child0_child1_child0_child1.getComputedWidth() + ")");
    assert(39 === root_child0_child0_child1_child0_child1.getComputedHeight(), "39 === root_child0_child0_child1_child0_child1.getComputedHeight() (" + root_child0_child0_child1_child0_child1.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child1_child0_child1_child0.getComputedLeft(), "36 === root_child0_child0_child1_child0_child1_child0.getComputedLeft() (" + root_child0_child0_child1_child0_child1_child0.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child1_child0_child1_child0.getComputedTop(), "21 === root_child0_child0_child1_child0_child1_child0.getComputedTop() (" + root_child0_child0_child1_child0_child1_child0.getComputedTop() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child0.getComputedWidth(), "0 === root_child0_child0_child1_child0_child1_child0.getComputedWidth() (" + root_child0_child0_child1_child0_child1_child0.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child0.getComputedHeight(), "0 === root_child0_child0_child1_child0_child1_child0.getComputedHeight() (" + root_child0_child0_child1_child0_child1_child0.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child1_child0_child1_child1.getComputedLeft(), "36 === root_child0_child0_child1_child0_child1_child1.getComputedLeft() (" + root_child0_child0_child1_child0_child1_child1.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child1_child0_child1_child1.getComputedTop(), "21 === root_child0_child0_child1_child0_child1_child1.getComputedTop() (" + root_child0_child0_child1_child0_child1_child1.getComputedTop() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child1.getComputedWidth(), "0 === root_child0_child0_child1_child0_child1_child1.getComputedWidth() (" + root_child0_child0_child1_child0_child1_child1.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child1.getComputedHeight(), "0 === root_child0_child0_child1_child0_child1_child1.getComputedHeight() (" + root_child0_child0_child1_child0_child1_child1.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(1080 === root.getComputedWidth(), "1080 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(240 === root.getComputedHeight(), "240 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    assert(0 === root_child0.getComputedTop(), "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    assert(1080 === root_child0.getComputedWidth(), "1080 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    assert(240 === root_child0.getComputedHeight(), "240 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0.getComputedLeft(), "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0.getComputedTop(), "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")");
    assert(1080 === root_child0_child0.getComputedWidth(), "1080 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")");
    assert(240 === root_child0_child0.getComputedHeight(), "240 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")");
    assert(1080 === root_child0_child0_child0.getComputedWidth(), "1080 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")");
    assert(144 === root_child0_child0_child0.getComputedHeight(), "144 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0_child0.getComputedLeft() + ")");
    assert(24 === root_child0_child0_child0_child0.getComputedTop(), "24 === root_child0_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0_child0.getComputedTop() + ")");
    assert(1044 === root_child0_child0_child0_child0.getComputedWidth(), "1044 === root_child0_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0_child0.getComputedWidth() + ")");
    assert(120 === root_child0_child0_child0_child0.getComputedHeight(), "120 === root_child0_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0_child0.getComputedHeight() + ")");

    assert(924 === root_child0_child0_child0_child0_child0.getComputedLeft(), "924 === root_child0_child0_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0_child0_child0.getComputedTop() + ")");
    assert(120 === root_child0_child0_child0_child0_child0.getComputedWidth(), "120 === root_child0_child0_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0_child0_child0.getComputedWidth() + ")");
    assert(120 === root_child0_child0_child0_child0_child0.getComputedHeight(), "120 === root_child0_child0_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child0_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child0_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child0_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0_child0_child0_child0.getComputedTop() + ")");
    assert(120 === root_child0_child0_child0_child0_child0_child0.getComputedWidth(), "120 === root_child0_child0_child0_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0_child0_child0_child0.getComputedWidth() + ")");
    assert(120 === root_child0_child0_child0_child0_child0_child0.getComputedHeight(), "120 === root_child0_child0_child0_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0_child0_child0_child0.getComputedHeight() + ")");

    assert(816 === root_child0_child0_child0_child0_child1.getComputedLeft(), "816 === root_child0_child0_child0_child0_child1.getComputedLeft() (" + root_child0_child0_child0_child0_child1.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child0_child0_child1.getComputedTop(), "0 === root_child0_child0_child0_child0_child1.getComputedTop() (" + root_child0_child0_child0_child0_child1.getComputedTop() + ")");
    assert(72 === root_child0_child0_child0_child0_child1.getComputedWidth(), "72 === root_child0_child0_child0_child0_child1.getComputedWidth() (" + root_child0_child0_child0_child0_child1.getComputedWidth() + ")");
    assert(39 === root_child0_child0_child0_child0_child1.getComputedHeight(), "39 === root_child0_child0_child0_child0_child1.getComputedHeight() (" + root_child0_child0_child0_child0_child1.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child0_child0_child1_child0.getComputedLeft(), "36 === root_child0_child0_child0_child0_child1_child0.getComputedLeft() (" + root_child0_child0_child0_child0_child1_child0.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child0_child0_child1_child0.getComputedTop(), "21 === root_child0_child0_child0_child0_child1_child0.getComputedTop() (" + root_child0_child0_child0_child0_child1_child0.getComputedTop() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child0.getComputedWidth(), "0 === root_child0_child0_child0_child0_child1_child0.getComputedWidth() (" + root_child0_child0_child0_child0_child1_child0.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child0.getComputedHeight(), "0 === root_child0_child0_child0_child0_child1_child0.getComputedHeight() (" + root_child0_child0_child0_child0_child1_child0.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child0_child0_child1_child1.getComputedLeft(), "36 === root_child0_child0_child0_child0_child1_child1.getComputedLeft() (" + root_child0_child0_child0_child0_child1_child1.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child0_child0_child1_child1.getComputedTop(), "21 === root_child0_child0_child0_child0_child1_child1.getComputedTop() (" + root_child0_child0_child0_child0_child1_child1.getComputedTop() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child1.getComputedWidth(), "0 === root_child0_child0_child0_child0_child1_child1.getComputedWidth() (" + root_child0_child0_child0_child0_child1_child1.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child0_child0_child1_child1.getComputedHeight(), "0 === root_child0_child0_child0_child0_child1_child1.getComputedHeight() (" + root_child0_child0_child0_child0_child1_child1.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child1.getComputedLeft(), "0 === root_child0_child0_child1.getComputedLeft() (" + root_child0_child0_child1.getComputedLeft() + ")");
    assert(144 === root_child0_child0_child1.getComputedTop(), "144 === root_child0_child0_child1.getComputedTop() (" + root_child0_child0_child1.getComputedTop() + ")");
    assert(1080 === root_child0_child0_child1.getComputedWidth(), "1080 === root_child0_child0_child1.getComputedWidth() (" + root_child0_child0_child1.getComputedWidth() + ")");
    assert(96 === root_child0_child0_child1.getComputedHeight(), "96 === root_child0_child0_child1.getComputedHeight() (" + root_child0_child0_child1.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child1_child0.getComputedLeft(), "0 === root_child0_child0_child1_child0.getComputedLeft() (" + root_child0_child0_child1_child0.getComputedLeft() + ")");
    assert(24 === root_child0_child0_child1_child0.getComputedTop(), "24 === root_child0_child0_child1_child0.getComputedTop() (" + root_child0_child0_child1_child0.getComputedTop() + ")");
    assert(906 === root_child0_child0_child1_child0.getComputedWidth(), "906 === root_child0_child0_child1_child0.getComputedWidth() (" + root_child0_child0_child1_child0.getComputedWidth() + ")");
    assert(72 === root_child0_child0_child1_child0.getComputedHeight(), "72 === root_child0_child0_child1_child0.getComputedHeight() (" + root_child0_child0_child1_child0.getComputedHeight() + ")");

    assert(834 === root_child0_child0_child1_child0_child0.getComputedLeft(), "834 === root_child0_child0_child1_child0_child0.getComputedLeft() (" + root_child0_child0_child1_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child1_child0_child0.getComputedTop(), "0 === root_child0_child0_child1_child0_child0.getComputedTop() (" + root_child0_child0_child1_child0_child0.getComputedTop() + ")");
    assert(72 === root_child0_child0_child1_child0_child0.getComputedWidth(), "72 === root_child0_child0_child1_child0_child0.getComputedWidth() (" + root_child0_child0_child1_child0_child0.getComputedWidth() + ")");
    assert(72 === root_child0_child0_child1_child0_child0.getComputedHeight(), "72 === root_child0_child0_child1_child0_child0.getComputedHeight() (" + root_child0_child0_child1_child0_child0.getComputedHeight() + ")");

    assert(0 === root_child0_child0_child1_child0_child0_child0.getComputedLeft(), "0 === root_child0_child0_child1_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child1_child0_child0_child0.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child1_child0_child0_child0.getComputedTop(), "0 === root_child0_child0_child1_child0_child0_child0.getComputedTop() (" + root_child0_child0_child1_child0_child0_child0.getComputedTop() + ")");
    assert(72 === root_child0_child0_child1_child0_child0_child0.getComputedWidth(), "72 === root_child0_child0_child1_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child1_child0_child0_child0.getComputedWidth() + ")");
    assert(72 === root_child0_child0_child1_child0_child0_child0.getComputedHeight(), "72 === root_child0_child0_child1_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child1_child0_child0_child0.getComputedHeight() + ")");

    assert(726 === root_child0_child0_child1_child0_child1.getComputedLeft(), "726 === root_child0_child0_child1_child0_child1.getComputedLeft() (" + root_child0_child0_child1_child0_child1.getComputedLeft() + ")");
    assert(0 === root_child0_child0_child1_child0_child1.getComputedTop(), "0 === root_child0_child0_child1_child0_child1.getComputedTop() (" + root_child0_child0_child1_child0_child1.getComputedTop() + ")");
    assert(72 === root_child0_child0_child1_child0_child1.getComputedWidth(), "72 === root_child0_child0_child1_child0_child1.getComputedWidth() (" + root_child0_child0_child1_child0_child1.getComputedWidth() + ")");
    assert(39 === root_child0_child0_child1_child0_child1.getComputedHeight(), "39 === root_child0_child0_child1_child0_child1.getComputedHeight() (" + root_child0_child0_child1_child0_child1.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child1_child0_child1_child0.getComputedLeft(), "36 === root_child0_child0_child1_child0_child1_child0.getComputedLeft() (" + root_child0_child0_child1_child0_child1_child0.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child1_child0_child1_child0.getComputedTop(), "21 === root_child0_child0_child1_child0_child1_child0.getComputedTop() (" + root_child0_child0_child1_child0_child1_child0.getComputedTop() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child0.getComputedWidth(), "0 === root_child0_child0_child1_child0_child1_child0.getComputedWidth() (" + root_child0_child0_child1_child0_child1_child0.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child0.getComputedHeight(), "0 === root_child0_child0_child1_child0_child1_child0.getComputedHeight() (" + root_child0_child0_child1_child0_child1_child0.getComputedHeight() + ")");

    assert(36 === root_child0_child0_child1_child0_child1_child1.getComputedLeft(), "36 === root_child0_child0_child1_child0_child1_child1.getComputedLeft() (" + root_child0_child0_child1_child0_child1_child1.getComputedLeft() + ")");
    assert(21 === root_child0_child0_child1_child0_child1_child1.getComputedTop(), "21 === root_child0_child0_child1_child0_child1_child1.getComputedTop() (" + root_child0_child0_child1_child0_child1_child1.getComputedTop() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child1.getComputedWidth(), "0 === root_child0_child0_child1_child0_child1_child1.getComputedWidth() (" + root_child0_child0_child1_child0_child1_child1.getComputedWidth() + ")");
    assert(0 === root_child0_child0_child1_child0_child1_child1.getComputedHeight(), "0 === root_child0_child0_child1_child0_child1_child1.getComputedHeight() (" + root_child0_child0_child1_child0_child1_child1.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
