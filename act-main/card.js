let cardsTitle = (proj) =>{
    let div = document.createElement('div')
    
    div.id = 'tits'
    
    div.innerHTML=`
    
    <h1>${proj}</h1>
    
    `

    return div
}
let cards = (images, paragraph,buton) =>{
    let div = document.createElement('div')
    div.id='desu'
    div.innerHTML=`
    <div class="proj">
        <img class="cardi" src="${images}" alt="">
        <p class="text">${paragraph}</p>
        <button class="butom">${buton}</button>
    </div>
    `
    div.className = "card"
    return div
}
export { cards, cardsTitle }
