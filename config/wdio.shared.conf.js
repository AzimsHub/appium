exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: "local",
    framework: "cucumber",
    // framework: 'jasmine',
    // jasmineNodeOpts: {
    //     // Updated the timeout to 30 seconds due to possible longer appium calls
    //     // When using XPATH
    //     defaultTimeoutInterval: 900000,
    //     helpers: [require.resolve('@babel/register')],
    // },
    sync: true,
    logLevel: "silent",
    deprecationWarnings: true,
    bail: 0,
    baseUrl: "http://the-internet.herokuapp.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 900000,
    connectionRetryCount: 3,
    reporters: ["spec"],
    cucumberOpts: {
        timeout: 200000,
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> module used for processing required features
        requireModule: ["@babel/register"],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            "./tests/cucumber/steps/given.js",
            "./tests/cucumber/steps/then.js",
            "./tests/cucumber/steps/when.js",
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            // './src/**/*.js',
        ],
    },

    before: function () {
        const chai = require("chai");

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },

    afterScenario: function (scenario) {
        driver.closeApp();
        driver.removeApp("com.rhapsody.napster");
        // driver.installApp('/Users/iangoddard/Documents/Work/appium/apps/app-release.apk')
    },

    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            "appium",
            {
                // For options see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                    // For arguments see
                    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: "appium",
            },
        ],
    ],
    port: 4723,
};
