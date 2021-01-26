import Auth from '../../service/Auth.js';

let header = {
    render: async () => {
        let view = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" id="login" href="#/">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="logout" href="#/">Logout</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="home" href="#/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="dashboard" disabled href="#/dash">Dashboard</a>
                        </li>                        
                    </ul>
                </div>
            </nav>                
        `;
        return view;
    },
    after_render: async () => {
        let url = window.location.hash;
        if(url.indexOf("dash") > -1){
            document.getElementById("dashboard").parentElement.classList.add("active");
            document.getElementById("login").parentElement.classList.add("escondido");
            document.getElementById("logout").parentElement.classList.remove("escondido");
        }
        else if(url.indexOf("home") > -1){
            document.getElementById("home").parentElement.classList.add("active");
            document.getElementById("login").parentElement.classList.add("escondido");
            document.getElementById("logout").parentElement.classList.remove("escondido");
        }
        else{
            document.getElementById("login").parentElement.classList.add("active");
            document.getElementById("login").parentElement.classList.remove("escondido");
            document.getElementById("logout").parentElement.classList.add("escondido");
            Auth.clearSession();
        }

        let autenticado = Auth.isAuthenticated();
        if(!autenticado){
            document.getElementById("home").classList.add("disabled");
            document.getElementById("dashboard").classList.add("disabled");
        }        
        else{
            document.getElementById("dashboard").parentElement.classList.add("active");
            document.getElementById("home").parentElement.classList.add("active");
        }
    }
}
export default header;