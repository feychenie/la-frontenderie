const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  pageExtensions: ["mdx", "md", "jsx", "js", "ts", "tsx"],
});
