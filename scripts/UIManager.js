import {camera, renderer} from "./SceneBasics.js";

let body = document.body,
    html = document.documentElement,
    info = document.getElementById("info"),
    message = document.getElementById("message");

setMessageWidth();
message.style.visibility = 'visible';

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    info.style.width = '100%';
    info.style.height = '100%';
    setMessageWidth();
}, false);


function setMessageWidth(){
    if(calculatePixelRatio() < 0.90){
        message.style.width = "90%";
    }
}

function calculatePixelRatio(){
    let height = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    let width = Math.max( body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth);

    return width / height;
}

