const {
  shareAll,
  withModuleFederationPlugin,
  SharedMappings,
} = require("@angular-architects/module-federation/webpack");
const path = require("path");

// Inicializa SharedMappings
const sharedMappings = new SharedMappings();
sharedMappings.register(
  path.join(__dirname, "../../tsconfig.json"), // Ajusta la ruta si estás en otro lugar
  ["@commons-lib"]
);

module.exports = withModuleFederationPlugin({
  name: "mfPayment",

  filename: "remoteEntry.js", // Necesario para exponer la federación

  exposes: {
    "./PaymentComponent":
      "./projects/mf-payment/src/app/payment/payment.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    ...sharedMappings.getDescriptors(), // <- importante
  },

  sharedMappings: [sharedMappings.getPlugin()], // <- importante
});
