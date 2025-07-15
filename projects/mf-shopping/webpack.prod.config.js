const {
  shareAll,
  withModuleFederationPlugin,
  SharedMappings,
} = require("@angular-architects/module-federation/webpack");
const path = require("path");

// 🔁 Inicializa SharedMappings
const sharedMappings = new SharedMappings();
sharedMappings.register(
  path.join(__dirname, "../../tsconfig.json"), // Ajusta si tu path es diferente
  ["@commons-lib"]
);

module.exports = withModuleFederationPlugin({
  name: "mfShopping",

  filename: "remoteEntry.js",

  publicHost: "https://mfshopping.azurestaticapps.net/remoteEntry.js",

  exposes: {
    "./ProductsComponent":
      "./projects/mf-shopping/src/app/products/products.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    ...sharedMappings.getDescriptors(), // ← Importante
  },

  sharedMappings: [sharedMappings.getPlugin()], // ← Importante
});
