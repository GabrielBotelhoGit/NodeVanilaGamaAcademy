let footer = {
    render: async () => {
        let view = `
            <div class="container d-flex justify-content-center">
                <span class="text-muted">Powered by: Gabriel Carreiras Botelho.</span>
            </div>                
        `;
        return view;
    },
    after_render: async () => {
        
    }
}
export default footer;
