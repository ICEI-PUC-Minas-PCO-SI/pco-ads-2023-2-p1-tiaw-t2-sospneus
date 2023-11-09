document.addEventListener("DOMContentLoaded", function() {
    const statusDropdown = document.querySelector(".status-dropdown");
    const listaOnline = document.getElementById("lista-online");
    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const button3 = document.getElementById("button-3");
    const iniciarConversaButton = document.getElementById("iniciarConversaButton");

    statusDropdown.addEventListener("change", function() {
        if (statusDropdown.value === "online") {
            listaOnline.classList.remove("hidden");
        } else {
            listaOnline.classList.add("hidden");
        }
    });

    button1.addEventListener("click", function() {
        openNewWindow("https://www.example.com/button-1");
    });

    button2.addEventListener("click", function() {
        openNewWindow("https://www.example.com/button-2");
    });

    button3.addEventListener("click", function() {
        openNewWindow("https://www.example.com/button-3");
    });

    function openNewWindow(url) {
        window.open("PrestadorPrevia.html", "_blank");
    }
    

    iniciarConversaButton.addEventListener("click", function() {
        // Adicione o código para iniciar a conversa aqui
        alert("Conversa iniciada!"); // Um exemplo de ação ao clicar no botão
    });
});