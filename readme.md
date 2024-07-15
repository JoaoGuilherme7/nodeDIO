# DESCRIPTION
Projects carried out during [DIO](https://web.dio.me)'s "Formação NodeJs Fundamentals" course.

### Below I'll detail what I learned from each project.

## [MARIO RACE](./01%20-%20mario%20race/)
This was the first project, in which I could learn how to start a NodeJs project and test my JavaScript skills.

## [SHOPEE CART](./04%20-%20shopee%20cart/)
In this project I learned:
- Modules with commonJs and ES modules.
- Services layer

## [QR CODE AND PASSWORD GENERATOR](./09%20-%20QR-Password-Project/)
- I was introduced to dependencies and environment variables (`.env`).
- Learned how to use npm scripts.
- Used dependencies:
    - ["Chalk"](https://www.npmjs.com/package/chalk) to style the terminal;
    - ["Prompt"](https://www.npmjs.com/package/prompt) to get the user's input;
    - ["Qrcode-terminal"](https://www.npmjs.com/package/qrcode-terminal) to generate the qr code.
- The .env file contains some 'parameters' to generate a password.

## [FORMULA 1 API ⭐](./11%20-%20gerenciador%20podcast/)
This is a Minimal Api project, using [`fastify`](https://www.npmjs.com/package/fastify) and the [`node-blue-boilerplate`](https://github.com/felipeAguiarCode/node-blue-boilerplate) a very nice 'boilerplate' created by the instructor.

Having the boilerplate I just needed to use the `npm install` command to install all dependencies from the `package-lock.json` file.

## [GERENCIADOR DE PODCASTS ⭐⭐](./11%20-%20gerenciador%20podcast/app.md)
This was the first API created, it was made up before the "Formula 1" one. For that I:
- Used Typescript.
- Implemented a "hand-coded" server with no dependencies to help.
- Applied an architecture with controller, models, routes, repositories and utils layers.
- Used the `Thunder Client` Rest API Client Extension to test the API
- And I also made a view layer by myself which consums the API to see it working.(For that i needed to search about `cors` and implement it to the server too.)

## [CHAMPIONS LEAGUE API ⭐⭐⭐](./15%20-%20Champions-league-api/app.md)
It's the most complete REST API made during the course. It utilized all the fundamentals learned so far and a few more concepts, such as:

- [`Express`](https://www.npmjs.com/package/express) and [`Cors`](https://www.npmjs.com/package/cors) usage;
- Applied routes using methods: get, post, delete, patch;
