// import api from './service/api.js';
// const api = require('./api/api');
import Home from './views/pages/Home.js';
import Header from './views/components/nav.js';
import Footer from './views/components/footer.js';

import Dash from './views/pages/Dash.js';
import Login from './views/pages/Login.js';
import SignUp from './views/pages/Sign_Up.js';
import Error404 from './views/pages/Error404.js';

import Utils from './service/Utils.js';

const header = document.getElementById("header");
const content = document.getElementById("container");
const footer = document.getElementById("footer");

// window.apiRequest = function (){
//     let nome = document.getElementById("username"),
//         password = document.getElementById("password");
//     let post = {
//         "name": nome,
//         "password": password
//     };

//     let init = {
//         method: "POST"
//     }

//     // api.get()
//     //     .then((res) =>{
//     //         console.log(res);
//     //     })
//     // fetch("https://webhook.site/214e1031-2dd6-4276-8bdf-f57eb291689c", init, post)
//     //     .then((res) =>{
//     //         return res.json();
//     //     })
//     //     .then((data) =>{
//     //         alert(data.sucesso);
//     //     })

// }



let routes = {
    '/': Login,
    '/home': Home,
    '/dash': Dash,
    '/signup': SignUp
}

const router = async () => {

    header.innerHTML = await Header.render();
    await Header.after_render();
    
    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    let request = Utils.parseRequestURL();
    let parseUrl = ( request.resource ? '/' + request.resource : '/' ) + ( request.verb ? '/' + request.verb : '');

    let page = routes[parseUrl] ? routes[parseUrl] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);