export * from "./constants.ts";

import * as C from "./constants.ts";
import ffi from "./ffi.ts";
import Layout from "./Layout.ts";
import Value from "./Value.ts";

const nodeContext = new Map<BigInt, Node>();

export class Node {
  #node: Deno.UnsafePointer;

  static create(config?: Config): Node {
    return config ? new Node(config) : new Node();
  }

  static createDefault(): Node {
    return new Node();
  }

  static createWithConfig(config: Config): Node {
    return new Node(config);
  }

  static destroy(node: Node): void {
    node.free();
  }

  private constructor(config?: Config) {
    this.#node = config ? ffi.symbols.YGNodeNewWithConfig(config.ptr) : ffi.symbols.YGNodeNew();
    // lib.symbols.YGNodeSetContext(node, new Deno.UnsafePointer(0n));
    nodeContext.set(this.#node.value, this);
  }

  private static fromYGNode(node: Deno.UnsafePointer): Node {
    // lib.symbols.YGNodeGetContext(node);
    return nodeContext.get(node.value)!;
  }

  get ptr(): Deno.UnsafePointer {
    return this.#node;
  }

  copyStyle(other: Node): void {
    ffi.symbols.YGNodeCopyStyle(this.#node, other.#node);
  }

  free(): void {
    ffi.symbols.YGNodeFree(this.#node);
  }

  freeRecursive(): void {
    for (let t = 0, T = this.getChildCount(); t < T; ++t) {
      this.getChild(0)!.freeRecursive();
    }
    this.free();
  }

  setIsReferenceBaseline(isReferenceBaseline: boolean): void {
    ffi.symbols.YGNodeSetIsReferenceBaseline(this.#node, Number(isReferenceBaseline));
  }

  getAlignContent(): C.YogaAlign {
    return ffi.symbols.YGNodeStyleGetAlignContent(this.#node) as C.YogaAlign;
  }

  getAlignItems(): C.YogaAlign {
    return ffi.symbols.YGNodeStyleGetAlignItems(this.#node) as C.YogaAlign;
  }

  getAlignSelf(): C.YogaAlign {
    return ffi.symbols.YGNodeStyleGetAlignSelf(this.#node) as C.YogaAlign;
  }

  getAspectRatio(): number {
    return ffi.symbols.YGNodeStyleGetAspectRatio(this.#node);
  }

  getBorder(edge: C.YogaEdge): number {
    return ffi.symbols.YGNodeStyleGetBorder(this.#node, edge);
  }

  getChild(index: number): Node | null {
    const ptr = ffi.symbols.YGNodeGetChild(this.#node, index);

    if (ptr.value === 0n) {
      return null;
    }

    return Node.fromYGNode(ptr);
  }

  getChildCount(): number {
    return ffi.symbols.YGNodeGetChildCount(this.#node);
  }

  getDisplay(): C.YogaDisplay {
    return ffi.symbols.YGNodeStyleGetDisplay(this.#node) as C.YogaDisplay;
  }

  getFlexBasis(): number {
    return Value.from(ffi.symbols.YGNodeStyleGetFlexBasis(this.#node)).value;
  }

  getFlexDirection(): C.YogaFlexDirection {
    return ffi.symbols.YGNodeStyleGetFlexDirection(this.#node) as C.YogaFlexDirection;
  }

  getFlexGrow(): number {
    return ffi.symbols.YGNodeStyleGetFlexGrow(this.#node);
  }

  getFlexShrink(): number {
    return ffi.symbols.YGNodeStyleGetFlexShrink(this.#node);
  }

  getFlexWrap(): C.YogaFlexWrap {
    return ffi.symbols.YGNodeStyleGetFlexWrap(this.#node) as C.YogaFlexWrap;
  }

  getHeight(): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetHeight(this.#node));
  }

  getJustifyContent(): C.YogaJustifyContent {
    return ffi.symbols.YGNodeStyleGetJustifyContent(this.#node) as C.YogaJustifyContent;
  }

  getMargin(edge: C.YogaEdge): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetMargin(this.#node, edge));
  }

  getMaxHeight(): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetMaxHeight(this.#node));
  }

  getMaxWidth(): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetMaxWidth(this.#node));
  }

  getMinHeight(): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetMinHeight(this.#node));
  }

  getMinWidth(): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetMinWidth(this.#node));
  }

  getOverflow(): C.YogaOverflow {
    return ffi.symbols.YGNodeStyleGetOverflow(this.#node) as C.YogaOverflow;
  }

  getPadding(edge: C.YogaEdge): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetPadding(this.#node, edge));
  }

  getParent(): Node | null {
    const ptr = ffi.symbols.YGNodeGetParent(this.#node);

    if (ptr.value === 0n) {
      return null;
    }

    return Node.fromYGNode(ptr);
  }

  getPosition(edge: C.YogaEdge): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetPosition(this.#node, edge));
  }

  getPositionType(): C.YogaPositionType {
    return ffi.symbols.YGNodeStyleGetPositionType(this.#node) as C.YogaPositionType;
  }

  getWidth(): Value {
    return Value.from(ffi.symbols.YGNodeStyleGetWidth(this.#node));
  }

  insertChild(child: Node, index: number): void {
    ffi.symbols.YGNodeInsertChild(this.#node, child.#node, index);
  }

  isDirty(): boolean {
    return Boolean(ffi.symbols.YGNodeIsDirty(this.#node));
  }

  markDirty(): void {
    ffi.symbols.YGNodeMarkDirty(this.#node);
  }

  removeChild(child: Node): void {
    ffi.symbols.YGNodeRemoveChild(this.#node, child.#node);
  }

  reset(): void {
    ffi.symbols.YGNodeReset(this.#node);
  }

  setAlignContent(alignContent: C.YogaAlign): void {
    ffi.symbols.YGNodeStyleSetAlignContent(this.#node, alignContent);
  }

  setAlignItems(alignItems: C.YogaAlign): void {
    ffi.symbols.YGNodeStyleSetAlignItems(this.#node, alignItems);
  }

  setAlignSelf(alignSelf: C.YogaAlign): void {
    ffi.symbols.YGNodeStyleSetAlignSelf(this.#node, alignSelf);
  }

  setAspectRatio(aspectRatio: number): void {
    ffi.symbols.YGNodeStyleSetAspectRatio(this.#node, aspectRatio);
  }

  setBorder(edge: C.YogaEdge, borderWidth: number): void {
    ffi.symbols.YGNodeStyleSetBorder(this.#node, edge, borderWidth);
  }

  setDisplay(display: C.YogaDisplay): void {
    ffi.symbols.YGNodeStyleSetDisplay(this.#node, display);
  }

  setFlex(flex: number): void {
    ffi.symbols.YGNodeStyleSetFlex(this.#node, flex);
  }

  setFlexBasis(flexBasis: number | string): void {
    this.#setValueAndUnit("FlexBasis", flexBasis);
  }

  setFlexBasisPercent(flexBasis: number): void {
    ffi.symbols.YGNodeStyleSetFlexBasisPercent(this.#node, flexBasis);
  }

  setFlexDirection(flexDirection: C.YogaFlexDirection): void {
    ffi.symbols.YGNodeStyleSetFlexDirection(this.#node, flexDirection);
  }

  setFlexGrow(flexGrow: number): void {
    ffi.symbols.YGNodeStyleSetFlexGrow(this.#node, flexGrow);
  }

  setFlexShrink(flexShrink: number): void {
    ffi.symbols.YGNodeStyleSetFlexShrink(this.#node, flexShrink);
  }

  setFlexWrap(flexWrap: C.YogaFlexWrap): void {
    ffi.symbols.YGNodeStyleSetFlexWrap(this.#node, flexWrap);
  }

  setHeight(height: number | string): void {
    this.#setValueAndUnit("Height", height);
  }

  setHeightAuto(): void {
    ffi.symbols.YGNodeStyleSetHeightAuto(this.#node);
  }

  setHeightPercent(height: number): void {
    ffi.symbols.YGNodeStyleSetHeightPercent(this.#node, height);
  }

  setJustifyContent(justifyContent: C.YogaJustifyContent): void {
    ffi.symbols.YGNodeStyleSetJustifyContent(this.#node, justifyContent);
  }

  setMargin(edge: C.YogaEdge, margin: number | string): void {
    this.#setValueAndUnit("Margin", edge, margin);
  }

  setMarginAuto(edge: C.YogaEdge): void {
    ffi.symbols.YGNodeStyleSetMarginAuto(this.#node, edge);
  }

  setMarginPercent(edge: C.YogaEdge, margin: number): void {
    ffi.symbols.YGNodeStyleSetMarginPercent(this.#node, edge, margin);
  }

  setMaxHeight(maxHeight: number | string): void {
    this.#setValueAndUnit("MaxHeight", maxHeight);
  }

  setMaxHeightPercent(maxHeight: number): void {
    ffi.symbols.YGNodeStyleSetMaxHeightPercent(this.#node, maxHeight);
  }

  setMaxWidth(maxWidth: number | string): void {
    this.#setValueAndUnit("MaxWidth", maxWidth);
  }

  setMaxWidthPercent(maxWidth: number): void {
    ffi.symbols.YGNodeStyleSetMaxWidthPercent(this.#node, maxWidth);
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
    this.#setValueAndUnit("MinHeight", minHeight);
  }

  setMinHeightPercent(minHeight: number): void {
    ffi.symbols.YGNodeStyleSetMinHeightPercent(this.#node, minHeight);
  }

  setMinWidth(minWidth: number | string): void {
    this.#setValueAndUnit("MinWidth", minWidth);
  }

  setMinWidthPercent(minWidth: number): void {
    ffi.symbols.YGNodeStyleSetMinWidthPercent(this.#node, minWidth);
  }

  setOverflow(overflow: C.YogaOverflow): void {
    ffi.symbols.YGNodeStyleSetOverflow(this.#node, overflow);
  }

  setPadding(edge: C.YogaEdge, padding: number | string): void {
    this.#setValueAndUnit("Padding", edge, padding);
  }

  setPaddingPercent(edge: C.YogaEdge, padding: number): void {
    ffi.symbols.YGNodeStyleSetPaddingPercent(this.#node, edge, padding);
  }

  setPosition(edge: C.YogaEdge, position: number | string): void {
    this.#setValueAndUnit("Position", edge, position);
  }

  setPositionPercent(edge: C.YogaEdge, position: number): void {
    ffi.symbols.YGNodeStyleSetPositionPercent(this.#node, edge, position);
  }

  setPositionType(positionType: C.YogaPositionType): void {
    ffi.symbols.YGNodeStyleSetPositionType(this.#node, positionType);
  }

  setWidth(width: number | string): void {
    this.#setValueAndUnit("Width", width);
  }

  setWidthAuto(): void {
    ffi.symbols.YGNodeStyleSetWidthAuto(this.#node);
  }

  setWidthPercent(width: number): void {
    ffi.symbols.YGNodeStyleSetWidthPercent(this.#node, width);
  }

  unsetMeasureFunc(): void {
    // TODO
  }

  calculateLayout(width = C.NAN, height = C.NAN, direction: C.YogaDirection = C.DIRECTION_LTR) {
    ffi.symbols.YGNodeCalculateLayoutWithMagicNAN(this.#node, width, height, direction);
  }

  getComputedLeft(): number {
    return ffi.symbols.YGNodeLayoutGetLeft(this.#node);
  }

  getComputedTop(): number {
    return ffi.symbols.YGNodeLayoutGetTop(this.#node);
  }

  getComputedRight(): number {
    return ffi.symbols.YGNodeLayoutGetRight(this.#node);
  }

  getComputedBottom(): number {
    return ffi.symbols.YGNodeLayoutGetBottom(this.#node);
  }

  getComputedWidth(): number {
    return ffi.symbols.YGNodeLayoutGetWidth(this.#node);
  }

  getComputedHeight(): number {
    return ffi.symbols.YGNodeLayoutGetHeight(this.#node);
  }

  getComputedLayout(): Layout {
    const left = ffi.symbols.YGNodeLayoutGetLeft(this.#node);
    const right = ffi.symbols.YGNodeLayoutGetRight(this.#node);
    const top = ffi.symbols.YGNodeLayoutGetTop(this.#node);
    const bottom = ffi.symbols.YGNodeLayoutGetBottom(this.#node);
    const width = ffi.symbols.YGNodeLayoutGetWidth(this.#node);
    const height = ffi.symbols.YGNodeLayoutGetHeight(this.#node);
    return new Layout(left, right, top, bottom, width, height);
  }

  getComputedBorder(edge: C.YogaEdge): number {
    return ffi.symbols.YGNodeLayoutGetBorder(this.#node, edge);
  }

  getComputedMargin(edge: C.YogaEdge): number {
    return ffi.symbols.YGNodeLayoutGetMargin(this.#node, edge);
  }

  getComputedPadding(edge: C.YogaEdge): number {
    return ffi.symbols.YGNodeLayoutGetPadding(this.#node, edge);
  }

  #setValueAndUnit(fnName: string, ...args: unknown[]): void {
    const methods: Record<number, string> = {
      [C.UNIT_POINT]: `YGNodeStyleSet${fnName}`,
      [C.UNIT_PERCENT]: `YGNodeStyleSet${fnName}Percent`,
      [C.UNIT_AUTO]: `YGNodeStyleSet${fnName}Auto`,
    };

    // We patch all these functions to add support for the following calls:
    // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

    const value = args.pop() as string | number | Value;
    let unit: C.YogaUnit | number;
    let asNumber: number | undefined;

    if (typeof value === "number") {
      unit = C.UNIT_POINT;
      asNumber = value;
    } else if (value === "auto") {
      unit = C.UNIT_AUTO;
      asNumber = undefined;
    } else if (value instanceof Value) {
      unit = value.unit;
      asNumber = value.valueOf();
    } else {
      unit = typeof value === "string" && value.endsWith("%") ? C.UNIT_PERCENT : C.UNIT_POINT;
      asNumber = parseFloat(value);
      if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
        throw new Error(`Invalid value ${value} for set${fnName}`);
      }
    }

    if (!methods[unit]) {
      throw new Error(
        `Failed to execute "${fnName}": Unsupported unit '${value}'`,
      );
    }

    if (asNumber !== undefined) {
      args.push(asNumber);
    }

    // deno-lint-ignore ban-types
    (ffi.symbols[methods[unit] as keyof typeof ffi.symbols] as Function).call(null, this.#node, ...args);
  }
}

export class Config {
  #config: Deno.UnsafePointer;

  static create(): Config {
    return new Config(ffi.symbols.YGConfigNew());
  }

  static destroy(config: Config) {
    config.free();
  }

  private constructor(config: Deno.UnsafePointer) {
    this.#config = config;
  }

  get ptr(): Deno.UnsafePointer {
    return this.#config;
  }

  isExperimentalFeatureEnabled(feature: C.YogaExperimentalFeature): boolean {
    return Boolean(ffi.symbols.YGConfigIsExperimentalFeatureEnabled(this.#config, feature));
  }

  setExperimentalFeatureEnabled(
    feature: C.YogaExperimentalFeature,
    enabled: boolean,
  ): void {
    ffi.symbols.YGConfigSetExperimentalFeatureEnabled(this.#config, feature, Number(enabled));
  }

  setPointScaleFactor(factor: number): void {
    ffi.symbols.YGConfigSetPointScaleFactor(this.#config, factor);
  }

  free(): void {
    ffi.symbols.YGConfigFree(this.#config);
  }
}

export function getInstanceCount(): number {
  return ffi.symbols.YGConfigGetInstanceCount();
}
