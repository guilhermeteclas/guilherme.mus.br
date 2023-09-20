function toggleMode() {
    const body = document.body
    body.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (body.classList.contains("ligth")) {
        img.setAttribute("src", "./assets/avatar2.png");
    } else {
        img.setAttribute("src", "./assets/avatar.png");
    }
}
