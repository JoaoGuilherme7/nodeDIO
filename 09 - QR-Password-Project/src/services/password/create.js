import { styleSuccess } from "../../logStyles/logStyles.js";
import handle from "./handle.js";

export default async function createPassword() {
    console.log(styleSuccess("password:" + await handle()));
}

