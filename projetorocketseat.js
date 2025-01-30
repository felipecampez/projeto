function toggleMode() {
    const html = document.documentElement 
    html.classList.toggle('light')

//   Poderia ser feita uma função da seguinte forma:
//   if(html.classList.contains('light')) {
//        html.classList.remove('light') 
//    } else {
//        html.classList.add("light")
//    }

// trocar a imagem de fundo quando alternar os modos

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './Mídias/avatar-light.png')  
    } else {
        img.setAttribute('src', './Mídias/avatar.png')
    }

    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'foto de rosto do desenvolvedor de óculos escuros')  
    } else {
        img.setAttribute('alt', 'foto de rosto do desenvolvedor')
    }
}
