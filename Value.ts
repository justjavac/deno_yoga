import * as C from "./constants.ts";

export class Value {
  readonly value: number;
  readonly unit: C.YogaUnit | number;

  constructor(unit: C.YogaUnit | number, value: number) {
    this.unit = unit;
    this.value = value;
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
