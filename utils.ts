import { Value } from "./Value.ts";

export function getLibPath(name: string) {
  const [libPrefix, libSuffix] = {
    darwin: ["lib", "dylib"],
    linux: ["lib", "so"],
    windows: ["", "dll"],
  }[Deno.build.os];
  return `./lib/${libPrefix}${name}.${libSuffix}`;
}

export function ptr2value(ptr: Deno.UnsafePointer): Value {
  const ptrView = new Deno.UnsafePointerView(ptr);
  const value = ptrView.getFloat32();
  const unit = ptrView.getInt32();
  return new Value(unit, value);
}
