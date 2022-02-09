# deno_yoga

Deno bindings for [yoga](https://github.com/facebook/yoga), using Deno FFI.

## Usage

flags:

- `--allow-ffi`: Requires ffi access to "yogacore.dll", "libyogacore.so", "libyogacore.dylib"
- `--unstable`: FFI is unstable feature

```ts
import * as Yoga from "https://deno.land/x/yoga/mod.ts";

const root = Yoga.Node.create();
root.setWidth(500);
root.setHeight(300);
root.setJustifyContent(Yoga.JUSTIFY_CENTER);
root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);

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

console.log(`Height is: ${root.getHeight()}, Width is: ${root.getWidth()}`);
// Height is: 300, Width is: 500
```

## Examples

```bash
deno run --allow-ffi --unstable https://deno.land/x/yoga/examples/basic.ts
```

## Status

- absolute_position_test 10/21
- lign_baseline_test 2/2 ✅
- align_content_test 19/19 ✅
- align_items_test 28/28 ✅
- align_self_test 5/5 ✅
- android_news_feed 1/1 ✅
- border_test 5/5 ✅
- computed_border_test 1/1 ✅
- computed_margin_test 1/1 ✅
- computed_padding_test 1/1 ✅
- dimension_test 2/2 ✅
- dirtied_test 0/4
- display_test 6/6 ✅
- flex_direction_test 6/6 ✅
- flex_test 10/10 ✅
- flex_wrap_test 20/20 ✅
- justify_content_test 18/18 ✅
- margin_test 30/30 ✅
- measure_cache_test 0/1
- measure_test 1/1 ✅
- min_max_dimension_test 26/26 ✅
- padding_test 6/6 ✅
- percentage_test 18/20
- rounding_test 13/13 ✅
- size_overflow_test 3/3 ✅

## License

`deno_yoga` is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
