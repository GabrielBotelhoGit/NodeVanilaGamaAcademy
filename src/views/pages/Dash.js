let home = {
    render: async () => {
        let view = `
        <div id="chartDiv" style="width: 100%; height: 400px;"></div>
        `;
        return view;
    },
    after_render: async () => {
        JSC.Chart("chartDiv", {
            series: [
                {
                    points: [{ x: "A", y: 10 }, { x: "B", y: 5 }]
                }
            ]
        });
        
        let autenticado = Auth.isAuthenticated();
        if(!autenticado){
            window.location.replace("#/login");
        }   
    }
}
export default home;