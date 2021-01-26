import Auth from '../../service/Auth.js';
let home = {
    render: async () => {
        let view = `
            <div class="row">
                <div class="col-md-6">
                    <div style="height:100%;" class="esquerda d-flex justify-content-center align-items-center">
                        <h2>Olá ${sessionStorage.getItem("usuario")}</h2>
                    </div>                    
                </div>
                
                <div class="col-md-6">
                    <div class="card alturaTotal">                    
                        <div class="card-body corpoCartao">
                            <img style="width:100%;height:100%;" src="https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg">
                        </div>
                    </div>
                </div>
            </div>
        `;
        return view;
    },
    after_render: async () => {
        let autenticado = Auth.isAuthenticated();
        if(!autenticado){
            window.location.replace("#/login");
        }      
    }
}
export default home;