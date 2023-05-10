let tokenGerado = Math.random().toString(16).substring(2);

const usuario1 = {
    nomeUsuario: "func",
    senhaUsuario: "1234",
    gravarDados: true,
    token: tokenGerado
}

const usuario2 = {
    nomeUsuario: "admin",
    senhaUsuario: "4321",
    gravarDados: true,
    token: tokenGerado
}

let listaDeUsuario = [];
listaDeUsuario.push(usuario1);
listaDeUsuario.push(usuario2);

addEventListener("click", (evt)=> {

    if(evt.target.id == "btnSubmit"){
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");

        try{
            listaDeUsuario.forEach((usuario)=>{
                if(inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario){
                    throw "Validado";
                }
            });

            throw "Não validado";
        }catch (msg){
            const msgError = document.querySelector("#msgError")
            if(msg == "Validado"){
                msgError.setAttribute("style", "color: #00ff00")
                msgError.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>"
            }else{
                msgError.setAttribute("style", "color: #ff0000")
                msgError.innerHTML = "<span><strong>Usuário ou senha inválidos!</strong></span>"
            }
        }
    }
    
});
