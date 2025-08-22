/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    {
      channel: "beta",
      name: "master",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { release: "patch", type: "fix" },
          { release: "patch", type: "feat" },
          { release: "patch", type: "build" },
          { release: "patch", type: "chore" },
          { release: "patch", type: "docs" },
          { release: "patch", type: "style" },
          { release: "patch", type: "refactor" },
          { release: "patch", type: "perf" },
          { release: "patch", type: "test" },
        ],
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    ["@semantic-release/npm", { pkgRoot: "out/src" }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
