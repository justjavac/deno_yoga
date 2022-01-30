import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as Yoga from "../mod.ts";

Deno.test("empty node", () => {
  const root = Yoga.Node.create();

  assertEquals(root.getComputedLeft(), 0);
  assertEquals(root.getComputedTop(), 0);
  assertEquals(root.getComputedRight(), 0);
  assertEquals(root.getComputedBottom(), 0);
  assertEquals(root.getComputedWidth(), null);
  assertEquals(root.getComputedHeight(), null);
});
