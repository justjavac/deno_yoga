export * from "./constants.ts";

import { getLibPath } from "./utils.ts";
import * as C from "./constants.ts";

const lib = Deno.dlopen(getLibPath("yogacore"), {
  YGNodeNew: { parameters: [], result: "pointer" },
  YGNodeCalculateLayout: { parameters: ["pointer", "f32", "f32", "i32"], result: "void" },
  YGNodeLayoutGetLeft: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetTop: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetRight: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetBottom: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetWidth: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetHeight: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetDirection: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleSetWidth: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetHeight: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetJustifyContent: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeInsertChild: { parameters: ["pointer", "pointer", "isize"], result: "void" },
  YGNodeSetContext: { parameters: ["pointer", "pointer"], result: "void" },
  YGNodeStyleSetFlexDirection: { parameters: ["pointer", "i32"], result: "void" },
});

export class Layout {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
  readonly width: number;
  readonly height: number;

  constructor(left: number, right: number, top: number, bottom: number, width: number, height: number) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }
}

class YogaNode {
  #node: Deno.UnsafePointer;

  private constructor(node: Deno.UnsafePointer) {
    this.#node = node;
    this.setFlexDirection(C.FLEX_DIRECTION_ROW);
    lib.symbols.YGNodeSetContext(node, new Deno.UnsafePointer(0n));
  }

  calculateLayout(width?: number, height?: number, direction?: C.YogaDirection) {
    lib.symbols.YGNodeCalculateLayout(
      this.#node,
      width ?? 0,
      height ?? 0,
      direction ?? C.DIRECTION_LTR,
    );
  }

  getComputedLeft(): number {
    return lib.symbols.YGNodeLayoutGetLeft(this.#node);
  }

  getComputedTop(): number {
    return lib.symbols.YGNodeLayoutGetTop(this.#node);
  }

  getComputedRight(): number {
    return lib.symbols.YGNodeLayoutGetRight(this.#node);
  }

  getComputedBottom(): number {
    return lib.symbols.YGNodeLayoutGetBottom(this.#node);
  }

  getComputedWidth(): number {
    return lib.symbols.YGNodeLayoutGetWidth(this.#node);
  }

  getComputedHeight(): number {
    return lib.symbols.YGNodeLayoutGetHeight(this.#node);
  }

  getComputedDirection(): C.YogaDirection {
    return lib.symbols.YGNodeLayoutGetDirection(this.#node) as C.YogaDirection;
  }

  getComputedLayout(): Layout {
    const left = lib.symbols.YGNodeLayoutGetLeft(this.#node);
    const right = lib.symbols.YGNodeLayoutGetRight(this.#node);
    const top = lib.symbols.YGNodeLayoutGetTop(this.#node);
    const bottom = lib.symbols.YGNodeLayoutGetBottom(this.#node);
    const width = lib.symbols.YGNodeLayoutGetWidth(this.#node);
    const height = lib.symbols.YGNodeLayoutGetHeight(this.#node);
    return new Layout(left, right, top, bottom, width, height);
  }

  setWidth(width: number) {
    return lib.symbols.YGNodeStyleSetWidth(this.#node, width);
  }

  setHeight(height: number) {
    return lib.symbols.YGNodeStyleSetHeight(this.#node, height);
  }

  setJustifyContent(justifyContent: C.YogaJustifyContent) {
    return lib.symbols.YGNodeStyleSetJustifyContent(this.#node, justifyContent);
  }

  setFlexDirection(flexDirection: C.YogaFlexDirection) {
    return lib.symbols.YGNodeStyleSetFlexDirection(this.#node, flexDirection);
  }

  insertChild(child: YogaNode, index: number) {
    return lib.symbols.YGNodeInsertChild(this.#node, child.#node, index);
  }
}

export class Node {
  static create(): YogaNode {
    // deno-lint-ignore no-explicit-any
    return new (YogaNode as any)(lib.symbols.YGNodeNew());
  }
}
