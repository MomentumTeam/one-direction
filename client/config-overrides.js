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
      "@disabled-bg": "#E3E3E3",
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
      // "@btn-primary-color": "#000000",

      //Rate
      "@rate-star-color": "#CFEA11",
      "@rate-star-bg": "#FFFFFF",

      //Progress
      "@progress-default-color": "#CFEA11",
      "@progress-info-text-color": "#FFFFFF",
      
      //Faq
      "@collapse-content-bg": "#E3E3E3",
      "@collapse-header-bg": "#f2f2f2",
      "@collapse-panel-border-radius": "none",
    },
  })
);
