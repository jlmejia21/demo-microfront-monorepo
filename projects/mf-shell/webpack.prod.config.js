const {
  shareAll,
  withModuleFederationPlugin,
  SharedMappings,
} = require("@angular-architects/module-federation/webpack");
const path = require("path");

// 🔁 Setup SharedMappings
const sharedMappings = new SharedMappings();
sharedMappings.register(path.resolve(__dirname, "../../tsconfig.json"), [
  "@commons-lib",
]);

module.exports = withModuleFederationPlugin({
  remotes: {
    mfShopping:
      "mfShopping@https://gentle-glacier-0c894111e.2.azurestaticapps.net/remoteEntry.js",
    mfPayment:
      "mfPayment@https://happy-mushroom-0500dd21e.2.azurestaticapps.net/remoteEntry.js",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    ...sharedMappings.getDescriptors(),
  },
  sharedMappings: [sharedMappings.getPlugin()], // ✅ Este arreglo era necesario
});
