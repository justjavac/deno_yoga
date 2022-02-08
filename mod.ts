export * from "./constants.ts";

import { getLibPath } from "./utils.ts";
import * as C from "./constants.ts";
import { Layout } from "./Layout.ts";
import { Value } from "./Value.ts";

const lib = Deno.dlopen(getLibPath("yogacore"), {
  YGNodeNew: { parameters: [], result: "pointer" },
  YGNodeNewWithConfig: { parameters: ["pointer"], result: "pointer" },
  YGNodeFree: { parameters: ["pointer"], result: "void" },
  YGNodeReset: { parameters: ["pointer"], result: "void" },

  YGNodeSetContext: { parameters: ["pointer", "pointer"], result: "void" },
  YGNodeGetContext: { parameters: ["pointer"], result: "pointer" },

  YGConfigNew: { parameters: [], result: "pointer" },
  YGConfigFree: { parameters: ["pointer"], result: "void" },
  YGConfigSetExperimentalFeatureEnabled: { parameters: ["pointer", "i32", "i32"], result: "void" },
  YGConfigSetPointScaleFactor: { parameters: ["pointer", "f32"], result: "void" },
  // YGConfigIsExperimentalFeatureEnabled: { parameters: ["pointer", "i32"], result: "void" },

  YGNodeCopyStyle: { parameters: ["pointer", "pointer"], result: "void" },
  YGNodeStyleSetPositionType: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetPosition: { parameters: ["pointer", "i32", "i32"], result: "void" },
  YGNodeStyleSetPositionPercent: { parameters: ["pointer", "i32", "i32"], result: "void" },
  YGNodeStyleSetAlignContent: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetAlignItems: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetAlignSelf: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetFlexDirection: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetFlexWrap: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetJustifyContent: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetMargin: { parameters: ["pointer", "i32", "i32"], result: "void" },
  YGNodeStyleSetMarginPercent: { parameters: ["pointer", "i32", "f32"], result: "void" },
  YGNodeStyleSetMarginAuto: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetOverflow: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetDisplay: { parameters: ["pointer", "i32"], result: "void" },
  YGNodeStyleSetFlex: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetFlexBasis: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetFlexBasisPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetFlexGrow: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetFlexShrink: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetWidth: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetWidthPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetWidthAuto: { parameters: ["pointer"], result: "void" },
  YGNodeStyleSetHeight: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetHeightPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetHeightAuto: { parameters: ["pointer"], result: "void" },
  YGNodeStyleSetMinWidth: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMinWidthPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMinHeight: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMinHeightPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMaxWidth: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMaxWidthPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMaxHeight: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetMaxHeightPercent: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetAspectRatio: { parameters: ["pointer", "f32"], result: "void" },
  YGNodeStyleSetBorder: { parameters: ["pointer", "i32", "f32"], result: "void" },
  YGNodeStyleSetPadding: { parameters: ["pointer", "i32", "f32"], result: "void" },
  YGNodeStyleSetPaddingPercent: { parameters: ["pointer", "i32", "f32"], result: "void" },
  YGNodeSetIsReferenceBaseline: { parameters: ["pointer", "i32"], result: "void" },

  YGNodeStyleGetPositionType: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetPosition: { parameters: ["pointer", "i32"], result: "u64" },
  YGNodeStyleGetAlignContent: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetAlignItems: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetAlignSelf: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetFlexDirection: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetFlexWrap: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetJustifyContent: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetMargin: { parameters: ["pointer", "i32"], result: "u64" },
  YGNodeStyleGetOverflow: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetDisplay: { parameters: ["pointer"], result: "i32" },
  YGNodeStyleGetFlexBasis: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetFlexGrow: { parameters: ["pointer"], result: "f32" },
  YGNodeStyleGetFlexShrink: { parameters: ["pointer"], result: "f32" },
  YGNodeStyleGetWidth: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetHeight: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetMinWidth: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetMinHeight: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetMaxWidth: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetMaxHeight: { parameters: ["pointer"], result: "u64" },
  YGNodeStyleGetAspectRatio: { parameters: ["pointer"], result: "f32" },
  YGNodeStyleGetBorder: { parameters: ["pointer", "i32"], result: "f32" },
  YGNodeStyleGetPadding: { parameters: ["pointer", "i32"], result: "u64" },
  YGNodeIsReferenceBaseline: { parameters: ["pointer"], result: "i32" },

  YGNodeInsertChild: { parameters: ["pointer", "pointer", "usize"], result: "void" },
  YGNodeRemoveChild: { parameters: ["pointer", "pointer"], result: "void" },
  YGNodeGetChildCount: { parameters: ["pointer"], result: "usize" },
  YGNodeGetParent: { parameters: ["pointer"], result: "pointer" },
  YGNodeGetChild: { parameters: ["pointer", "usize"], result: "pointer" },

  YGNodeSetMeasureFunc: { parameters: ["pointer", "pointer"], result: "void" },
  YGNodeSetDirtiedFunc: { parameters: ["pointer", "pointer"], result: "void" },

  YGNodeMarkDirty: { parameters: ["pointer"], result: "void" },
  YGNodeIsDirty: { parameters: ["pointer"], result: "i32" },

  YGNodeCalculateLayout: { parameters: ["pointer", "f32", "f32", "i32"], result: "void" },
  YGNodeLayoutGetLeft: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetRight: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetTop: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetBottom: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetWidth: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetHeight: { parameters: ["pointer"], result: "f32" },
  YGNodeLayoutGetMargin: { parameters: ["pointer", "i32"], result: "f32" },
  YGNodeLayoutGetBorder: { parameters: ["pointer", "i32"], result: "f32" },
  YGNodeLayoutGetPadding: { parameters: ["pointer", "i32"], result: "f32" },
});

