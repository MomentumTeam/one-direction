const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#CFEA11",
      "@border-radius-base": "25px",
      "@disabled-bg": "#E3E3E3",
      "@disabled-color": "#000000",
      "@btn-primary-color": "#000000",
      "@rate-star-color": "@primary-color",
      "@rate-star-bg": '#FFFFFF',
    },
  })
);
