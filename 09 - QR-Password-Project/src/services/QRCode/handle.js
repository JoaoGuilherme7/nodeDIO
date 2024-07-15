import { qrCodeTerminal as qr } from "../../../dependencies/dependencies.js";
import { styleSuccess } from "../../logStyles/logStyles.js";

async function handle(err, result) {
    if (err) {
        console.log('error on app.');
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(isSmall, { small: isSmall }, (qrCode) => {
        console.log(styleSuccess('QR Code gerado com Sucesso\n'));
        console.log(qrCode);
    })
}

export default handle;