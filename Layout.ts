export default class Layout {
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

  toString() {
    return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;
  }
}
