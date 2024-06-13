// quais ações meu carrinho pode fazer:
// --> ✅ Adicionar um item : addItem()
// --> ✅ Deletar item do carrinho : deleteItem()
// --> ✅ Remover um item : removeItem()
// --> ✅ CALCULAR TOTAL : calculateTotal()
// --> ✅ MOSTRAR CARRINHO : displayCart()

async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name === itemName);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {

    const index = userCart.findIndex((p) => p.name === item.name);

    if (index !== -1) {
        if (userCart[index].qtt == 1) {
            deleteItem(userCart, item.name);
            return;
        }
        if (userCart[index].qtt > 1)
            userCart[index].qtt--;
    }
}

async function calculateTotal(userCart) {
    console.log(`\n💸 TOTAL CARRINHO: ${userCart.reduce((total, item) => total += item.subtotal(), 0)}`);
}

async function displayCart(userCart) {

    console.log('\n🛒::::YOUR CART LIST::::🛒')
    userCart.forEach((item, index) => {
        console.log(` 🎁 ${index + 1}. ${item.name} -- R$ ${item.price} | ${item.qtt} | SUBTOTAL = R$${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}

