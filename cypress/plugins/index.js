import cucumber from "cypress-cucumber-preprocessor";
import { defaultOptions } from "@cypress/browserify-preprocessor";
import { cypressBrowserPermissionsPlugin } from "cypress-browser-permissions";

export default (on) => {
    const options = defaultOptions;
    on("file:preprocessor", cucumber(options));
    config = cypressBrowserPermissionsPlugin(on, config);
    return config;
};