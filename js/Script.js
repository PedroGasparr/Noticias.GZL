document.addEventListener("DOMContentLoaded", function () {
    // Lista de usuários cadastrados
    const usuariosCadastrados = {
        "admin": "1234", // Exemplo de usuário e senha
        "usuario": "senha123"
    };

    // Verifica se a página atual é noticias.html
    if (window.location.pathname.includes("noticias.html")) {
        function validarLogin() {
            let usuario = prompt("Digite seu usuário:");
            if (usuario === null) {
                document.body.innerHTML = ""; // Bloqueia o site caso o usuário cancele
                return;
            }

            let senha = prompt("Digite sua senha:");
            if (senha === null) {
                document.body.innerHTML = "";
                return;
            }

            if (usuariosCadastrados[usuario] && usuariosCadastrados[usuario] === senha) {
                alert("Bem-vindo, " + usuario + "!");
            } else {
                alert("Usuário ou senha incorretos. Você será redirecionado.");
                window.location.href = "about:blank"; // Alternativa ao fechamento da aba
            }
        }

        validarLogin();
    }
});


// Captura o envio do formulário e envia os dados para o Google Apps Script
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio normal do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const data = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Enviar os dados usando a requisição fetch
    fetch('https://script.google.com/macros/s/AKfycbz55Dabgvl-icaTP0BJ3o5UXtKPy9PTC6yB1MnYNR7KrgSBEdfezLR29IRxsRctRoiuHQ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors',
    })
    .then(response => {
        console.log('Requisição feita com sucesso', response);
        alert("Formulário enviado com sucesso!");
        
        // Resetar o formulário após o envio bem-sucedido
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.log('Erro na requisição', error);
        alert("Erro ao enviar o formulário. Tente novamente.");
    });
});
