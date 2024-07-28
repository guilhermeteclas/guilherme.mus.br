//
function toggleMode() {
    const body = document.body
    body.classList.toggle("light");

    const img = document.querySelector("#profile img");
    const music = document.querySelector("#music");
    const dev = document.querySelector("#dev");
    const subtitleMusic = document.querySelector("#subtitle-music");
    const subtitleDev = document.querySelector("#subtitle-dev");

    if (body.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-dev.png");
    } else {
        img.setAttribute("src", "./assets/avatar.png");
    }

    music.classList.toggle("hidden");
    dev.classList.toggle("hidden");
    subtitleMusic.classList.toggle("hidden");
    subtitleDev.classList.toggle("hidden");
}
