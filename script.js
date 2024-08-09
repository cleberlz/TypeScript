document.getElementById("myForm").addEventListener("submit", function(event){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    
    if (!nome || !email || !cpf){
        event.preventDefault();
        alert("Por favor, preencha os campos obrigatórios");
    }

});