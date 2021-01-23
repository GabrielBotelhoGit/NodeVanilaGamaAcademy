import baseURL from '../../service/baseUrl.js';

window.LoginUser = async () =>{    

    try{        
        const RegisterData = {
            email: document.getElementById("email").value,
            password: document.getElementById("senha").value
        }
    
        const options = {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(RegisterData)
        };

        const response = await fetch(baseURL, options)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                sessionStorage.setItem("token",data.token);    
                localStorage.setItem("token", data.token);                
                window.chamaLogin();
            });
    }
    catch(err){
        console.log(err);
    }
}

let Login = {
    render: async () => {

        window.chamaLogin = function (){
            let email = document.getElementById("email").value;
            sessionStorage.setItem("logado",true);
            sessionStorage.setItem("usuario", email);
            window.location.replace("#/home");
        };
        
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
    }
}
export default Login;