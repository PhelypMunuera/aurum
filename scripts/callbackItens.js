

export function callbackItens(){
    const itemsSalvos =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
    console.log(itemsSalvos);
}

callbackItens()


// essa função vai ser chamada quando o meu usuario cliacar no carrinho
// chama a pagina de checkcout

// objeto que vai ter ID e a QUANTIDADE
// para cada iten no meu objeto eu quero rendezizar o elemento dela pelo id  e settar no meu imput o a quantidade