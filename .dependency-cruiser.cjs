/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      comment:
        "This dependency is part of a circular relationship. You might want to decouple it to keep the codebase maintainable.",
      severity: "error",
      from: {},
      to: { circular: true },
    },
    {
      name: "no-orphans",
      comment: "This is an orphan module (it's likely a mistake to add it here).",
      severity: "error",
      from: { orphan: true },
      to: {},
    },
    {
      name: "no-duplicate-dep-types",
      comment:
        "A module depends on a dependency that is also listed in devDependencies and dependencies.",
      severity: "warn",
      from: {},
      to: { dependencyTypes: ["npm-dev", "npm-no-pkg", "npm-unknown"] },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
      dependencyTypes: ["npm"],
    },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: "tsconfig.json" },
    exclude: {
      path: "(^|/)(\\.astro|\\.wrangler|dist|node_modules)(/|$)",
    },
  },
};
