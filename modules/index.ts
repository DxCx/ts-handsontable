declare var window: Array<any>;

if ( undefined === window ) {
    throw new Error("This module should be used for browser only");
}

if ( window["numbro"] === undefined ) {
    window["numbro"] = require("numbro");
}
if ( window["moment"] === undefined ) {
    window["moment"] = require("moment");
}
if ( window["ZeroClipboard"] === undefined ) {
    window["ZeroClipboard"] = require("zeroclipboard");
}
if ( window["Pikaday"] === undefined ) {
    window["Pikaday"] = require("pikaday");
}
export const Handsontable = require("handsontable");
