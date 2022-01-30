export * from "./constants.ts";

import { getLibPath } from "./utils.ts";
import * as C from "./constants.ts";

const lib = Deno.dlopen(getLibPath("yogacore"), {
  YGNodeNew: { parameters: [], result: "pointer" },
  YGNodeCalculateLayout: {
    parameters: ["pointer", "f32", "f32", "i32"],
    result: "void",
  },
  YGNodeLayoutGetLeft: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetTop: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetRight: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetBottom: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetWidth: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetHeight: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetDirection: { parameters: ["pointer"], result: "i32" },
});

export class Layout {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
  readonly width: number;
  readonly height: number;
  constructor(
    left: number,
    right: number,
    top: number,
    bottom: number,
    width: number,
    height: number,
  ) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

class YogaNode {
  #node: Deno.UnsafePointer;

  private constructor(node: Deno.UnsafePointer) {
    this.#node = node;
  }

  calculateLayout(
    width?: number,
    height?: number,
    direction?: C.YogaDirection,
  ): void {
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
}

export class Node {
  static create(): YogaNode {
    // deno-lint-ignore no-explicit-any
    return new (YogaNode as any)(lib.symbols.YGNodeNew());
  }
}
