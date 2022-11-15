var cep = document.getElementById("cep")
var logradouro = document.getElementById("logradouro")
var bairro = document.getElementById("bairro")
var localidade = document.getElementById("localidade")
var uf = document.getElementById("uf")

var btnSearch = document.getElementById("btnSearch")

btnSearch.addEventListener ("click", (event) => {
    event.preventDefault() // Faz com que a pagina não reinicie -importante-
    var userCep = cep.value // Criei uma variavel, essa variavel ela vai pegar o valor que eu escrevi 

    fetch (`https://viacep.com.br/ws/${userCep}/json`) // {usercep} ele vai buscar no site o cep que eu escrevi
    .then ((response)=> response.json())
    .then ((endereco)=> {
        logradouro.value = endereco.logradouro
        bairro.value = endereco.bairro
        localidade.value = endereco.localidade
        uf.value = endereco.uf
    } ) 
} )