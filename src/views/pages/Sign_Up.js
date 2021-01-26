import baseURL from '../../service/baseUrl.js';
import Auth from '../../service/Auth.js';

function validaCPF(cpf){    
    const pattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;    

    return pattern.test(cpf)
}

document.postRegisterNewUser = async () =>{    

    try{        
        const RegisterData = {
            cpf: document.getElementById("cpf").value,            
            nome: document.getElementById("nome").value,
            login: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            confirmarSenha: document.getElementById("confirmarSenha").value
        }  
        let errorMessage,
            validForm = true;      

        if(validaCPF(RegisterData.cpf)!=true){
            errorMessage+= 'CPF: Formato inválido\n'
            validForm = false
        }
        if ( RegisterData.senha != RegisterData.confirmarSenha){
            errorMessage+= 'Senha: As senhas não são iguais\n'
            validForm = false
        }if (RegisterData.senha.length < 6 ){
            errorMessage+= 'Senha: A senha precisa ter pelo menos 6 dígitos!\n'
            validForm = false
        }
        if (!validForm){
            alert( errorMessage )
        }else{

            axios.post(baseURL + "usuarios",{
                cpf:   RegisterData.cpf,
                login: RegisterData.login,
                nome:  RegisterData.nome,
                senha: RegisterData.senha
            }).then( res => {
                if (res.status == 200 ){
                    alert('Cadastro realizado com sucesso!')                   
                    Auth.chargeSession(res.data.token, RegisterData.login);                    
                    window.location.replace("#/home");
                }
                else{
                    alert(err)
                }
                
            })
        }
    }
    catch(err){
        console.log(err);
    }
}

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
                                        <label for="exampleInputEmail1">Seu Login</label>
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