const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};


const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco
        let block = getRandomBlock();
        console.log(`Bloco: ${block}`)

        //rolar os dados
        let diceResult1 = rollDice();
        let diceResult2 = rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
        let property;

        switch (block) {
            case "RETA": property = "VELOCIDADE"; break;
            case "CURVA": property = "MANOBRABILIDADE"; break;
            case "CONFRONTO": property = "PODER"; break;
        }

        if (block == "CONFRONTO") {
            console.log(`⚔️  ${character1.NOME} confrontou com ${character2.NOME} ⚔️`)
        }

        totalTestSkill1 = diceResult1 + character1[property];
        totalTestSkill2 = diceResult2 + character2[property];

        logRollResult(character1, block, diceResult1, property, totalTestSkill1);
        logRollResult(character2, block, diceResult2, property, totalTestSkill2);

        //verificando vencedor a cada bloco
        if (totalTestSkill1 > totalTestSkill2) {
            if (block != "CONFRONTO") {
                character1.PONTOS++;
                console.log(`${character1.NOME} marcou um ponto!`);
            }
            else if (character2.PONTOS > 0) {
                character2.PONTOS--;
                console.log(`${character2.NOME} perdeu um ponto!`)
            }
        }
        else if (totalTestSkill2 > totalTestSkill1) {
            if (block != "CONFRONTO") {
                character2.PONTOS++;
                console.log(`${character2.NOME} marcou um ponto!`);
            }
            else if (character1.PONTOS > 0) {
                character1.PONTOS--;
                console.log(`${character1.NOME} perdeu um ponto!`);
            }
        }
        else {
            if (block != "CONFRONTO") {
                console.log(`Empate! Ambos pontuam`);
                character1.PONTOS++;
                character2.PONTOS++;
            }
            else{
                console.log('Empate, ninguém pontua!')
            }
        }

        console.log('------------------------------');
    }

    console.log(`PONTUAÇÂO FINAL ${character1.NOME}: ${character1.PONTOS}`);
    console.log(`PONTUAÇÂO FINAL ${character2.NOME}: ${character2.PONTOS}`);

    if(character1.PONTOS > character2.PONTOS){
        console.log(`🏆 ${character1.NOME} VENCEU!!!🥇`);
    }
    else if(character1.PONTOS < character2.PONTOS){
        console.log(`🏆 ${character2.NOME} VENCEU!!!🥇`);
    }
    else{
        console.log('EMPATE!!!');
    }
}

function logRollResult(character, block, diceResult, attribute, totalTestSkill) {
    console.log(`${character.NOME} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute}: ${character[attribute]} =  ${totalTestSkill}`);
}

function getRandomBlock() {
    let random = Math.random()

    switch (true) {
        case random < 0.33:
            return "RETA";
        case random < 0.66:
            return "CURVA";
        default:
            return "CONFRONTO";
    }
}

(function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
    playRaceEngine(player1, player2);
})()