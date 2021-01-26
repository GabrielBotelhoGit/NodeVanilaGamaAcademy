import baseURL from '../../service/baseUrl.js';
import Auth from '../../service/Auth.js';

window.LoginUser = async () =>{    

    try{        
        const RegisterData = {            
            login: document.getElementById("email").value,
            senha: document.getElementById("senha").value,            
        }  
        let errorMessage,
            validForm = true;      
        
        if (RegisterData.senha.length < 6 ){
            errorMessage+= 'Senha: A senha precisa ter pelo menos 6 dígitos!\n'
            validForm = false
        }
        if (!validForm){
            alert( errorMessage )
        }else{

            axios.post(baseURL + "login",{                
                usuario: RegisterData.login,                
                senha: RegisterData.senha
            }).then( res => {
                if (res.status == 200 ){                    
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

let Login = {
    render: async () => {
        
        let view = `
            <div class="row">
                <div class="col-md-6">
                    <div class="esquerda">
                        <h2>
                        Formulário de Login
                        </h2>
                        <p>
                        Seja bem vindo ao Bootstrap
                        </p>
                        <img src="https://boring-feynman-12ba8b.netlify.app/img/bootstrap-icons.png">
                    </div>                    
                </div>
                
                <div class="col-md-6">
                    <div class="card alturaTotal">                    
                        <div class="card-body corpoCartao">
                            <h2 class="card-title">Informe aqui seu usuário e senha</h2>
                            <div class="conteudo">
                                <form class="p-5 meuConteudo">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Seu email</label>
                                        <input type="email" id="email" class="form-control">                            
                                    </div>
                                    <div class="form-group">
                                        <label for="senha">Senha</label>
                                        <input type="password" id="senha" class="form-control">
                                    </div>                        
                                    <br>
                                    <button type="button" onclick="LoginUser()" class="btn btn-primary">Clique aqui para logar</button>
                                    <br>
                                    <a href="#/signup">Ou clique aqui para fazer SignUp</a>
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
        Auth.clearSession();
    }
}
export default Login;