const nodeContext = new Map<BigInt, YogaNode>();

export class YogaNode {
  #node: Deno.UnsafePointer;

  private constructor(config?: YogaConfig) {
    this.#node = config ? lib.symbols.YGNodeNewWithConfig(config.ptr) : lib.symbols.YGNodeNew();
    // this.setFlexDirection(C.FLEX_DIRECTION_ROW);
    // lib.symbols.YGNodeSetContext(node, new Deno.UnsafePointer(0n));
    nodeContext.set(this.#node.value, this);
  }

  private static fromYGNode(node: Deno.UnsafePointer): YogaNode {
    // lib.symbols.YGNodeGetContext(node);
    return nodeContext.get(node.value)!;
  }

  get ptr(): Deno.UnsafePointer {
    return this.#node;
  }

  copyStyle(other: YogaNode): void {
    return lib.symbols.YGNodeCopyStyle(other.#node);
  }

  free(): void {
    return lib.symbols.YGNodeFree(this.#node);
  }

  freeRecursive(): void {
    for (let t = 0, T = this.getChildCount(); t < T; ++t) {
      this.getChild(0)!.freeRecursive();
    }
    this.free();
  }

  getAlignContent(): C.YogaAlign {
    return lib.symbols.YGNodeStyleGetAlignContent(this.#node) as C.YogaAlign;
  }

  getAlignItems(): C.YogaAlign {
    return lib.symbols.YGNodeStyleGetAlignItems(this.#node) as C.YogaAlign;
  }

  getAlignSelf(): C.YogaAlign {
    return lib.symbols.YGNodeStyleGetAlignSelf(this.#node) as C.YogaAlign;
  }

  getAspectRatio(): number {
    return lib.symbols.YGNodeStyleGetAspectRatio(this.#node);
  }

  getBorder(edge: C.YogaEdge): number {
    return lib.symbols.YGNodeStyleGetBorder(this.#node, edge);
  }

  getChild(index: number): YogaNode | null {
    const ptr = lib.symbols.YGNodeGetChild(this.#node, index);

    if (ptr.value === 0n) {
      return null;
    }

    return YogaNode.fromYGNode(ptr);
  }

  getChildCount(): number {
    return lib.symbols.YGNodeGetChildCount(this.#node);
  }

  getDisplay(): C.YogaDisplay {
    return lib.symbols.YGNodeStyleGetDisplay(this.#node) as C.YogaDisplay;
  }

  getFlexBasis(): number {
    return Value.from(lib.symbols.YGNodeStyleGetFlexBasis(this.#node)).value;
  }

  getFlexDirection(): C.YogaFlexDirection {
    return lib.symbols.YGNodeStyleGetFlexDirection(this.#node) as C.YogaFlexDirection;
  }

  getFlexGrow(): number {
    return lib.symbols.YGNodeStyleGetFlexGrow(this.#node);
  }

  getFlexShrink(): number {
    return lib.symbols.YGNodeStyleGetFlexShrink(this.#node);
  }

  getFlexWrap(): C.YogaFlexWrap {
    return lib.symbols.YGNodeStyleGetFlexWrap(this.#node) as C.YogaFlexWrap;
  }

  getHeight(): Value {
    return Value.from(lib.symbols.YGNodeStyleGetHeight(this.#node));
  }

  getJustifyContent(): C.YogaJustifyContent {
    return lib.symbols.YGNodeStyleGetJustifyContent(this.#node) as C.YogaJustifyContent;
  }

  getMargin(edge: C.YogaEdge): Value {
    return Value.from(lib.symbols.YGNodeStyleGetMargin(this.#node, edge));
  }

  getMaxHeight(): Value {
    return Value.from(lib.symbols.YGNodeStyleGetMaxHeight(this.#node));
  }

  getMaxWidth(): Value {
    return Value.from(lib.symbols.YGNodeStyleGetMaxWidth(this.#node));
  }

  getMinHeight(): Value {
    return Value.from(lib.symbols.YGNodeStyleGetMinHeight(this.#node));
  }

  getMinWidth(): Value {
    return Value.from(lib.symbols.YGNodeStyleGetMinWidth(this.#node));
  }

  getOverflow(): C.YogaOverflow {
    return lib.symbols.YGNodeStyleGetOverflow(this.#node) as C.YogaOverflow;
  }

  getPadding(edge: C.YogaEdge): Value {
    return Value.from(lib.symbols.YGNodeStyleGetPadding(this.#node, edge));
  }

  getParent(): YogaNode | null {
    const ptr = lib.symbols.YGNodeGetParent(this.#node);

    if (ptr.value === 0n) {
      return null;
    }

    return YogaNode.fromYGNode(ptr);
  }

  getPosition(edge: C.YogaEdge): Value {
    return Value.from(lib.symbols.YGNodeStyleGetPosition(this.#node, edge));
  }

  getPositionType(): C.YogaPositionType {
    return lib.symbols.YGNodeStyleGetPositionType(this.#node) as C.YogaPositionType;
  }

  getWidth(): Value {
    return Value.from(lib.symbols.YGNodeStyleGetWidth(this.#node));
  }

  insertChild(child: YogaNode, index: number): void {
    return lib.symbols.YGNodeInsertChild(this.#node, child.#node, index);
  }

  isDirty(): boolean {
    return Boolean(lib.symbols.YGNodeIsDirty(this.#node));
  }

  markDirty(): void {
    return lib.symbols.YGNodeMarkDirty(this.#node);
  }

  removeChild(child: YogaNode): void {
    return lib.symbols.YGNodeRemoveChild(this.#node, child.#node);
  }

  reset(): void {
    return lib.symbols.YGNodeReset(this.#node);
  }

  setAlignContent(alignContent: C.YogaAlign): void {
    return lib.symbols.YGNodeStyleSetAlignContent(this.#node, alignContent);
  }

  setAlignItems(alignItems: C.YogaAlign): void {
    return lib.symbols.YGNodeStyleSetAlignItems(this.#node, alignItems);
  }

  setAlignSelf(alignSelf: C.YogaAlign): void {
    return lib.symbols.YGNodeStyleSetAlignSelf(this.#node, alignSelf);
  }

  setAspectRatio(aspectRatio: number): void {
    return lib.symbols.YGNodeStyleSetAspectRatio(this.#node, aspectRatio);
  }

  setBorder(edge: C.YogaEdge, borderWidth: number): void {
    return lib.symbols.YGNodeStyleSetBorder(this.#node, edge, borderWidth);
  }

  setDisplay(display: C.YogaDisplay): void {
    return lib.symbols.YGNodeStyleSetDisplay(this.#node, display);
  }

  setFlex(flex: number): void {
    return lib.symbols.YGNodeStyleSetFlex(this.#node, flex);
  }

  setFlexBasis(flexBasis: number | string): void {
    if (typeof flexBasis === "number") {
      return lib.symbols.YGNodeStyleSetFlexBasis(this.#node, flexBasis);
    }

    // else
  }

  setFlexBasisPercent(flexBasis: number): void {
    return lib.symbols.YGNodeStyleSetFlexBasisPercent(this.#node, flexBasis);
  }

  setFlexDirection(flexDirection: C.YogaFlexDirection): void {
    return lib.symbols.YGNodeStyleSetFlexDirection(this.#node, flexDirection);
  }

  setFlexGrow(flexGrow: number): void {
    return lib.symbols.YGNodeStyleSetFlexGrow(this.#node, flexGrow);
  }

  setFlexShrink(flexShrink: number): void {
    return lib.symbols.YGNodeStyleSetFlexShrink(this.#node, flexShrink);
  }

  setFlexWrap(flexWrap: C.YogaFlexWrap): void {
    return lib.symbols.YGNodeStyleSetFlexWrap(this.#node, flexWrap);
  }

  setHeight(height: number | string): void {
    if (typeof height === "number") {
      return lib.symbols.YGNodeStyleSetHeight(this.#node, height);
    }

    // else
  }

  setHeightAuto(): void {
    return lib.symbols.YGNodeStyleSetHeightAuto(this.#node);
  }

  setHeightPercent(height: number): void {
    return lib.symbols.YGNodeStyleSetHeightPercent(this.#node, height);
  }

  setJustifyContent(justifyContent: C.YogaJustifyContent): void {
    return lib.symbols.YGNodeStyleSetJustifyContent(this.#node, justifyContent);
  }

  setMargin(edge: C.YogaEdge, margin: number | string): void {
    if (typeof margin === "number") {
      return lib.symbols.YGNodeStyleSetMargin(this.#node, edge, margin);
    }
    // else
  }

  setMarginAuto(edge: C.YogaEdge): void {
    return lib.symbols.YGNodeStyleSetMarginAuto(this.#node, edge);
  }

  setMarginPercent(edge: C.YogaEdge, margin: number): void {
    return lib.symbols.YGNodeStyleSetMarginPercent(this.#node, edge, margin);
  }

  setMaxHeight(maxHeight: number | string): void {
    if (typeof maxHeight === "number") {
      return lib.symbols.YGNodeStyleSetMaxHeight(this.#node, maxHeight);
    }
    // else
  }
  setMaxHeightPercent(maxHeight: number): void {
    return lib.symbols.YGNodeStyleSetMaxHeightPercent(this.#node, maxHeight);
  }
  setMaxWidth(maxWidth: number | string): void {
    if (typeof maxWidth === "number") {
      return lib.symbols.YGNodeStyleSetMaxWidth(this.#node, maxWidth);
    }
    // else
  }
  setMaxWidthPercent(maxWidth: number): void {
    return lib.symbols.YGNodeStyleSetMaxWidthPercent(this.#node, maxWidth);
  }

  setMeasureFunc(
    _measureFunc: (
      width: number,
      widthMeasureMode: C.YogaMeasureMode,
      height: number,
      heightMeasureMode: C.YogaMeasureMode,
    ) => {
      width?: number | undefined;
      height?: number | undefined;
    } | null,
  ): void {
    // TODO
  }

  setMinHeight(minHeight: number | string): void {
    if (typeof minHeight === "number") {
      return lib.symbols.YGNodeStyleSetMinHeight(this.#node, minHeight);
    }
    // else
  }

  setMinHeightPercent(minHeight: number): void {
    return lib.symbols.YGNodeStyleSetMinHeightPercent(this.#node, minHeight);
  }

  setMinWidth(minWidth: number | string): void {
    if (typeof minWidth === "number") {
      return lib.symbols.YGNodeStyleSetMinWidth(this.#node, minWidth);
    }
    // else
  }

  setMinWidthPercent(minWidth: number): void {
    return lib.symbols.YGNodeStyleSetMinWidthPercent(this.#node, minWidth);
  }

  setOverflow(overflow: C.YogaOverflow): void {
    return lib.symbols.YGNodeStyleSetOverflow(this.#node, overflow);
  }

  setPadding(edge: C.YogaEdge, padding: number | string): void {
    if (typeof padding === "number") {
      return lib.symbols.YGNodeStyleSetPadding(this.#node, edge, padding);
    }
    // else
  }

  setPaddingPercent(edge: C.YogaEdge, padding: number): void {
    return lib.symbols.YGNodeStyleSetPaddingPercent(this.#node, edge, padding);
  }

  setPosition(edge: C.YogaEdge, position: number | string): void {
    if (typeof position === "number") {
      return lib.symbols.YGNodeStyleSetPosition(this.#node, edge, position);
    }
    // else
  }
  setPositionPercent(edge: C.YogaEdge, position: number): void {
    return lib.symbols.YGNodeStyleSetPositionPercent(this.#node, edge, position);
  }
  setPositionType(positionType: C.YogaPositionType): void {
    return lib.symbols.YGNodeStyleSetPositionType(this.#node, positionType);
  }

  setWidth(width: number | string): void {
    if (typeof width === "number") {
      return lib.symbols.YGNodeStyleSetWidth(this.#node, width);
    }
    // else
  }

  setWidthAuto(): void {
    return lib.symbols.YGNodeStyleSetWidthAuto(this.#node);
  }

  setWidthPercent(width: number): void {
    return lib.symbols.YGNodeStyleSetWidthPercent(this.#node, width);
  }

  unsetMeasureFunc(): void {
    // TODO
  }

  calculateLayout(width = NaN, height = NaN, direction: C.YogaDirection = C.DIRECTION_LTR) {
    lib.symbols.YGNodeCalculateLayout(this.#node, width, height, direction);
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

  getComputedLayout(): Layout {
    const left = lib.symbols.YGNodeLayoutGetLeft(this.#node);
    const right = lib.symbols.YGNodeLayoutGetRight(this.#node);
    const top = lib.symbols.YGNodeLayoutGetTop(this.#node);
    const bottom = lib.symbols.YGNodeLayoutGetBottom(this.#node);
    const width = lib.symbols.YGNodeLayoutGetWidth(this.#node);
    const height = lib.symbols.YGNodeLayoutGetHeight(this.#node);
    return new Layout(left, right, top, bottom, width, height);
  }

  getComputedBorder(edge: C.YogaEdge): number {
    return lib.symbols.YGNodeLayoutGetBorder(this.#node, edge);
  }

  getComputedMargin(edge: C.YogaEdge): number {
    return lib.symbols.YGNodeLayoutGetMargin(this.#node, edge);
  }

  getComputedPadding(edge: C.YogaEdge): number {
    return lib.symbols.YGNodeLayoutGetPadding(this.#node, edge);
  }
}

export const Node = {
  create(config?: YogaConfig): YogaNode {
    return config ? this.createWithConfig(config) : this.createDefault();
  },

  createDefault(): YogaNode {
    // deno-lint-ignore no-explicit-any
    return new (YogaNode as any)();
  },

  createWithConfig(config: YogaConfig): YogaNode {
    // deno-lint-ignore no-explicit-any
    return new (YogaNode as any)(config);
  },

  destroy(_node: YogaNode): void {
    // return lib.symbols.YGNodeFree(node.#node);
  },
};

export class YogaConfig {
  #config: Deno.UnsafePointer;

  private constructor(config: Deno.UnsafePointer) {
    this.#config = config;
  }

  get ptr(): Deno.UnsafePointer {
    return this.#config;
  }

  isExperimentalFeatureEnabled(_feature: C.YogaExperimentalFeature): boolean {
    // return Boolean(lib.symbols.YGConfigIsExperimentalFeatureEnabled(this.#config, feature));
    return false;
  }

  setExperimentalFeatureEnabled(
    feature: C.YogaExperimentalFeature,
    enabled: boolean,
  ): void {
    return lib.symbols.YGConfigSetExperimentalFeatureEnabled(this.#config, feature, Number(enabled));
  }

  setPointScaleFactor(factor: number): void {
    return lib.symbols.YGConfigSetPointScaleFactor(this.#config, factor);
  }

  free() {
    return lib.symbols.YGConfigFree(this.#config);
  }
}

export const Config = {
  create() {
    // deno-lint-ignore no-explicit-any
    return new (YogaConfig as any)(lib.symbols.YGConfigNew());
  },

  destroy(config: YogaConfig) {
    return config.free();
  },
};

export function getInstanceCount(): number {
  return 1;
}
