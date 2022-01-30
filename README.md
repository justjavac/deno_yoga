# deno_yoga

Deno bindings for [yoga](https://github.com/facebook/yoga), using Deno FFI.

## Usage

flags:

`--allow-ffi`: Requires ffi access to "yogacore.dll", "libyogacore.so",
"libyogacore.dylib" `--unstable`: FFI is unstable feature

```ts
import * as Yoga from "https://deno.land/x/yoga/mod.ts";

const root = Yoga.Node.create();
root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(Yoga.JUSTIFY_CENTER);

const node1 = Yoga.Node.create();
node1.setWidth(100);
node1.setHeight(100);

const node2 = Yoga.Node.create();
node2.setWidth(100);
node2.setHeight(100);

root.insertChild(node1, 0);
root.insertChild(node2, 1);

root.calculateLayout(500, 300, Yoga.DIRECTION_LTR);
console.log(root.getComputedLayout());
// {left: 0, top: 0, width: 500, height: 300}
console.log(node1.getComputedLayout());
// {left: 150, top: 0, width: 100, height: 100}
console.log(node2.getComputedLayout());
// {left: 250, top: 0, width: 100, height: 100}
```

## Examples

```bash
deno run --allow-ffi --unstable https://deno.land/x/yoga/examples/basic.ts
```

## License

`deno_yoga` is released under the MIT License. See the bundled
[LICENSE](./LICENSE) file for details.
