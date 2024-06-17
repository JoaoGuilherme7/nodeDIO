import { prompt } from "../dependencies/dependencies.js";
import mainPrompt from "./prompts-schema/schema-main.js";
import { styleError } from "./logStyles/logStyles.js"
import createQrCode from "./services/QRCode/create.js";
import createPassword from "./services/password/create.js";

(function main() {


    prompt.get(mainPrompt, async (err, choice) => {

        if (err) console.log(styleError(err));

        if (choice.select == 1) await createQrCode();
        if (choice.select == 2) await createPassword();
    });

    prompt.start();

})()