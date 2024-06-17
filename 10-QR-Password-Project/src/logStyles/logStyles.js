import { chalk } from "../../dependencies/dependencies.js";
const styleError = (message) => { return (chalk.bold.bgRed(message));}
const styleWarning = (message) => { return (chalk.black.italic.bgYellow(message));}
function styleSuccess(message) { return (chalk.green.bold(message));}
function styleInfo(message) { return (chalk.blue.bold(message));}

export {
    styleError,
    styleInfo,
    styleSuccess,
    styleWarning,

}