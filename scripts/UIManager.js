import {camera, renderer} from "./SceneBasics.js";

let body = document.body,
    html = document.documentElement,
    info = document.getElementById("info"),
    message = document.getElementById("message");

adjustMessageContent();
message.style.visibility = 'visible';

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    info.style.width = '100%';
    info.style.height = '100%';
    adjustMessageContent();
    console.log(getPixelRatio());
}, false);


function adjustMessageContent(){

    if (getPixelRatio() < 0.5){
        message.style.fontSize = '100%';
        message.style.width = "95%";
    }

    else if(getPixelRatio() < 1.0){
        message.style.fontSize = '115%';
        message.style.width = "90%";
    }

    else if(getPixelRatio() < 1.2){
        message.style.fontSize = '120%';
        message.style.width =  '75%';
    }

    else if (getWidth() > 1024){
        message.style.fontSize = '130%';
        message.style.width =  '55%';
    }

    else{
        message.style.fontSize = '120%';
        message.style.width =  '80%';
    }

}


function getPixelRatio(){
    return getWidth() / getHeight();
}

function getHeight(){
    return Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function getWidth(){
    return Math.max( body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth);
}

