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
      "@primary-color": "#001322",
      "@border-radius-base": "25px",
      "@disabled-bg": "#d6d6d6",
      "@disabled-color": "#000000",
      "@border-width-base": "2px",
      "@btn-border-width": "0px",
      // "@btn-primary-color": "#000000",
      "@border-color-base": "@primary-color",
      "@btn-primary-color": "#fff",
      "@btn-primary-bg": "@primary-color",

      "@btn-default-color": "#000000",
      "@btn-default-bg": "#CFEA11",
      "@btn-default-border": "@border-color-base",

      "@select-item-selected-color": "#fff",
    },
  })
);
