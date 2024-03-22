const func2 = ( data ) => {
    let rightDiv = document.createElement("div")
    rightDiv.innerHTML = `
    <img class="Prof" src="${data}" alt="">
    <div class="likod"></div>
    `

    rightDiv.className = "ClassR"


    return rightDiv;
}

export { func2 };