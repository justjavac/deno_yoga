import * as Yoga from "../mod.ts";

const config = Yoga.Config.create();

const root = Yoga.Node.create(config);
root.setWidth(100);
root.setHeight(100);

const root_child0 = Yoga.Node.create(config);
root_child0.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
root_child0.setPosition(Yoga.EDGE_END, 10);
root_child0.setPosition(Yoga.EDGE_BOTTOM, 10);
root_child0.setWidth(10);
root_child0.setHeight(10);
root.insertChild(root_child0, 0);

root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

console.log(root.getComputedLayout());
console.log(root_child0.getComputedLayout());

root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

console.log(root.getComputedLayout());
console.log(root_child0.getComputedLayout());

root.freeRecursive();
config.free();
