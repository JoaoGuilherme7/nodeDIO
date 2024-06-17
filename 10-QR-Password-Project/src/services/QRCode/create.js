import { prompt } from "../../../dependencies/dependencies.js";
import qrPrompt from "../../prompts-schema/schema-QrCode.js";
import handle from "./handle.js";

async function createQrCode(){
    prompt.get(qrPrompt, handle);

    prompt.start();
}

export default createQrCode;