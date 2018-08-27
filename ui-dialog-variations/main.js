/******************************************************************************
 *
 * Dialog Variations
 * -----------------
 *
 * Author: Kerri Shotts
 *
 ******************************************************************************/

const {alert, confirm, prompt, error, warning} = require("./dialogs.js");

async function showAlert() {
    return alert("Connect to the Internet",
                 "In order to function correctly, this plugin requires Internet access. Please connect to a network that has Internet access.");
}

async function showConfirm() {
    const feedback = await confirm("Enable Smart Filters?",
                   "Smart filters are nondestructive and will preserve your original images.",
                ["Cancel", "Enable"]);
    switch (feedback.which) {
        case 0:
            return alert("Smart Filters", "You clicked 'Cancel'");
            break;
        case 1:
            return alert("Smart Filters Enabled", "You clicked 'Enable'");
            break;
    }
}

async function showPrompt() {
    const res = await prompt("Create Shape", "What kind of shape you would like to create?", "Shape");
    switch (res.which) {
        case 0:
            return alert("Shape to Create", "You didn't want to apply a shape.");
            break;
        case 1:
            return alert("Shape to Create", `You wanted to create a ${res.value}!`);
            break;
    }
}

async function showWarning() {
    const res = await warning("Reset Preferences?",
                 "Are you sure you want to reset your plugin preferences?", ["Cancel", "Reset Preferences"]);
    switch (res.which) {
        case 0:
            return alert("Preferences Preserved", "Your preferences are safe.");
            break;
        case 1:
            return alert("Preferences Reset", `Your preferences have been reset.`);
            break;
    }

}

async function showError() {
    return error("Couldn't save your changes",
        "Your computer reports that you are out of storage space. Please move or remove some files to free up space and try again.");
}

async function showAbout() {
    return alert("About Dialog Variations",
        "Dialog variations shows several different standard dialog templates for alerts, confirmations, prompts, and more.",
        "For more information, please see:",
        "https://github.com/AdobeXD/Plugin-Samples/tree/master/ui-dialog-variations"
    );
}

module.exports = {
    commands: {
        showAlert,
        showWarning,
        showError,
        showConfirm,
        showPrompt,
        showAbout
    }
}