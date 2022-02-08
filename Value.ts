import * as C from "./constants.ts";

export class Value {
  readonly value: number;
  readonly unit: C.YogaUnit | number;

  constructor(unit: C.YogaUnit | number, value: number) {
    this.unit = unit;
    this.value = value;
  }

  // TODO(CGQAQ): Swap out this piece of dirty code as soon as *Deno FFI* support return type of struct or typed arrays
  static from(raw: number) {
    const buffer = new ArrayBuffer(8);
    const dv = new DataView(buffer);
    dv.setBigUint64(0, BigInt(raw));

    const unit = dv.getInt32(0);
    const value = dv.getFloat32(4);

    return new Value(unit, value);
  }

  toString() {
    switch (this.unit) {
      case C.UNIT_POINT:
        return String(this.value);
      case C.UNIT_PERCENT:
        return `${this.value}%`;
      case C.UNIT_AUTO:
        return "auto";
      default: {
        return `${this.value}?`;
      }
    }
  }

  valueOf() {
    return this.value;
  }
}
