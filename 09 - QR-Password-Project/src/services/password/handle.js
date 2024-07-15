async function handle() {
    let characters = await permittedCharacters();

    const passwordLength = process.env.PASSWORD_LENGTH;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
} export default handle;

async function permittedCharacters() {
    let permitted = []
    if (process.env.UPPERCASE_LETTERS == "true")
        permitted.push(..."ABCDEFGHIJLMNOPQRSTUVWXYZ")

    if (process.env.LOWERCASE_LETTERS == "true")
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")

    if (process.env.NUMBERS == "true")
        permitted.push(..."0123456789")

    if (process.env.SPECIAL_CHARS == "true")
        permitted.push(..."!@#$%&*()_+=-")

    return permitted;
}