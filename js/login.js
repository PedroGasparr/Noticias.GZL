document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o comportamento padrão de envio do formulário

    // Obtém os valores dos campos de usuário e senha
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Cria os parâmetros para enviar na requisição POST
    var params = "usuario=" + encodeURIComponent(usuario) + "&senha=" + encodeURIComponent(senha);

    // Envia a requisição para o Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbxBTj_gpcYuwe5wcXgs5llAhSdoZTXqNkLyo-kxb0Gow2rFOsy0gaa1Y6yhJAFhaYLw7w/exec", {
        method: "POST",
        body: params,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.text())  // A resposta será em texto
    .then(data => {
        // Exibe a resposta na tela
        document.getElementById("message").textContent = data;

        // Se o login for bem-sucedido, armazene o status no sessionStorage e redirecione
        if (data === "Login bem-sucedido!") {
            sessionStorage.setItem("logado", "true"); // Armazena a sessão de login
            window.location.href = "https://pedrogasparr.github.io/Noticias.GZL/noticias.html"; // Redireciona para a página de notícias
        }
    })
    .catch(error => {
        // Caso ocorra algum erro
        document.getElementById("message").textContent = "Erro na requisição: " + error.message;
    });
});
