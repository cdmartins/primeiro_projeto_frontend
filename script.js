function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag da imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/AvatarLight.png")
    img.setAttribute(
      "alt",
      "Foto de Cárita Martins com um leve sorriso, usando camisa preta e maquiagem delineado e agora em preto e branco ao apertar o botão."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Cárita Martins com um leve sorriso, usando camisa preta e maquiagem delineado."
    )
  }
}
