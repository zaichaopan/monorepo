//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = [
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
  }),
  // isDevelopment &&
  //   new ReactRefreshWebpackPlugin({
  //     overlay: {
  //       sockIntegration: "whm",
  //     },
  //   }),
]
//.filter(Boolean);
