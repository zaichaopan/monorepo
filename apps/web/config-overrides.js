const { override, babelInclude } = require("customize-cra");
const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = override(
  babelInclude([
    path.resolve("src"), //
    resolveApp("../../packages/shared"),
  ])
);
