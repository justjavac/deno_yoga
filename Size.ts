export class Size {
  readonly width: number;
  readonly height: number;

  static fromJS({ width, height }: Size) {
    return new Size(width, height);
  }

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  toString() {
    return `<Size#${this.width}x${this.height}>`;
  }
}
