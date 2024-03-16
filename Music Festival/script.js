let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    let bdy = document.body
    if (bdy.style.backgroundColor === "white") {
        bdy.style.backgroundColor = "black"
        bdy.style.color = "white"
    } else {
        bdy.style.backgroundColor = "white"
        bdy.style.color = "black"
    }
});