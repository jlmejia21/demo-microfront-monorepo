const {
  shareAll,
  withModuleFederationPlugin,
  SharedMappings,
} = require("@angular-architects/module-federation/webpack");
const path = require("path");

// 🔁 Inicializa SharedMappings para commons-lib
const sharedMappings = new SharedMappings();
sharedMappings.register(
  path.join(__dirname, "../../tsconfig.json"), // Asegúrate de que esta ruta sea correcta
  ["@commons-lib"]
);

module.exports = withModuleFederationPlugin({
  remotes: {
    mfShopping:
      "mfShopping@https://mfshopping.azurestaticapps.net/remoteEntry.js",
    mfPayment: "mfPayment@https://mfpayment.azurestaticapps.net/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    ...sharedMappings.getDescriptors(), // ← Necesario
  },

  sharedMappings: sharedMappings, // ← Necesario
});
