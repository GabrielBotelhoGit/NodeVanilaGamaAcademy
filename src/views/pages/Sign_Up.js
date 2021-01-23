import baseURL from '../../service/baseUrl.js';

document.postRegisterNewUser = async () =>{    

    try{        
        const RegisterData = {
            cpf: document.getElementById("cpf").value,
            //id:0,
            nome: document.getElementById("nome").value,
            login: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        }
    
        const options = {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RegisterData)
        };

        const response = await fetch(baseURL + "usuarios", options)
            .then((res) => {
                if(res.status == 200){
                    document.chamaLogin()
                }
                else{
                    alert("err");
                }
            })
            // .then((data) => {
                
            //     document.chamaLogin()
            // });
    }
    catch(err){
        console.log(err);
    }
}

document.chamaLogin = function (){
    let email = document.getElementById("email").value;
    sessionStorage.setItem("logado",true);
    sessionStorage.setItem("usuario", email);
    window.location.replace("#/home");
};

let home = {
    render: async () => {        
        let view = `
            <div class="row d-flex justify-content-center">                                
                <div class="col-md-8">
                    <div class="card alturaTotal">                    
                        <div class="card-body corpoCartao">
                            <h2 class="card-title">Informe aqui seu usuário e senha para cadastro</h2>
                            <div class="conteudo">
                                <form class="p-5 meuConteudo">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Seu email</label>
                                        <input type="email" id="email" class="form-control">                            
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Seu nome</label>
                                        <input type="email" id="nome" class="form-control">                            
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Seu cpf</label>
                                        <input type="email" id="cpf" class="form-control">                            
                                    </div>
                                    <div class="form-group">
                                        <label for="senha">Senha</label>
                                        <input type="password" id="senha" class="form-control">
                                    </div>                  
                                    <div class="form-group">
                                        <label for="senha">Confirmar Senha</label>
                                        <input type="password" id="confirmarSenha" class="form-control">
                                    </div>           
                                    <br>
                                    <button type="button" onclick="postRegisterNewUser()" class="btn btn-primary">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return view;
    },
    after_render: async () => {

    }
}
export default home;