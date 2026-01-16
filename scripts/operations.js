

export function controlsAmonts (ulSelector = 'ul') {
    const ul = document.querySelector(ulSelector);

    if(!ul) throw new Error('Não encontrei o elemento');


    ul.addEventListener("click", (e)=> {
        const minus = e.target.closest(".btn-minus");
        const plus = e.target.closest(".btn-plus");
        if(!minus && !plus) return;

        const card = e.target.closest("article");
        if (!card) return;

        const input = card.querySelector('.amount input');
        if (!input) return;

        const current = Number(input.value || 0);

        if(plus) input.value = current + 1
        if(minus && current > 0 ) input.value = current - 1
        
        })

}