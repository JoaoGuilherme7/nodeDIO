import { styleError, styleInfo } from "../logStyles/logStyles.js";

const mainPrompt = [
    {
        name: "select",
        description: styleInfo("Escolha ente as ferramentas --> 1️: QR CODE 2️: PASSWORD"),
        pattern: /^[1-2]+$/,
        message: styleError("Escolha apenas entre 1 e 2\n"),
        required: true
    }
];

export default mainPrompt;