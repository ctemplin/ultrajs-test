import { createBuilder } from "ultra/build.ts";

const builder = createBuilder({
  browserEntrypoint: import.meta.resolve("./client.jsx"),
  serverEntrypoint: import.meta.resolve("./server.jsx"),
});

builder.ignore([
  "./README.md",
  "./importMap.json",
  "./.git/**",
  "./.vscode/**",
  "./.github/**",
  "./.gitignore",
  "./test/",
  "./*.code-workspace",
]);

// deno-lint-ignore no-unused-vars
const result = await builder.build();
