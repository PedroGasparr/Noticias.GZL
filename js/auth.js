// Verifique o status de login ao carregar a página
window.onload = function() {
    // Verifique se o usuário está logado
    var logado = sessionStorage.getItem("logado");

    if (logado !== "true") {
        // Se não estiver logado, redirecione para a página de login
        window.location.href = "https://pedrogasparr.github.io/Noticias.GZL/"; // Altere para o caminho correto da sua página de login
    }
}
