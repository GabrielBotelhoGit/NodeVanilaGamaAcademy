import baseURL from '../../service/baseUrl.js';

window.postRegisterNewUser = async () =>{    

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
            .then((res) => res.json())
            .then((data) => window.chamaLogin());
    }
    catch(err){
        console.log(err);
    }
}

window.chamaLogin = function (){
    let email = document.getElementById("email").value;
    sessionStorage.setItem("logado",true);
    sessionStorage.setItem("usuario", email);
    window.location.replace("#/home");
};

let home = {
    render: async () => {
        let postData = postRegisterNewUser()
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
                                        <label for="senha">Senha</label>
                                        <input type="password" id="senha" class="form-control">
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