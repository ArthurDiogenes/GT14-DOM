function adicionarTexto() {
    let texto = document.getElementById("input");
    document.querySelector("h1").innerText = texto.value;
}

const btn = document.querySelector("button");

btn.addEventListener("click", adicionarTexto);
