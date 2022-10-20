// scrollTo - te leva para algum lugar da página
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}


// Login
function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();
    if (usuario == "admin" && senha == "123456") {
        window.location = "index.html";
        logado = 1;
    }
    if (logado == 0) { alert("Acesso NEGADO. Dados incorretos, tente novamente!"); }
}


// Cadastro
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
