function formulario(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let data = document.getElementById("nascimento").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    
    if(nome == '' || sobrenome == '' || data == '' || cpf == '' || email == ''){
        alert("Há campos obrigatórios não preenchidos");
    }else{
        alert("Sua formulário foi enviado com sucesso " +nome+ " !" + '\n' + "Data de envio: " +data);

    }
}
