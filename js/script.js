
const pergunta = document.querySelectorAll(".question")

pergunta.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const paragrafo = pergunta.nextElementSibling
        const icone = pergunta.lastElementChild
    
        paragrafo.classList.toggle('hide')
        
        if(!paragrafo.classList.contains('hide')) {
            icone.src = '../assets/images/icon-minus.svg'
        } else {
            icone.src = '../assets/images/icon-plus.svg'
        }
    })

}
)