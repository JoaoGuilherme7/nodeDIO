//quais ações meus item podem ter:

// --> ✅ Criar item já com quantidade certo : 
// --> ✅ Calcular subtotal (qtd * preço) : calculateSubtotal()

async function createItem(name, price, qtt){
    return {
        name,
        price, 
        qtt,
        subtotal: () => price * qtt
    }
}

export default createItem;