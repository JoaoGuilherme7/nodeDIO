import {styleError, styleWarning, styleInfo} from "../logStyles/logStyles.js"

const qrPrompt = [
    {
        name: "link",
        description: styleInfo("Digite o Link para criar o QR CODE: "),
    },
    {
        name:"type",
        description: styleWarning("Escolha entre os tipos --> 1:Normal 2:Terminal"),
        pattern: /^[1-2]+$/,
        message: styleError("Escolha apenas entre 1 e 2\n"),
        required: true

    }
];

export default qrPrompt