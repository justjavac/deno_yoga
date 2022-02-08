export function getLibPath(name: string) {
  const [libPrefix, libSuffix] = {
    darwin: ["lib", "dylib"],
    linux: ["lib", "so"],
    windows: ["", "dll"],
  }[Deno.build.os];
  return `./lib/${libPrefix}${name}.${libSuffix}`;
}
