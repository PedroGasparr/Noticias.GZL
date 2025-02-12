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
        document.getElementById('contactForm').reset(); // Reseta os campos do formulário
    })
    .catch(error => {
        console.log('Erro na requisição', error);
        alert("Erro ao enviar o formulário. Tente novamente.");
    });
});


